"use client";

"use client";

import * as React from "react";
import { useFormState } from "react-dom";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Button } from "@/components/ui/button";
import { submitQuoteRequest } from "@/app/contact/actions";
import type { ZodIssue } from "zod";

const initialState = {
  success: false,
  message: "",
  errors: [],
};

const serviceOptions = [
  { id: "web-mobile", label: "Web & Mobile" },
  { id: "cyber-security", label: "Cyber Security" },
  { id: "devops", label: "DevOps" },
  { id: "embedded", label: "Embedded" },
  { id: "ai-ml", label: "AI/ML" },
];

const workTypeOptions = [
    { id: "full-project", label: "Full project" },
    { id: "feature-fix", label: "Feature/Fix" },
    { id: "audit-assessment", label: "Audit/Assessment" },
    { id: "ongoing-support", label: "Ongoing support" },
];

const budgetOptions = ["<\$1k", "\$1k–\$5k", "\$5k–\$10k", "\$10k–\$25k", "\$25k+"];

export function QuoteForm() {
  const [formState, formAction] = useFormState(submitQuoteRequest, initialState);
  const [step, setStep] = React.useState(1);
  const [captchaToken, setCaptchaToken] = React.useState<string | null>(null);
  const captchaRef = React.useRef<HCaptcha>(null);

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const getError = (fieldName: string) => {
    return formState.errors?.find((e: ZodIssue) => e.path.includes(fieldName))?.message;
  }

  if (formState.success) {
    return (
      <div className="text-center p-8">
        <h3 className="text-2xl font-bold text-white mb-4">Request Sent!</h3>
        <p className="text-white/80">{formState.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8">
      {formState.message && !formState.success && (
        <div className="p-4 bg-red-900/50 border border-red-500 text-red-300 rounded-md">
          <p>{formState.message}</p>
        </div>
      )}

      {step === 1 && (
        <section className="space-y-6 animate-fade-in">
          <h3 className="text-2xl font-bold text-white border-b border-white/20 pb-3">Step 1: Your Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField name="fullName" label="Full Name" error={getError("fullName")} />
            <InputField name="email" label="Work Email" type="email" error={getError("email")} />
            <InputField name="company" label="Company" error={getError("company")} />
            <InputField name="role" label="Your Role" error={getError("role")} />
          </div>
          <div className="flex justify-end">
            <Button onClick={nextStep} size="lg" type="button">Next →</Button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="space-y-6 animate-fade-in">
          <h3 className="text-2xl font-bold text-white border-b border-white/20 pb-3">Step 2: Project Details</h3>
          <CheckboxGroup label="Services of Interest" name="services" options={serviceOptions} error={getError("services")} />
          <RadioGroup label="Work Type" name="workType" options={workTypeOptions} error={getError("workType")} />
          <TextareaField name="goals" label="Goals & Success Criteria" error={getError("goals")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <InputField name="timeline" label="Timeline (e.g., '3 months', 'Q4')" error={getError("timeline")} />
             <SelectField name="budget" label="Budget Range" options={budgetOptions} error={getError("budget")} />
          </div>
          <InputField name="links" label="Links (Repo, Brief, Docs)" type="url" placeholder="https://..." error={getError("links")} />
          <FileInput name="attachments" label="Attachments (PDF, DOCX, ZIP up to 25MB)" error={getError("attachments")} />
          <div className="flex justify-between">
            <Button onClick={prevStep} variant="secondary" size="lg" type="button">← Previous</Button>
            <Button onClick={nextStep} size="lg" type="button">Next →</Button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="space-y-6 animate-fade-in">
          <h3 className="text-2xl font-bold text-white border-b border-white/20 pb-3">Step 3: Extras & Submit</h3>
           <RadioGroup label="Compliance Context" name="complianceContext" options={[{id: "none", label: "None"}, {id: "healthcare", label: "Healthcare"}, {id: "finance", label: "Finance"}, {id: "other", label: "Other"}]} error={getError("complianceContext")} />
           <RadioGroup label="Preferred Meeting Length" name="meetingLength" options={[{id: "30", label: "30 minutes"}, {id: "45", label: "45 minutes"}]} error={getError("meetingLength")} />
          <TextareaField name="notes" label="Anything else we should know?" error={getError("notes")} />
          <div className="flex items-start">
              <input id="nda" name="nda" type="checkbox" className="h-5 w-5 mt-0.5 rounded border-gray-300 text-brand focus:ring-brand" />
              <label htmlFor="nda" className="ml-3 block text-sm text-white/80">
                  <span className="font-semibold text-white">Need an NDA?</span>
                  <p>Check this box if you&apos;ll require a Non-Disclosure Agreement for this project.</p>
              </label>
          </div>
          <div className="space-y-4">
            <HCaptcha
              ref={captchaRef}
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
              onVerify={setCaptchaToken}
              onExpire={() => setCaptchaToken(null)}
            />
            <input type="hidden" name="h-captcha-response" value={captchaToken || ""} />
          </div>
          <div className="flex justify-between">
            <Button onClick={prevStep} variant="secondary" size="lg" type="button">← Previous</Button>
            <Button type="submit" size="lg" disabled={!captchaToken}>Submit Request</Button>
          </div>
        </section>
      )}
    </form>
  );
}

// --- Form Field Components ---

function FileInput({ name, label, error }: { name: string, label: string, error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-white/80 mb-1">{label}</label>
      <input type="file" id={name} name={name} className={`w-full bg-navy-700 border rounded-md p-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand file:text-white hover:file:bg-brand/90 ${error ? 'border-red-500' : 'border-white/20'}`} />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}

function InputField({ name, label, type = "text", placeholder, error }: { name: string, label: string, type?: string, placeholder?: string, error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-white/80 mb-1">{label}</label>
      <input type={type} id={name} name={name} placeholder={placeholder} className={`w-full bg-navy-700 border rounded-md p-2 ${error ? 'border-red-500' : 'border-white/20'}`} />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}

function TextareaField({ name, label, error }: { name: string, label: string, error?: string }) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-white/80 mb-1">{label}</label>
            <textarea id={name} name={name} rows={4} className={`w-full bg-navy-700 border rounded-md p-2 ${error ? 'border-red-500' : 'border-white/20'}`}></textarea>
            {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
        </div>
    );
}

function SelectField({ name, label, options, error }: { name: string, label: string, options: string[], error?: string }) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-white/80 mb-1">{label}</label>
            <select id={name} name={name} className={`w-full bg-navy-700 border rounded-md p-2 ${error ? 'border-red-500' : 'border-white/20'}`}>
                {options.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
            {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
        </div>
    );
}

function CheckboxGroup({ label, name, options, error }: { label: string, name: string, options: {id: string, label: string}[], error?: string }) {
    return (
        <fieldset>
            <legend className="block text-sm font-medium text-white/80 mb-2">{label}</legend>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {options.map(option => (
                    <div key={option.id} className="flex items-center">
                        <input id={`${name}-${option.id}`} name={name} value={option.id} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand" />
                        <label htmlFor={`${name}-${option.id}`} className="ml-3 block text-sm text-white/90">{option.label}</label>
                    </div>
                ))}
            </div>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </fieldset>
    );
}

function RadioGroup({ label, name, options, error }: { label: string, name: string, options: {id: string, label: string}[], error?: string }) {
    return (
        <fieldset>
            <legend className="block text-sm font-medium text-white/80 mb-2">{label}</legend>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
                {options.map(option => (
                    <div key={option.id} className="flex items-center">
                        <input id={`${name}-${option.id}`} name={name} value={option.id} type="radio" className="h-4 w-4 border-gray-300 text-brand focus:ring-brand" />
                        <label htmlFor={`${name}-${option.id}`} className="ml-3 block text-sm text-white/90">{option.label}</label>
                    </div>
                ))}
            </div>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </fieldset>
    );
}