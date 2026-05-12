# Futurera Academy — Operations Setup

The site is static HTML. The application + payment flow is **email-driven**:
no booking widget, no payment processor, no auto-pipelines. Just a contact
form, your email, and Interac e-Transfer.

**Total setup time: ~30 minutes. Cost: $0.**

---

## The flow

```
PARENT FINDS SITE
       │
       ▼
   Get in touch
   ├─ Contact form (Tally) → email to your inbox
   └─ Direct mailto link → email to your inbox
       │
       ▼
   YOU email back to start the conversation
       │
       ▼
   IF a call helps:
      YOU send a manual calendar invite
      (Google Calendar / Outlook · 30 seconds)
       │
       ▼
   YOU email Acceptance + e-transfer instructions
       │
       ▼
   PARENT sends e-transfer (auto-deposits to your bank)
       │
       ▼
   YOU email Confirmation + welcome packet
       │
       ▼
   PROGRAM STARTS
```

---

## 1 · Bank — set up Interac e-Transfer Auto-Deposit *(5 min)*

In your bank's mobile app or website → **Interac e-Transfer settings** → **Register for Auto-Deposit**:

- Email address: `hello@futurera.org` *(or a dedicated `payments@futurera.ca` later)*
- Linked account: your business or operating account

**Why this matters**: with Auto-Deposit, the parent doesn't need to set a security question. Their transfer lands in your account automatically and you get a notification email. Frictionless.

---

## 2 · Tally — contact form *(10 min)*

