# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
