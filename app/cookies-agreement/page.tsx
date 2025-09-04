import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | DevCraft Agency",
  description:
    "Information about how we use cookies and similar technologies on our website.",
};

export default function CookiesPage() {
  return (
    <LegalPageLayout 
      title="Cookie Policy" 
      dateText="Last updated: September 2, 2025"
    >
          <h2>What cookies are</h2>
          <p>
            Small files stored on your device. We use them to run the site,
            remember preferences, and measure performance.
          </p>

          <h2>How we use cookies</h2>
          <ul>
            <li>
              <strong>Strictly necessary</strong>: security, load balancing,
              session management.
            </li>
            <li>
              <strong>Preferences</strong>: language, theme, saved form state.
            </li>
            <li>
              <strong>Analytics</strong>: aggregated usage to improve the site.
            </li>
            <li>
              <strong>Marketing (optional)</strong>: only with consent.
            </li>
          </ul>

          <h2>Managing cookies</h2>
          <p>
            Use our consent banner to accept or reject non-essential cookies.
            You can also control cookies in your browser settings.
          </p>

          <h2>Retention</h2>
          <p>
            Session cookies expire when you close your browser. Persistent
            cookies last from <strong>1 day to 13 months</strong> depending on
            purpose.
          </p>

          <h2>Cookie table (example)</h2>
          <table className="border-collapse border border-white/10 w-full mt-4">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Purpose</th>
                <th className="text-left p-2">Provider</th>
                <th className="text-left p-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-2">__cf_bm</td>
                <td className="p-2">Necessary</td>
                <td className="p-2">Bot management</td>
                <td className="p-2">Cloudflare</td>
                <td className="p-2">30 min</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">_ga</td>
                <td className="p-2">Analytics</td>
                <td className="p-2">Site usage</td>
                <td className="p-2">Google</td>
                <td className="p-2">13 months</td>
              </tr>
              <tr>
                <td className="p-2">plausible_ignore</td>
                <td className="p-2">Preference</td>
                <td className="p-2">Opt-out flag</td>
                <td className="p-2">DevCraft Agency</td>
                <td className="p-2">1 year</td>
              </tr>
            </tbody>
          </table>

          <h2>Changes made</h2>
          <p>
            We update this table when our vendors change. Last updated:
            September 2, 2025.
          </p>

          <p>
            Contact:{" "}
            <a
              href="mailto:privacy@devcraftagency.com"
              className="text-brand hover:underline"
            >
              privacy@devcraftagency.com
            </a>
          </p>
    </LegalPageLayout>
  );
}
