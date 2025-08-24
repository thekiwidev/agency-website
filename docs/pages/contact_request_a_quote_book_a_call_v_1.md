# Contact · Request a Quote · Book a Call — V1

> Replace **[Agency]** with your brand. Single page that unifies 6.9 (Contact/Quote) and 6.10 (Book a Call). Supports Cal.com or Calendly. All forms flow into CRM and email. Rates: **\$15–\$25/hr**.

---

## SEO

**Meta title**: Contact, Request a Quote, or Book a Call — [Agency]\
**Meta description**: Talk to engineers today. Book a call, request a scoped quote, or send a message. Hourly pricing \$15–\$25/hr. Quote in under 48 hours after discovery.

---

## Hero

**H1**: Talk to engineers. Get a scoped quote.\
**Subcopy**: Choose the fastest path. Book a call now, request a quote with details, or send a message. We reply within **2 business hours**.

**Primary CTAs**: **Book a Call** · **Request a Quote** · **Send a Message**\
**Signal chips**: Hourly \$15–\$25/hr · Senior engineers · US‑registered · NDA on request

---

## Page Structure (single route `/contact` with deep links)

- Tabs/segments: **Contact** · **Request a Quote** · **Book a Call**
- Deep links: `/contact#contact`, `/contact#quote`, `/contact#call`.
- Keep state when switching tabs (don’t lose form input).

---

## Sidebar (visible across tabs)

**Contact info**

- **Email**: hello@[agency].com · **Sales**: sales@[agency].com · **Support**: support@[agency].com
- **Phone/WA**: [+1 (XXX) XXX‑XXXX] (US reception hours)
- **Time zones**: US and EU/West Africa overlap (min 4 hours)
- **Address**: US‑registered entity [state], remote‑first team
- **Social**: LinkedIn · GitHub · X · YouTube [handles/links]

**Response promise**: First reply < 2 business hours. Discovery slots available within 1–2 days.

**Security**: NDA on request. Files scanned at upload. We do not ingest production secrets via forms.

---

## Tab: Book a Call

Short intro: Schedule a 30‑ or 45‑minute discovery with a lead engineer. Bring goals, constraints, and timelines.

**Scheduler embed**

- Provider: **Cal.com** preferred; fallback **Calendly**.
- Slots: 30 and 45 minutes. Buffer 15 minutes.
- Pre‑questions (routing): name, email, company, role, service of interest, urgency.
- Confirmation: calendar invite + email with prep checklist.

**Placeholder embed (replace URLs)**

```html
<!-- Cal.com embed -->
<div id="cal-embed"></div>
<script>
  window.Calcom = { namespace: "agency" };
</script>
<link href="https://cal.com/embed/embed.css" rel="stylesheet" />
<script src="https://cal.com/embed/embed.js" async></script>
<script>
  Calcom.embed({
    element: document.getElementById("cal-embed"),
    calLink: "https://cal.com/[agency]/discovery",
    layout: "month_view"
  });
</script>
```

**Prep checklist**

- Repo/brief links (if allowed), target outcomes, deadline, success metrics, stakeholders.

**CTA backup**: Can’t find a time? **Send a message** → switches to Contact tab.

---

## Tab: Request a Quote (multi‑step form)

Short intro: We scope outcomes, estimate hours by role, and send a quote within **48 hours** after discovery. Hourly T&M in the **\$15–\$25/hr** range.

**Step 1 — Basics**

- Full name
- Work email
- Company
- Role
- Phone/WhatsApp (optional)
- Time zone

**Step 2 — Project**

- Service of interest *(multi‑select)*: Web & Mobile · Cyber Security · DevOps · Embedded · AI/ML
- Work type: Full project · Feature/Fix · Audit/Assessment · Ongoing support
- Goals and success criteria *(textarea)*
- Timeline: start window + target date
- Budget range: <\$1k · \$1k–\$5k · \$5k–\$10k · \$10k–\$25k · \$25k+
- Links: repo/brief/docs *(URLs)*
- Attachments: PDF/DOCX/ZIP up to 25MB
- NDA needed? *(toggle)*

**Step 3 — Extras**

- Compliance context: none · healthcare · finance · other
- Preferred meeting length: 30 or 45 min
- Anything else we should know? *(textarea)*

