# Vital Industries — Production Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn/ui-style components.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Before shipping:

```bash
npm run lint
npm run build
```

## What's included

- Full site: Home, About, Services, Who We Serve, Resources, Contact
- Design tokens in `app/globals.css` (deep forest green / gold / warm ivory palette)
- DM Serif Display + Geist typography
- Framer Motion animation primitives in `components/animations/`
- Editorial, card-free layout system per the brand spec
- Client-side validated contact form (`components/contact/contact-form.tsx`) —
  submission is a `TODO`, ready for a backend/API route or CRM integration
- Placeholder resource content in `lib/resources.ts`
- No fabricated business details — phone, email, and address are left as
  clearly marked placeholders (`[PHONE NUMBER]`, `[EMAIL ADDRESS]`, `[OFFICE ADDRESS]`)
  in `components/site/footer.tsx` and `components/contact/contact-details.tsx`

## Still to do

- Swap the Unsplash hero image for licensed/owned photography
- Fill in real contact details, resource articles, and any credentials
- Wire the contact form to a real submission endpoint
- Add real `public/images` / `public/logos` assets (referenced folders are currently empty)
