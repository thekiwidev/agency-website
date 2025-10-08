import { z } from "zod";

const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/zip",
  "application/x-zip-compressed",
];

export const QuoteRequestSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().min(2, "Company name must be at least 2 characters."),
  role: z.string().min(2, "Your role must be at least 2 characters."),

  services: z.array(z.string()).nonempty({ message: "Please select at least one service." }),
  workType: z.string().min(1, "Please select a work type."),
  goals: z.string().min(20, "Please describe your goals in at least 20 characters."),
  timeline: z.string().min(2, "Please provide an estimated timeline."),
  budget: z.string().min(1, "Please select a budget range."),
  links: z.string().url("Please enter a valid URL.").optional().or(z.literal('')),
  nda: z.boolean(),

  complianceContext: z.string().min(1, "Please select a compliance context."),
  meetingLength: z.enum(["30", "45"]),
  notes: z.string().optional(),

  attachments: z
    .any()
    .refine((file) => !file || file.size === 0 || file.size <= MAX_FILE_SIZE, `Max file size is 25MB.`)
    .refine(
      (file) => !file || file.size === 0 || ACCEPTED_FILE_TYPES.includes(file.type),
      "Only .pdf, .docx, and .zip files are accepted."
    )
    .optional(),
});

export type QuoteRequestData = z.infer<typeof QuoteRequestSchema>;