**Review & submit** → Auto‑email to requester and Slack/CRM alert to internal team.

**Post‑submit**

- Thank‑you page with **Book a Call** inline if not already scheduled.
- Email confirmation with ticket/lead ID and next steps.

**Form notes**

- Validation server‑side + hCaptcha.
- File virus scan.
- PII minimization reminder.
- Consent checkbox with link to Privacy & DPA.

---

## Tab: Contact (general inquiries)

Short intro: Use this for support, partnership, or general questions. For scoped work, use **Request a Quote**.

**Subject** *(select)*: Support · Sales · Partnership · Press · Billing · Other\
**Message** *(textarea)*\
**Optional**: service of interest, links, attachments (PDF/DOCX up to 10MB)\
**Contact details**: name, email, company

**Auto‑routing**

- Support → support@[agency].com
- Sales → sales@[agency].com
- Others → hello@[agency].com

**SLA**: We aim to respond within 2 business hours.

---

## On‑page FAQ (accordion)

- **How fast can you start?** Discovery within 1–2 business days. Kickoff depends on scope and team.
- **Can you sign an NDA?** Yes. We can use yours or provide a standard mutual NDA.
- **How do you price work?** Hourly **\$15–\$25/hr** by default. We estimate hours per milestone and share time reports.
- **Do you work in our repos?** Yes. We integrate with your workflows and submit PRs to your repos.
- **Do you offer fixed‑bid?** By exception for well‑defined scopes.

---

## Confirmation Emails (templates)

**Quote request — to requester**\
Subject: We received your request — [Agency]\
Body: Thanks for the details. We’ll review and follow up within 2 business hours. Expect a scoped quote within 48 hours after the discovery call. Manage your booking here: [cal link].

**Call booking — to requester**\
Subject: Your discovery call is booked — [date/time]\
Body: You’re all set. Add agenda items or links by replying to this email.

**General contact — to requester**\
Subject: We got your message — [Agency]\
Body: Thanks for reaching out. We’ll reply shortly. If you need to talk now, pick a time here: [cal link].

**Internal alert**\
Subject: New lead — [type: quote/contact/call]\
Body: Summary with fields and links to CRM + Slack thread.

---

## CRM & Routing (spec)

- Create/Update lead with properties: source, subject, service(s), budget, timeline, region, nda, links, attachments.
- Stage transitions: *New* → *Discovery* (on call booked) → *Quoted* → *Won/Lost*.
- UTM storage and `gclid`/`fbclid` where present.
- Slack alert channel: `#leads` with summary and action buttons.

---

## Analytics (events)

- `contact_tab_viewed {tab}`
- `scheduler_loaded {provider}`
- `call_booked {duration, service}`
- `quote_submitted {services, budget, timeline}`
- `contact_submitted {subject}`
- `file_uploaded {type, size}`

---

## Accessibility & Compliance

- Keyboard and screen‑reader support for tabs and embeds.
- Labels and error summaries on all fields.
- Consent and privacy links visible near submit.
- Cookie consent respected for analytics.
- Data retention policy link.

---

## Home Page Embed (mini block)

**H3**: Start now\
Buttons: **Book a Call** (scrolls/links to `/contact#call`) · **Request a Quote** (`/contact#quote`) · **Send a Message** (`/contact#contact`)\
Microcopy: First reply in **< 2 hours**. Quote in **< 48 hours** after discovery. Hourly **\$15–\$25/hr**.

---

## JSON Config (example)

```json
{
  "scheduler": {
    "provider": "cal.com",
    "link": "https://cal.com/[agency]/discovery",
    "durations": [30, 45]
  },
  "routing": {
    "support": "support@[agency].com",
    "sales": "sales@[agency].com",
    "default": "hello@[agency].com"
  },
  "upload": {"maxMb": 25, "types": ["pdf", "docx", "zip"]}
}
```

---

## Microcopy & Legal

- “Estimates are informational until a formal quote is issued.”
- “All work is billed hourly within **\$15–\$25/hr** unless a fixed‑bid SOW is signed.”
- “Do not upload production secrets or credentials.”
- “We comply with reasonable customer security addenda.”

