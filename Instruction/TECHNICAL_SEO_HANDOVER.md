# Technical SEO Implementation & Handover Plan (20 Checks)

## Objective
Complete the comprehensive Senior Web Developer and Technical SEO audit & implementation for **One Smart Biz** (`onesmartbiz.pro`), ensuring maximum search-engine indexability, Core Web Vitals optimization, and AI-model discoverability (Google Gemini, ChatGPT, Perplexity, Claude).

---

## 1. Status Overview Across All 20 Technical SEO Checks

| # | Check Item | Status | Key Action / File |
|---|---|---|---|
| **1** | Build `sitemap.xml` | **COMPLETED & VERIFIED** | Dynamic sitemap configured in `app/sitemap.ts` covering homepage, `/calculator`, `/services`, all 7 service pages, `/blog`, all 15 blog guides, `/faq`, `/terms`, and `/privacy-policy`. |
| **2** | Add `robots.txt` | **READY FOR EXPANSION** | `public/robots.txt` exists blocking `/api/`, `/_next/`, `/admin`. Needs updating with modern AI bot definitions (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `CCBot`, `Applebot`). |
| **3** | Remove `noindex` tags | **COMPLETED** | Verified zero unintended `noindex` tags on public pages. Created `app/admin/layout.tsx` with explicit `robots: { index: false, follow: false }` to quarantine admin portal. |
| **4** | Add canonical tags | **COMPLETED & VERIFIED** | `metadataBase: new URL("https://www.onesmartbiz.pro")` added to `app/layout.tsx`. Self-referencing canonicals implemented on `/calculator`, `/services`, all service pages, `/blog`, `/blog/[slug]`, `/terms`, `/privacy-policy`, and `/faq`. |
| **5** | Add meta titles | **COMPLETED** | Keyword-optimized, unique titles across all pages with `<template: "%s \| One Smart Biz">`. |
| **6** | Meta descriptions | **COMPLETED** | 140–160 character conversion-oriented meta descriptions added to all pages. |
| **7** | One H1 per page | **COMPLETED** | Fixed `/calculator` (promoted to `<h1>`), fixed `/admin` (quarantined duplicate `<h1>`), verified single `<h1>` on homepage, all service pages, all blog posts. |
| **8** | Fix heading order | **COMPLETED** | Fixed `components/Hero.tsx` heading sequence from jumping H1 -> H3 by replacing sub-feature heading with `<h2>`. |
| **9** | Add alt text | **MOSTLY COMPLETED** | Enhanced alt tags on `ServiceDetailPage.tsx`, `feature-carousel.tsx`, `hero-3.tsx`, `services/page.tsx`. Finish checking `Nav.tsx` and `Footer.tsx` logo tags. |
| **10** | Add schema markup | **COMPLETED & VERIFIED** | Added `WebSite` JSON-LD & `ProfessionalService` to `app/layout.tsx`. Added `BlogPosting` schema to `app/blog/[slug]/page.tsx`. Added `Service` schema to `components/ServiceDetailPage.tsx`. |
| **11** | Add internal links | **COMPLETED** | Added "Related Services in Qatar" and Calculator links to `app/blog/[slug]/page.tsx` and `components/ServiceDetailPage.tsx`. |
| **12** | Fix broken links | **IN PROGRESS** | Fixed non-www links in `terms` and `privacy-policy`. Need to convert `<a>` to `<Link>` in `components/Footer.tsx` and remove empty `href="#"` for LinkedIn/Twitter. |
| **13** | Compress images | **COMPLETED** | Converted `multimedia-vfx-osb.jpeg` (2.04 MB) to `multimedia-vfx-osb.webp` (172 KB, 91.5% size drop). Configured `next.config.ts` for AVIF/WebP image optimization. |
| **14** | Core Web Vitals | **IN PROGRESS** | Fonts set to `display: 'swap'` in `app/layout.tsx`. Set explicit width/height on logo images in `Nav.tsx` and `Footer.tsx` to eliminate CLS. |
| **15** | Fix mobile layout | **IN PROGRESS** | Add `html, body { overflow-x: hidden; max-width: 100vw; }` in `app/globals.css`. |
| **16** | Enforce HTTPS | **COMPLETED** | HSTS (`Strict-Transport-Security`), `X-Content-Type-Options`, `X-Frame-Options`, and `Referrer-Policy` security headers enforced in `next.config.ts`. |
| **17** | Clean up URL slugs | **COMPLETED** | All routes validated as clean, lowercase, hyphen-separated. |
| **18** | Add an `og:image` | **COMPLETED** | Added 1200x630 OpenGraph and Twitter cards across all routes (`app/layout.tsx`, `calculator`, `blog`, `blog/[slug]`, `terms`, `privacy-policy`, and service pages). |
| **19** | Verify Search Console | **COMPLETED** | Added `metadata.verification.google` in `app/layout.tsx` connected to `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`. Create `public/google-site-verification.html` placeholder. |
| **20** | Add `llms.txt` | **READY FOR EXPANSION** | `public/llms.txt` exists. Needs complete documentation of all 15 blog guides and service schemas for AI crawlers. |

