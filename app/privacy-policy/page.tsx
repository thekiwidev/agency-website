import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | DevCraft Agency",
  description:
    "Our privacy policy explains how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout 
      title="Privacy Policy" 
      dateText="Last updated: September 2, 2025"
    >
          <h2>Who we are</h2>
          <p>
            DevCraft Agency is a US-registered, remote-first engineering
            company. We provide software services in Web & Mobile, Cyber
            Security, DevOps, Embedded Systems, and AI/ML.
          </p>

          <h2>Scope</h2>
          <p>
            This policy covers personal data we collect through our website,
            forms, scheduling tools, email, and during service delivery to
            customers and applicants.
          </p>

          <h2>Data we collect</h2>
          <p>
            <strong>Site visitors</strong>: device data, IP, analytics events,
            cookie identifiers, consent preferences.
          </p>
          <p>
            <strong>Leads & clients</strong>: name, business contact details,
            company, role, project info, budget/timeline, files you upload
            (briefs, docs), call recordings if you consent.
          </p>
          <p>
            <strong>Applicants/contractors</strong>: resume/CV, portfolio links,
            employment history, skills, location/time zone, references, payout
            details where applicable.
          </p>
          <p>
            <strong>Source code & technical assets</strong>: repositories,
            configuration, logs, and related artifacts that you share for the
            engagement. See <strong>Source Code Handling</strong> below.
          </p>
          <p>We do not intentionally collect data from children under 13.</p>

          <h2>How we collect it</h2>
          <p>
            Directly from you (forms, email, scheduling), from your systems we
            integrate with (e.g., GitHub, cloud platforms with your
            authorization), and via cookies/analytics on our site.
          </p>

          <h2>Why we process data (purposes)</h2>
          <ul>
            <li>Provide and improve services; scope and deliver projects.</li>
            <li>Communicate about quotes, scheduling, and support.</li>
            <li>Security and fraud prevention.</li>
            <li>Recruiting and contractor onboarding.</li>
            <li>Legal compliance, accounting, and recordkeeping.</li>
            <li>Marketing with your consent where required.</li>
          </ul>

          <h2>Legal bases (if applicable)</h2>
          <p>
            Contract performance; legitimate interests in operating and securing
            our services; consent for optional analytics/marketing; compliance
            with legal obligations.
          </p>

          <h2>Sharing and disclosures</h2>
          <p>
            We share data with vendors that help us operate (hosting, email,
            CRM, scheduling, analytics, payments). We require confidentiality
            and security commitments from these providers. We do not sell
            personal information. We do not use client source code in other
            client work.
          </p>

          <h2>International transfers</h2>
          <p>
            Data may be processed outside your country. Where required, we use
            appropriate safeguards such as standard contractual clauses.
          </p>

          <h2>Data retention</h2>
          <ul>
            <li>
              <strong>Leads</strong>: 24 months after last interaction, unless
              you ask us to delete sooner.
            </li>
            <li>
              <strong>Client records</strong>: for the term of the agreement and
              as needed for legal/accounting (typically 7 years for invoices).
            </li>
            <li>
              <strong>Applicant records</strong>: 24 months, or sooner on
              request.
            </li>
            <li>
              <strong>Source code copies</strong>: see policy below.
            </li>
          </ul>

          <h2>Source Code Handling & Retention</h2>
          <ul>
            <li>
              We work primarily in your repos. At delivery, we keep a{" "}
              <strong>private, read-only copy</strong> of submitted source code
              in GitHub/Bitbucket under our organization for{" "}
              <strong>reference and continuity</strong>.
            </li>
            <li>
              Access is limited to least-privilege personnel for support,
              warranty, or follow-on work.
            </li>
            <li>
              Repos are <strong>private</strong>, protected by SSO, MFA, and
              audit logging.
            </li>
            <li>
              We <strong>do not</strong> reuse your proprietary code, assets, or
              data for other clients.
            </li>
            <li>
              We <strong>do not</strong> use your code or data to train machine
              learning models.
            </li>
            <li>
              Retention: default <strong>24–36 months</strong> from delivery or
              the last paid work, whichever is later, unless your contract
              specifies otherwise.
            </li>
            <li>
              Upon written request or at contract end, we will{" "}
              <strong>delete or return</strong> our copy within{" "}
              <strong>30</strong> days, subject to lawful retention requirements
              and backups that roll off automatically.
            </li>
          </ul>

          <h2>Security overview</h2>
          <p>
            See the <strong>Security</strong> section of this document. Core
            controls include encryption in transit, restricted access, audit
            logs, and secure development practices.
          </p>

          <h2>Your rights</h2>
          <p>
            Depending on your region, you may have rights to access, correct,
            delete, restrict, or port your personal data, and to object to
            certain processing. You can exercise rights by contacting us.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies and similar technologies for essential site
            functionality, analytics, and to remember your preferences. See the{" "}
            <strong>Cookie Policy</strong> below.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy. Material changes will be noted on this
            page with a new &quot;Last updated&quot; date.
          </p>

          <h2>Contact</h2>
          <p>
            Privacy questions:{" "}
            <a
              href="mailto:privacy@devcraftagency.com"
              className="text-brand hover:underline"
            >
              privacy@devcraftagency.com
            </a>
          </p>
          <p>
            Security questions or reports:{" "}
            <a
              href="mailto:security@devcraftagency.com"
              className="text-brand hover:underline"
            >
              security@devcraftagency.com
            </a>
          </p>
          <p>
            Postal address: DevCraft Agency, 123 Tech Street, San Francisco, CA
            94105, USA
          </p>

          <h3>Regional notices</h3>
          <ul>
            <li>
              <strong>California</strong>: We do not sell or share personal
              information as defined by CPRA. Submit requests at
              privacy@devcraftagency.com.
            </li>
            <li>
              <strong>EEA/UK</strong>: If applicable, contact our EU/UK
              representative/DPO if appointed.
            </li>
          </ul>
    </LegalPageLayout>
  );
}
