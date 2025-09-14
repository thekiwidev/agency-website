"use client";
import { useEffect, useState } from "react";

export function ConsentManager() {
  const [consent, setConsent] = useState<null | boolean>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("analytics_consent");
      if (stored !== null) setConsent(stored === "true");
    } catch {}
  }, []);

  useEffect(() => {
    if (consent === null) return;
    try {
      localStorage.setItem("analytics_consent", String(consent));
    } catch {}

    if (consent) {
      const s1 = document.createElement("script");
      s1.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXX";
      s1.async = true;
      document.head.appendChild(s1);

      const inline = document.createElement("script");
      inline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());
        gtag('config', 'G-XXXX', { anonymize_ip: true });
      `;
      document.head.appendChild(inline);

      const plausible = document.createElement("script");
      plausible.setAttribute("data-domain", "p-diamond-domain.com");
      plausible.src = "https://plausible.io/js/script.js";
      plausible.defer = true;
      document.head.appendChild(plausible);
    }
  }, [consent]);

  if (consent !== null) return null;
  return (
    <div className="fixed bottom-4 right-4 bg-navy-800 p-4 rounded shadow text-sm max-w-xs border border-white/10">
      <p className="mb-2">Allow analytics cookies?</p>
      <div className="flex gap-2">
        <button
          onClick={() => setConsent(true)}
          className="px-3 py-1 bg-white text-black rounded"
        >
          Allow
        </button>
        <button
          onClick={() => setConsent(false)}
          className="px-3 py-1 border border-white/30 rounded"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
