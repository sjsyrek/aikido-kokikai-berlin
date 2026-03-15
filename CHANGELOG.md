# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **"Your First Class" page** (`/first-class`): step-by-step guide to the first class, FAQ, schedule and map link, sign-up CTA — primary conversion page for new visitors
- **Gallery lightbox**: click any gallery photo to open a full-screen modal with keyboard navigation (← → Escape) and touch-friendly controls
- **Shared components**: `HeroBanner`, `BulletItem`, `TrialClassCta`, `ExternalLink`, `PageContainer` — reduce duplication across pages
- **`lib/constants.ts`**: single source of truth for URLs, schedule, dojo address, and contact email
- **Security headers** via `next.config.ts`: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`
- **"First Class" nav link** added to header (desktop and mobile)
- Class durations (90 min) shown alongside times on home page
- `/first-class` added to sitemap with priority 0.9

### Changed

- **Home page hero**: replaced generic text with value proposition ("Learn Aikido in English"), subtext with location/time, and dual CTAs ("Try Your First Free Class" / "What to Expect")
- **Home page**: added testimonials section with 3 student quotes
- **Meta description**: leads with "Berlin's only English-language Aikido dojo" USP
- **OpenGraph locale**: `en_US` → `en_GB` (European audience)
- **`metadataBase`**: added to root metadata (`https://kokikai.de`) for correct absolute URL resolution
- **Image `sizes` props**: added to all `<Image>` components for correct responsive hint
- **AVIF support**: enabled in Next.js image config (`formats: ['image/avif', 'image/webp']`)
- **Footer logo**: now links to home page instead of Meetup
- **Facebook link**: updated from `http://bit.ly/aikido-berlin-facebook` to direct HTTPS Facebook URL
- **AsiaSport link**: updated from `http://` to `https://`
- **NYC Aikido link**: updated from `http://` to `https://`
- **Mobile hamburger button**: increased tap target from ~32px to 44×44px (WCAG AA)
- **Mobile menu**: added slide-down animation (200ms), body scroll lock, and focus management
- **Bullet point size**: increased from 1.5px to 2.5px diameter

## [1.0.0] - 2026-03-14

### Added

- Next.js 15 with App Router, TypeScript, and Tailwind CSS
- Impressum page (German TMG §5 compliant legal notice)
- Vercel Analytics (replaces dead Google UA tracking code)
- SEO: sitemap.xml, robots.txt, per-page metadata and Open Graph tags
- Skip-to-content link for keyboard accessibility
- Responsive gallery grid (2/3/4 columns by breakpoint)
- Prominent trial class sign-up links to syndicate-berlin.de
- Mobile menu with proper ARIA attributes
- 404 page with link back to home

### Changed

- **Framework**: Migrated from Create React App 2.1.8 to Next.js 15
- **Styling**: Replaced CSS Modules + Typography.js with Tailwind CSS
- **React**: Upgraded from React 16.8 to React 19
- **Instructor rank**: Updated from 3. dan to 5. dan
- **Dojo location name**: Replaced "Randori Pro Mitte" with "Syndicate Martial Arts Berlin"
- **Wednesday class time**: Updated from 19:45 to 20:00
- **Typography**: Replaced oversized 32px base with proper 16px/18px type scale
- **Layout**: Full-width hero sections, card-based content, warm neutral palette
- **Images**: Optimized with next/image (lazy loading, responsive sizing)
- **Header**: Semantic HTML with sticky positioning and backdrop blur
- **Footer**: Added Impressum link (legally required on every page)

### Removed

- Create React App and all CRA-specific configuration
- `@reach/router` (replaced by Next.js file-system routing)
- `typography` and `typography-theme-grand-view` packages
- `react-helmet` (replaced by Next.js metadata API)
- `loadable-components` and `react-spinkit`
- `now.json` (deprecated Vercel config, unnecessary with Next.js)
- Service worker registration
- Google Analytics UA tracking code (dead/deprecated)
