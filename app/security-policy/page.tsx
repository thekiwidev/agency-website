import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Security | DevCraft Agency",
  description:
    "Our security practices and measures for protecting client data and systems.",
};

export default function SecurityPage() {
  return (
    <LegalPageLayout 
      title="Security" 
      dateText="Last updated: September 2, 2025"
    >
          <h2>Overview</h2>
          <p>
            Security is built into our process. We protect client code and data
            using layered controls, least-privilege access, and standard secure
            development practices.
          </p>

          <h2>Hosting & Network</h2>
          <p>
            We use industry-leading cloud providers with SOC 2 Type II
            compliance. All data in transit is encrypted using TLS 1.3. Networks
            are segmented with firewalls and intrusion detection systems.
          </p>

          <h2>Access Controls</h2>
          <p>
            Access is granted on a need-to-know basis with multi-factor
            authentication (MFA) required for all accounts. We use role-based
            access control (RBAC) and audit all access logs.
          </p>

          <h2>Data Encryption</h2>
          <p>
            Data at rest is encrypted using AES-256. Client-specific encryption
            keys are managed separately. Backups are encrypted and stored
            securely.
          </p>

          <h2>Development Security</h2>
          <p>
            We follow secure coding practices, including code reviews, automated
            security scanning, and dependency vulnerability management. All code
            is scanned for secrets before deployment.
          </p>

          <h2>Incident Response</h2>
          <p>
            We have a documented incident response plan with 24/7 monitoring. In
            case of a security incident, we notify affected clients within 72
            hours and provide full remediation support.
          </p>

          <h2>Compliance</h2>
          <p>
            We maintain certifications including SOC 2 Type II, ISO 27001, and
            GDPR compliance. Regular third-party audits ensure ongoing adherence
            to security standards.
          </p>

          <h2>Contact</h2>
          <p>
            For security questions or reports:{" "}
            <a
              href="mailto:security@devcraftagency.com"
              className="text-brand hover:underline"
            >
              security@devcraftagency.com
            </a>
          </p>
    </LegalPageLayout>
  );
}
