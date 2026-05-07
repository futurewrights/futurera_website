# Futurera Site — Operations Setup

The site is static HTML. To accept applications, bookings, and payments, you'll wire it to three external services. **Total setup time: ~45 minutes.**

---

## 1 · Calendly (info session bookings)

**Used for**: the "Book a 20-minute session" CTA on the homepage.

### Setup

1. Sign up at [calendly.com](https://calendly.com) — free plan is enough for one event type
2. Create an event called **"Futurera info session"** (20 min, 1:1)
3. Set your availability windows
4. Copy the booking URL (looks like `https://calendly.com/your-handle/info-call`)

### Where to swap in the code

`index.html`, around the bottom CTA section. Search for the comment:

```html
<!-- TODO: Replace href with your Calendly URL once set up. See SETUP.md -->
<a class="btn btn-primary" href="https://calendly.com/futurera/info-call">Book a 20-minute session →</a>
```

Replace `https://calendly.com/futurera/info-call` with your real Calendly URL.

### What Calendly handles automatically

- Confirmation email to the booker (with calendar invite)
- Reminder email 24 hrs before
- Reschedule + cancel links
- Calendar sync to Google / Outlook
- Time zone handling

---

## 2 · Tally (Build with AI Bootcamp application form)

**Used for**: the "Apply now" CTA on the Summer 2026 Bootcamp page.

### Setup

1. Sign up at [tally.so](https://tally.so) — free plan: 100 submissions/month
2. Create a new form titled **"Build with AI · Summer 2026 Bootcamp Application"**
3. Add the questions below
4. In **Form settings → Email notifications**:
   - Enable notifications to your inbox (so you see new applications)
   - Enable autoresponder to the applicant — see the suggested copy below
5. Copy the share URL (looks like `https://tally.so/r/abc123`)

### Suggested form questions

| # | Field | Type | Required |
|---|---|---|---|
| 1 | Student's first name | Short text | ✓ |
| 2 | Student's last name | Short text | ✓ |
| 3 | Student's email | Email | ✓ |
| 4 | Student's grade | Dropdown (Grade 9 / 10 / 11 / 12) | ✓ |
| 5 | Student's age (at start of program) | Number (14–18) | ✓ |
| 6 | Parent / guardian name | Short text | ✓ |
| 7 | Parent / guardian email | Email | ✓ |
| 8 | Parent / guardian phone | Short text | optional |
| 9 | Why does the student want to take Build with AI? | Long text (200–500 char) | ✓ |
| 10 | Has the student used AI tools before (e.g., ChatGPT, Claude)? | Multiple choice (Never / Sometimes / Daily) | ✓ |
| 11 | What would they hope to build during the program? | Long text | optional |
| 12 | Anything else we should know? | Long text | optional |
| 13 | Consent to be contacted about this application | Checkbox (single, required) | ✓ |
| 14 | (Optional) Consent to receive Futurera updates and future cohort announcements | Checkbox | optional |

> Note on #14: Marketing-style emails to Canadians require explicit consent under CASL. The transactional emails (application receipt, payment receipt, program updates to enrolled families) are exempt — but a newsletter or "future cohort" blast needs this opt-in.

### Suggested autoresponder email (Tally → applicant)

```
Subject: We received your Build with AI application

Hi {first_name_of_parent},

Thanks for applying to Build with AI · Summer 2026.

Here's what happens next:

1. We'll review the application within 5 business days.
2. We'll email you to schedule a 15-minute conversation with our program lead. This is part of how we decide fit — for both directions.
3. If both sides are aligned, we'll send a payment link to confirm the seat.

If you have any questions in the meantime, reply to this email.

— The Futurera team
```

### Where to swap in the code

`bootcamp-summer-2026.html`, around the apply CTA section. Search for the comment:

```html
<!-- TODO: Replace href with your Tally form URL once set up. See SETUP.md -->
<a class="btn btn-primary" href="https://tally.so/r/REPLACE-WITH-TALLY-FORM-ID">Apply now →</a>
```

Replace `https://tally.so/r/REPLACE-WITH-TALLY-FORM-ID` with your real Tally URL.

---

## 3 · Stripe (payment, sent manually after acceptance)

**Used for**: tuition payment. Sent by email to families after you've accepted them — *not* as a public link on the website.

### Setup

1. Sign up at [stripe.com](https://stripe.com) — Canadian business setup
2. Verify your business (business name, banking, tax info) — usually 1–3 business days
3. In Stripe Dashboard, go to **Products → Add product**:
   - Name: `Build with AI · Summer 2026 Bootcamp · Tuition`
   - Description: `2-week intensive bootcamp · July 13–24, 2026 · Toronto`
   - Price: `$X,XXX CAD` (one-time)
4. From the product page, click **Create payment link**
5. Configure:
   - ✓ Collect billing address
   - ✓ Allow promotional codes (optional, useful for sibling discounts)
   - ✓ Send Stripe receipt automatically (default)
6. Copy the payment link (looks like `https://buy.stripe.com/abc123`)

### How to use it

When a family is accepted after the info call:

1. Email them: *"We'd love to have you in the Summer 2026 cohort. Here's the secure payment link: \[link\]. Once payment clears, we'll send the welcome packet."*
2. Stripe automatically sends them a payment receipt.
3. You see the payment in Stripe Dashboard → Payments.
4. Send a manual welcome email confirming the seat.

### Stripe fees

- **2.9% + $0.30 CAD** per successful card payment
- Example: on $1,200 tuition, Stripe takes ~$35; you net ~$1,165
- No monthly fee, no setup fee

### Refund handling

Per the FAQ on the bootcamp page: full refund > 2 weeks before; 50% > 1 week before; none after (except documented medical). Stripe handles refunds via Dashboard in 1 click — they reverse via the original card automatically.

---

## 4 · Email — what each tool handles automatically

You don't need Mailchimp or ConvertKit yet. The three tools above cover all transactional email:

| Email | Sent by | When |
|---|---|---|
| Application received | Tally autoresponder | Immediately when form is submitted |
| Application reviewed | You (manual) | Within 5 business days |
| Info session confirmed | Calendly | When the family books |
| Info session reminder | Calendly | 24 hours before |
| Payment receipt | Stripe | When payment clears |
| Welcome / what's next | You (manual) | After payment |
| Cohort updates | You (manual or via MailerLite later) | As needed |

### When you'd want a real email tool (not yet)

- You want a "Notify me when fall cohort opens" waitlist that auto-emails when the next cohort is open
- You publish a newsletter
- You want welcome sequences (Day 1, Day 3, etc. emails after enrollment)

When that day comes, **MailerLite** (free up to 1,000 contacts) or **Beehiiv** (free up to 2,500) is the right tool. Both have built-in CASL-compliant double opt-in.

---

## 5 · End-to-end flow, summarized

```
┌────────────────────────────────────────────────────────────────┐
│  Parent or student finds the site                              │
│        ↓                                                        │
│  Reads homepage / Build with AI / Bootcamp pages               │
│        ↓                                                        │
│  Clicks "Apply now" on the bootcamp page                       │
│        ↓                                                        │
│  Tally form opens (in new tab)                                 │
│        ↓                                                        │
│  Submits → Tally auto-emails them: "We received your app"      │
│        ↓                                                        │
│  You see the application in Tally + your inbox                 │
│        ↓                                                        │
│  You email them: "Let's chat. Book here: [Calendly]"           │
│        ↓                                                        │
│  Family books a slot → Calendly auto-emails confirmation       │
│        ↓                                                        │
│  Info session happens                                          │
│        ↓                                                        │
│  You email them: "Welcome — here's the payment link [Stripe]"  │
│        ↓                                                        │
│  Family pays → Stripe auto-emails receipt                      │
│        ↓                                                        │
│  You email them: "Confirmed — see you July 13"                 │
└────────────────────────────────────────────────────────────────┘
```

---

## 6 · Quick reference — placeholders to swap

After you set up Tally and Calendly, search the code for these strings and replace:

| Placeholder | Replace with |
|---|---|
| `https://calendly.com/futurera/info-call` | Your real Calendly URL |
| `https://tally.so/r/REPLACE-WITH-TALLY-FORM-ID` | Your real Tally form URL |

The Stripe payment link is sent manually by email — no code change needed.

---

## 7 · Things to watch for

- **Tally form testing**: submit a test application from a personal email before launching, to verify autoresponder works
- **Calendly availability**: set realistic availability windows; nothing kills momentum like a busy calendar
- **Stripe verification**: takes 1–3 business days for first-time accounts; start this early
- **CASL consent**: keep the marketing checkbox optional (#14 above), keep the transactional checkbox required (#13)
- **Cohort capacity**: when applications fill the cohort, manually disable the Tally form (or add a "Cohort full — join the waitlist for Fall 2026" overlay)
