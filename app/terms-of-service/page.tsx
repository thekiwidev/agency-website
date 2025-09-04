import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service | DevCraft Agency",
  description:
    "Terms of service for our software development services and client engagements.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout 
      title="Terms of Service" 
      dateText="Effective date: September 2, 2025"
    >
          <h2>1. Definitions</h2>
          <p>
            &quot;Client,&quot; &quot;Project,&quot; &quot;Deliverables,&quot;
            &quot;SOW,&quot; &quot;Confidential Information,&quot; &quot;Open
            Source Software,&quot; etc.
          </p>

          <h2>2. Engagement & Scope</h2>
          <p>
            Work is described in a Quote or SOW. Hourly time-and-materials by
            default at the rates set out in the Quote (typ. $15–$25/hr), with
            estimates by role and milestone. Fixed-bid available by exception.
          </p>

          <h2>3. Change Management</h2>
          <p>
            Out-of-scope work is estimated and approved in writing before we
            proceed. We may adjust timelines and estimates when scope changes.
          </p>

          <h2>4. Fees, Invoicing, Taxes</h2>
          <p>
            Weekly invoices; net 7 unless otherwise agreed. Late amounts may
            accrue a reasonable finance charge as permitted by law. Client pays
            applicable taxes excluding our income taxes.
          </p>

          <h2>5. Expenses</h2>
          <p>
            Pre-approved, reasonable expenses are reimbursable at cost (e.g.,
            travel, test devices).
          </p>

          <h2>6. Client Obligations</h2>
          <p>
            Provide timely access to code, systems, environments, and staff.
            Designate a decision-maker. Maintain backups of your own systems.
          </p>

          <h2>7. Intellectual Property & License</h2>
          <p>
            Upon full payment, <strong>Client owns</strong> the Deliverables we
            create specifically for the Project, excluding our pre-existing
            materials, tools, or generic components. We grant Client a
            perpetual, worldwide, royalty-free license to our pre-existing
            materials as incorporated in the Deliverables. Open source
            components remain under their respective licenses.
          </p>

          <h2>8. Open Source & Third-Party Software</h2>
          <p>
            We may use open source and third-party software in line with
            industry practices. We will disclose licenses that require
            attribution or source availability.
          </p>

          <h2>9. Acceptance</h2>
          <p>
            Deliverables are deemed accepted when they meet agreed acceptance
            criteria or, if none, when materially conforming to the SOW and no
            rejection notice is given within <strong>10</strong> business days
            of delivery.
          </p>

          <h2>10. Warranties</h2>
          <p>
            We warrant that we will perform services in a professional,
            workmanlike manner. Except as stated, services and deliverables are
            provided <strong>&quot;as is&quot;</strong> to the maximum extent
            permitted by law.
          </p>

          <h2>11. Confidentiality</h2>
          <p>
            Each party will protect the other&apos;s Confidential Information
            with reasonable care and use it only for the Project. Source code,
            credentials, and business plans are Confidential Information.
          </p>

          <h2>12. Security & Data Processing</h2>
          <p>
            We follow the security practices outlined in the{" "}
            <strong>Security</strong> section and, where applicable, the{" "}
            <strong>Data Processing Addendum (DPA)</strong> forms part of these
            Terms when we process personal data on your behalf.
          </p>

          <h2>13. Non-Solicitation (optional)</h2>
          <p>
            During the engagement and for <strong>12</strong> months after,
            Client will not directly hire our employees or contractors who
            worked on the Project without our written consent. If included, an
            optional fee may apply for conversion.
          </p>

          <h2>14. Indemnities</h2>
          <ul>
            <li>
              <strong>By us</strong>: We will defend indemnify against
              third-party claims alleging that Deliverables infringe IP rights,
              excluding claims arising from Client materials or instructions.
            </li>
            <li>
              <strong>By Client</strong>: Client will defend indemnify against
              claims arising from Client&apos;s data, instructions, or unlawful
              use of the Deliverables.
            </li>
          </ul>

          <h2>15. Limitation of Liability</h2>
          <p>
            Neither party is liable for indirect, incidental, special,
            consequential, or punitive damages, nor for lost profits or
            revenues. Our total liability is capped at the fees paid by Client
            for the prior <strong>3</strong> months, except for confidentiality
            or IP indemnity obligations.
          </p>

          <h2>16. Term & Termination</h2>
          <p>
            Either party may terminate for convenience on <strong>7</strong>{" "}
            days&apos; notice or for cause upon breach uncured for{" "}
            <strong>10</strong> days. Client will pay for work performed to
            termination date. On termination we will hand over work-in-progress
            and, on request, delete or return Client data per the DPA.
          </p>

          <h2>17. Publicity</h2>
          <p>
            We may reference Client&apos;s name and logo as a customer only with
            prior written consent. Case studies require Client approval.
          </p>

          <h2>18. Force Majeure</h2>
          <p>
            Neither party is liable for delays due to events beyond reasonable
            control.
          </p>

          <h2>19. Governing Law & Venue</h2>
          <p>
            State of California, USA, without regard to conflict of law
            principles. Exclusive venue: San Francisco County courts.
          </p>

          <h2>20. Miscellaneous</h2>
          <p>
            Entire agreement, assignment, notices, severability, independent
            contractors, no waiver, order of precedence (SOW &gt; Terms &gt;
            Privacy).
          </p>
    </LegalPageLayout>
  );
}
