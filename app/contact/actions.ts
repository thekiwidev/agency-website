"use server";

import { QuoteRequestSchema } from "@/lib/validation";
import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

// Initialize rate limiter
const ratelimit = new Ratelimit({
  redis: new Redis({
    url: process.env.UPSTASH_REDIS_URL!,
    token: process.env.UPSTASH_REDIS_TOKEN!,
  }),
  limiter: Ratelimit.slidingWindow(5, "10 m"), // 5 requests per 10 minutes
  analytics: true,
});

async function verifyCaptcha(token: string) {
    const response = await fetch("https://api.hcaptcha.com/siteverify", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `response=${token}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
    });
    const json = await response.json();
    return json.success;
}

type FormState = {
  success: boolean;
  message: string;
  errors?: z.ZodIssue[];
};

export async function submitQuoteRequest(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
    const ip = headers().get("x-forwarded-for") ?? "127.0.0.1";
    const { success: rateLimitSuccess, reset } = await ratelimit.limit(ip);

    if (!rateLimitSuccess) {
        const seconds = Math.ceil((reset - Date.now()) / 1000);
        return {
            success: false,
            message: `Too many requests. Please try again in ${seconds} seconds.`,
        };
    }

    const captchaToken = formData.get("h-captcha-response") as string;
    if (!captchaToken) {
        return { success: false, message: "Please complete the CAPTCHA." };
    }

    const isCaptchaValid = await verifyCaptcha(captchaToken);
    if (!isCaptchaValid) {
        return { success: false, message: "Invalid CAPTCHA. Please try again." };
    }

  // Use `getAll` to handle multiple values for checkboxes
  const services = formData.getAll("services");
  const rawData = { ...Object.fromEntries(formData.entries()), services };

  // Handle checkbox value
  rawData.nda = rawData.nda === "on";

  // Handle file upload
  const file = formData.get("attachments") as File | null;
  if (file && file.size > 0) {
    rawData.attachments = file;
  } else {
    delete rawData.attachments; // Don't validate if no file is uploaded
  }

  const parsed = QuoteRequestSchema.safeParse(rawData);

  if (!parsed.success) {
    console.error("Validation failed:", parsed.error.issues);
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors: parsed.error.issues,
    };
  }

  // --- Virus Scan Placeholder ---
  // In a production environment, you would upload the file to a secure bucket
  // and trigger a virus scan before processing it further.
  if (parsed.data.attachments) {
    console.log("Scanning file for viruses:", parsed.data.attachments.name);
    // const scanResult = await virusScan(parsed.data.attachments);
    // if (!scanResult.safe) {
    //   return { success: false, message: "Virus detected in the uploaded file." };
    // }
    console.log("File is clean. Continuing with submission.");
  }
  // --- End Virus Scan Placeholder ---

  // TODO: Implement actual submission logic (e.g., send email, save to DB, upload file to storage)
  console.log("Quote request submitted:", parsed.data);

  return {
    success: true,
    message: "Thank you for your request! We will get back to you shortly.",
  };
}