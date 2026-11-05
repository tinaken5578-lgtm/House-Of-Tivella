# House of Tivella — website starter

A responsive Next.js storefront and beauty-services landing page for House of Tivella.

## Included
- Luxury purple, pink and lilac visual direction
- Responsive homepage, product showcase, services, brand story and contact calls-to-action
- WhatsApp enquiry links
- Sample product names and imagery that should be replaced with your real catalogue

## Before launch
1. Confirm the WhatsApp number in `app/page.tsx` (the `WHATSAPP` constant near the top).
2. Replace the sample product names, descriptions and images with your actual stock.
3. Add real prices, delivery details, business location, social links and policies.
4. Make sure you have permission to use every product/customer image you upload.

## Run locally
Install Node.js 20.9 or later, then in this folder run:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel
1. Create a GitHub account if you do not already have one.
2. On GitHub, create a new repository named `house-of-tivella`.
3. Upload the contents of this folder to the repository (upload the files inside this folder, not the ZIP file itself).
4. Sign in at https://vercel.com using GitHub.
5. Choose **Add New → Project**, import `house-of-tivella`, and leave the framework as **Next.js**.
6. Click **Deploy**. Vercel will build the site and provide a public `.vercel.app` address.
7. To connect a custom domain later, open the project in Vercel → **Settings → Domains**.

## Important
This starter is a polished marketing/catalogue site, not a full checkout system. Orders are currently enquiries through WhatsApp. Online payment, cart, inventory management and shipping calculations can be added in a later phase.