---

## 2. Immediate Next Steps for the Next Agent

### Task 1: Complete `components/Footer.tsx` Cleanup (Check 12 & 14)
**File**: `components/Footer.tsx`
- Import `Link` from `"next/link"`.
- Add explicit `width={40}` and `height={40}` on the logo `<img>` tag at line 75 to eliminate CLS.
- Convert internal links from `<a>` to `<Link>` (navigation items, service links, privacy policy, terms, faq).
- Update social links: replace `href="#"` on LinkedIn and Twitter with active links (or link to WhatsApp / Facebook).

### Task 2: Ensure Mobile Viewport Containment in `app/globals.css` (Check 15)
**File**: `app/globals.css`
- Ensure `html` and `body` rules explicitly include:
  ```css
  html, body {
    overflow-x: hidden;
    max-width: 100vw;
  }
  ```

### Task 3: Expand `public/robots.txt` for AI Crawlers (Check 2)
**File**: `public/robots.txt`
- Replace or enhance with:
  ```txt
  User-agent: *
  Allow: /
  Disallow: /api/
  Disallow: /_next/
  Disallow: /admin

  # AI Engine Crawlers
  User-agent: GPTBot
  Allow: /
  Allow: /llms.txt

  User-agent: ClaudeBot
  Allow: /
  Allow: /llms.txt

  User-agent: PerplexityBot
  Allow: /
  Allow: /llms.txt

  User-agent: Applebot-Extended
  Allow: /

  User-agent: Google-Extended
  Allow: /

  # Sitemap & AI Context
  Sitemap: https://www.onesmartbiz.pro/sitemap.xml
  Allow: /.well-known/agents.json
  Allow: /llms.txt
  ```

### Task 4: Expand `public/llms.txt` (Check 20)
**File**: `public/llms.txt`
- Ensure all 15 blog guides are listed in the markdown documentation so AI systems (like Perplexity and ChatGPT search) can reference and cite them directly.

### Task 5: Add Google Search Console Verification File Placeholder (Check 19)
**File**: `public/google-site-verification.html`
- Create placeholder file for users who prefer HTML file upload over DNS TXT verification.

### Task 6: Run Final Verification Build
- Execute `npm run build` to confirm all pages, TypeScript types, metadata, and static page exports compile cleanly with zero errors.

---

## 3. External / Manual Configuration Required (User / DNS)

1. **Google Search Console**:
   - Provide the site verification token from Google Search Console and add it to `.env` as:
     ```env
     NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="your-verification-code-here"
     ```
   - Alternatively, add the DNS TXT verification record at your domain registrar for `onesmartbiz.pro`.
2. **Domain Canonicalization (DNS / Hosting)**:
   - Ensure an automatic 301 redirect is configured from non-www (`https://onesmartbiz.pro`) to `https://www.onesmartbiz.pro` at the Cloudflare / Vercel / server level.
