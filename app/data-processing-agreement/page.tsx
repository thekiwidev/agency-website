import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Data Processing Addendum | DevCraft Agency",
  description:
    "Data Processing Addendum for GDPR and data protection compliance.",
};

export default function DpaPage() {
  return (
    <LegalPageLayout 
      title="Data Processing Addendum" 
      dateText="Last updated: September 2, 2025"
    >
          <p>
            This DPA forms part of the Terms when DevCraft Agency processes
            personal data on behalf of Client under applicable data protection
            laws.
          </p>

          <h2>1. Roles</h2>
          <p>
            Client is the <strong>Controller</strong>. DevCraft Agency is the{" "}
            <strong>Processor</strong>.
          </p>

          <h2>2. Subject Matter & Duration</h2>
          <p>
            Processing personal data to deliver the services described in the
            SOW/Quote for the term of the agreement and any legally required
            retention.
          </p>

          <h2>3. Nature & Purpose</h2>
          <p>
            Hosting, development, testing, support, observability, and security
            activities required to provide the services.
          </p>

          <h2>4. Categories of Data & Data Subjects</h2>
          <p>
            Data subjects may include Client&apos;s users, customers, employees,
            and contractors. Personal data may include identifiers, contact
            details, usage data, logs, and content stored in systems we access
            on Client&apos;s instructions. Sensitive data should not be provided
            unless explicitly agreed in writing.
          </p>

          <h2>5. Processor Obligations</h2>
          <ul>
            <li>
              Process personal data only on documented instructions from Client.
            </li>
            <li>Ensure personnel are bound by confidentiality.</li>
            <li>
              Implement appropriate technical and organizational measures (Annex
              II).
            </li>
            <li>
              Assist Client with data subject requests and impact assessments.
            </li>
            <li>
              Delete or return personal data at the end of the engagement per
              Client instructions.
            </li>
            <li>Maintain records of processing as required by law.</li>
          </ul>

          <h2>6. Sub-processors</h2>
          <p>
            Client authorizes the use of sub-processors listed in{" "}
            <strong>Annex III</strong> and any replacements upon notice. We
            remain responsible for sub-processors&apos; performance.
          </p>

          <h2>7. Security</h2>
          <p>
            We maintain the security measures in <strong>Annex II</strong> and
            the <strong>Security</strong> section. We will not materially
            decrease security during the term.
          </p>

          <h2>8. Personal Data Breach</h2>
          <p>
            We will notify Client <strong>without undue delay</strong> after
            becoming aware of a personal data breach affecting Client data and
            will provide information to support Client&apos;s notifications.
          </p>

          <h2>9. International Transfers</h2>
          <p>
            Where required, we will use appropriate safeguards (e.g., Standard
            Contractual Clauses). Additional terms in Annexes may apply.
          </p>

          <h2>10. Audits</h2>
          <p>
            Upon reasonable notice, Client may audit our compliance once per
            year (or more after a material incident). Audits must protect
            confidentiality and avoid undue disruption.
          </p>

          <h2>11. Deletion & Return</h2>
          <p>
            Upon termination or upon written request, we will delete or return
            personal data within <strong>30</strong> days, subject to legal
            retention and backup cycles. We will certify deletion upon request.
          </p>

          <h2>12. Liability & Order of Precedence</h2>
          <p>
            Liability is governed by the Terms. In case of conflict, this DPA
            controls regarding data protection obligations.
          </p>

          <p>
            <strong>Annex I — Processing Details</strong>: see project SOW for
            specific systems, data types, and retention.
          </p>
          <p>
            <strong>Annex II — Security Measures</strong>: below.
          </p>
          <p>
            <strong>Annex III — Sub-processors</strong>: template list below.
          </p>
    </LegalPageLayout>
  );
}
