# Hirani Law Firm — Next.js

A responsive Next.js App Router / React / TypeScript website using the approved Framer-inspired layout and supplied Hirani Law Firm content. Original exports in inspo/ are preserved.

## Run

- npm install
- npm run dev — http://localhost:3000
- npm run typecheck
- npm run build
- npm start

## Pages

Home, About, Our Team, Practice Areas, Blog, Contact, 19 shared practice-detail routes, and five local team profiles at /attorneys/[slug]. The detail pages cover the Family Law and Personal Injury groups plus 12 family services and five injury services. Unknown services return 404.

## Editable content

- src/content/firm.ts — firm details, contact information, office address, memberships, statistics, mission, values, and consultation topics.
- src/content/practice-areas.json — service directory, groups, local URLs, and homepage featured cards.
- src/content/practice-details.json — per-service overview, capabilities, and approach.
- src/content/google-reviews.json — supplied review collection, original Google links, ratings, and full text. The UI shows ratings of at least four stars, three cards per page, with previous/next and expandable text. The profile rating is a saved snapshot, not a live Google feed.
- src/content/blog-posts.ts — three supplied article previews and links to the complete articles on hiranilawfirm.com.
- src/content/process.ts — consultation process cards.
- src/content/case-studies.ts — the former sample-case stack now presents the supplied Personal Injury benefits; it contains no sample verdicts or invented case outcomes.
- src/content/faqs.json — 31 FAQ questions and drafted answers, organized into seven topics under Family Law and Personal Injury. src/content/faqs.ts exports the categories. See docs/faq-content-notes.md for content sources.

The shared sections are in src/components/shared/. The five supplied team portraits are stored locally and listed in src/content/team.json. Team cards appear on Home and Our Team and link to local profile pages. The profile layout follows inspo/inner-attorney.html, with a sticky portrait, biography, contact strip, role-specific sections, shared consultation form, and previous/next navigation. Profile copy is in src/content/team-profiles.json; original bio source URLs are preserved in team.json. Only Sehar’s profile shows education, bar admission, and professional memberships. Sehar’s actual portrait replaces the founder/profile placeholders throughout. The five additional supplied office photographs replace the old people imagery across the homepage hero, galleries, service pages, process cards, blog previews, and footer. Optimized WebP files are stored locally; src/content/media.ts lists the shared photographs. The last supplied photo is the homepage hero. The provided Hirani logo is stored at public/assets/hirani-logo.png. The old founder signature is replaced with the firm mark.

The supplied address, 22336 Grand Corner Drive, Suite 130, Katy, TX 77494, is used consistently in the contact section, directions, and map. Calendar downloads and full blog articles link to the original Hirani website. Article body copy is not reproduced locally. FAQ answers are new general-information drafts, not quotations from Hirani's existing site.

## Interactions

The homepage keeps the scroll-driven horizontal practice-card stack, sticky benefits stack, expanding process cards, native FAQ accordion, and photo zoom above the footer. The shared Home/About photo gallery starts expanded and shrinks into its center card as the user scrolls. The homepage hero keeps its full-width background layout. Benefits use separate image and copy panels; team and blog cards use filled frames with subject-aware positioning. Process photos use matching landscape proportions. The centered CTA above the footer keeps the reference’s expanding background animation. Original people footage is no longer rendered. Reduced-motion preferences and small screens have adaptive layouts.

Consultation and newsletter forms validate input and open an email draft to info@hiranilawfirm.com. They do not deliver or save inquiries without the user sending that email. A delivery backend is needed before launching a directly submitted form.

## Development notes

SEO and sharing metadata live in src/lib/metadata.ts. Each page has its own description, canonical URL, Open Graph title/description, and Twitter card; all use public/images/hirani-social-preview.jpg (1200×630 JPEG). NEXT_PUBLIC_SITE_URL defaults to https://www.hiranilawfirm.com; set it to the public deployment origin before building a staging preview. See .env.example. Regenerate the branded image with `node scripts/generate-social-preview.mjs`. Social crawlers need the deployed page and image to be publicly accessible; local changes do not change the currently live website's link previews.

Site-wide motion is managed by src/components/ui/site-motion.tsx. Headings and marked cards reveal on entry; data-scroll-image marks photo frames or portraits for reversible vertical parallax without scaling or changing image crops. The numeric attribute sets maximum travel in pixels, reduced to 40% on small screens. Only nearby images update, using one eased animation-frame loop that stops when settled. Route changes remove observers/listeners and bind the new page; reduced-motion preferences disable these effects. Existing pinned galleries, the horizontal practice stack, and footer zoom retain their own timelines.

Generated Next.js output is in .next/. After changing the route structure, restart the dev server if its route map is stale. If hot reload enters a loop, stop the project dev process and regenerate its .next/dev cache; do not remove source files or run multiple dev servers against the same cache.

The scripts/ conversion tools are historical migration utilities. Regenerating the original exports overwrites content changes; edit the components and content files directly for normal maintenance.