1. Sign up at [tally.so](https://tally.so) — free plan: 100 submissions/month
2. **Create form** → name it **"Contact Futurera"**
3. Add 4 fields:

| # | Field | Type | Required |
|---|---|---|---|
| 1 | Your name | Short text | ✓ |
| 2 | Your email | Email | ✓ |
| 3 | Who is this for? | Dropdown: *My child / Myself (student) / I represent a school or partner* | ✓ |
| 4 | Your message | Long text | ✓ |

4. **Form settings → Email notifications**: enable submissions → route to `hello@futurera.org`
5. Copy the share URL — it'll look like `https://tally.so/r/abc123`
6. Send me the URL — I'll wire it into the site

**Optional second Tally form (later)**: a "Stay updated" newsletter form with just an email field. Sits in the newsletter strip on the homepage. Use this when you actually want to start sending cohort announcements.

---

## 3 · Email templates *(15 min · save in Gmail or Outlook as drafts)*

Four templates you'll reuse for every applicant. Save them in your email client's **"Templates"** feature and customize the placeholders before sending.

### Template A — First reply (after contact form)

```
Subject: Re: Your Futurera inquiry

Hi [first name],

Thanks for reaching out. Happy to answer any questions about the program.

Could you share a bit more so I can give you a useful response:
  - Student's grade and approximate age
  - What you're hoping the program would help them with
  - Any specific concerns or questions

If at any point a phone or video call would be more useful, just say so —
I'll send you a calendar invite for a time that works.

— [Your name]
Program Lead · Futurera Academy
```

### Template B — Acceptance + payment instructions

```
Subject: Welcome to Summer 2026 — next steps inside

Hi [parent first name],

Thank you for the conversation this past week. We'd love to have
[student first name] in the Summer 2026 cohort.

Tuition is $X,XXX CAD. To secure the seat, please send an Interac e-Transfer:

  Send to:    hello@futurera.org
  Amount:     $X,XXX CAD
  Reference:  [Student name] · Summer 2026

Auto-deposit is enabled on our end, so no security question needed.

Once the transfer arrives, I'll send a confirmation email with the full
welcome packet (location, day-one schedule, what to bring).

We'll hold the seat for 7 days from today.

— [Your name]
```

### Template C — Payment confirmed + welcome

```
Subject: Confirmed — see you July 13

Hi [parent first name],

The e-transfer arrived. [Student first name]'s seat is confirmed.

  Dates:           July 13–24, 2026 (Mon–Fri)
  Schedule:        9:00 AM – 12:00 PM
  Location:        [address]
  What to bring:   [laptop / notebook]
  Day-one contact: [your name + phone]

I'll send a more detailed welcome email two weeks before the cohort starts
with parking info and a short pre-reading.

Looking forward to it.

— [Your name]
```

### Template D — Decline (gentle, leaves door open)

```
Subject: A note on Summer 2026

Hi [parent first name],

Thank you for the conversation. After thinking it through, I don't think
the Summer 2026 cohort is the right fit for [student first name] right now.

[1–2 honest, specific sentences. e.g.: "the format assumes more
self-direction than feels right at this stage" / "the program's pace is
geared toward students already comfortable with X".]

I'd suggest revisiting this for the Fall 2026 cohort, or take a look at
[alternative if you have one].

If your thinking changes, write back any time.

— [Your name]
```

---

## 4 · Tracking spreadsheet *(2 min · Google Sheet)*

A single sheet with these columns:

| Student Name | Parent Name | Parent Email | Inquiry Date | Decision | Payment Date | Amount | Status |
|---|---|---|---|---|---|---|---|

Status values:
`Inquiry · In conversation · Accepted (awaiting payment) · Paid · Confirmed · Declined · Waitlist`

This is your operational dashboard. Update after every conversation.

---

## 5 · What I'll change on the site

Once you send the Tally contact form URL, I'll update everything in one push:

| Currently | Will become |
|---|---|
| "Book a 20-minute session" buttons | **"Get in touch"** → opens contact form |
| Dead `#contact` anchor at end of `<main>` | Real **Contact section** with the form embedded + your email shown as fallback |
| Hero secondary CTA | Stays as "See our programs" |
| `bootcamp-summer-2026.html` "Apply now" | **"Get in touch to apply"** → opens contact form |
| Newsletter Subscribe form | Either stays (if you create a 2nd Tally form for emails) or replaced with "Email us to be notified" mailto link |
| Stripe payment language anywhere | Removed — payment is by e-transfer, sent via email |

### Site copy I'll standardize

| Old phrase | New phrase |
|---|---|
| "Book a 20-minute session" | "Get in touch" or "Talk to us" |
| "Book an info session" | "Get in touch" |
| "info session" / "info call" | "conversation" |
| "Apply now" CTAs that imply form | "Get in touch to apply" |

---

## 6 · Setup checklist *(do these in order)*

- [ ] **Step 1** — Bank: register Interac e-Transfer Auto-Deposit *(5 min)*
- [ ] **Step 2** — Sign up for Tally and build the contact form *(10 min)*
- [ ] **Step 3** — Save 4 email templates as drafts in your email client *(15 min)*
- [ ] **Step 4** — Create the tracking Google Sheet *(2 min)*
- [ ] **Step 5** — Send me the Tally form URL → I wire the site *(then push to GitHub)*

---

## 7 · What's *not* in the stack *(and why)*

These were considered but skipped — kept here for the record:

- **Calendly** — skipped. You'll send manual calendar invites only when a call is actually useful. Keeps the conversation in email, where it's already happening.
- **Stripe** — skipped. E-transfer is free (no 2.9% + $0.30 fees), trusted by Canadian parents, and works with your existing bank. Add Stripe later only if you start enrolling international families.
- **Newsletter platform (MailerLite / Beehiiv)** — deferred. Add when you have content to send and have decided what kind of newsletter. Until then, capturing emails into Tally is enough.
- **CRM / pipeline tools (HubSpot, Pipedrive)** — overkill for current scale. Google Sheets handles tracking until you're enrolling 50+ students per cohort.

---

## 8 · When to revisit this stack

You'll outgrow this setup when:

- **Volume**: You're getting more than ~20 inquiries per cohort and the manual email back-and-forth is taking more than ~5 hours per week → time to add Calendly so people self-serve booking.
- **Geography**: You start enrolling international students → time for Stripe (e-transfer is Canada-only).
- **Marketing**: You want to send newsletters or cohort-launch announcements → time for MailerLite (free up to 1,000) or Beehiiv (free up to 2,500).
- **Team grows**: More than one person handling inquiries → time for a shared inbox tool (Front, Help Scout) and a real CRM.

Until then, this stack is intentionally minimal — and it's enough.
