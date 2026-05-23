Larissa Starikova — UX Portfolio
📖 Overview
A professional portfolio showcasing 20+ years of UX leadership, design craft, and AI integration. Built with static HTML/CSS/JS, optimized for desktop viewing with responsive fallbacks, and compliant with WCAG 2.1 AA standards.
🏗️ Architecture
Static Multi-Page: No frameworks, build steps, or server-side rendering. Pure HTML, CSS, and vanilla JS.
Desktop-First Responsive: Base layouts, grids, and spacing target desktop viewports (≥1024px). Tablet and mobile adjustments use max-width media queries.
Shared Components: Header and footer are duplicated across pages for zero-dependency hosting. A single js/main.js handles shared interactions (mobile menu, keyboard traps, focus management).
CSS Architecture: Single css/style.css file using CSS custom properties, BEM-inspired naming, and flexible grid/flex layouts.
♿ Accessibility (WCAG 2.1 AA)
Semantic HTML5 structure (<nav>, <main>, <section>, <footer>, proper heading hierarchy h1 → h2 → h3)
Skip-to-content link for keyboard users
:focus-visible outlines for all interactive elements
ARIA labels, roles, and states for navigation, menus, and icons
Color contrast ratios ≥4.5:1 for body text, ≥3:1 for UI components
prefers-reduced-motion: reduce respected globally
Alt text for all meaningful images; decorative elements use aria-hidden="true"
Keyboard-trap/release logic for mobile menu
📱 Responsive Strategy
Desktop-First: Typography, grids, spacing, and navigation are optimized for 1200px+ viewports.
Breakpoints: Adjustments applied at ≤1100px, ≤900px, ≤700px, and ≤480px using max-width media queries.
Navigation: Desktop shows horizontal nav; ≤860px switches to hamburger + full-screen mobile menu.
Layouts: CSS Grid/Flexbox with clamp(), auto, and minmax() for fluid scaling without breakpoints where possible.
Images/Embeds: max-width: 100%, responsive aspect ratios, and lazy-loading ready.
📝 Changes Implemented
Replaced SPA routing with standalone multi-page HTML structure
Extracted mobile menu logic into js/main.js (page-agnostic, no per-page updates needed)
Updated Behance icon to behance-good.png (header & footer)
Adjusted footer icon spacing to match header (padding: 0 0.4rem)
Swapped opacity/color hierarchy in hero & footer links (links: white/opaque, text: slightly transparent)
Removed inline JavaScript; all shared scripts externalized
Applied consistent is-active navigation states via static class toggling
Integrated js/main.js with defer for non-blocking execution
🔜 Upcoming Pages & Tasks
design-ai.html — Design With AI showcase (cards, prototypes, tool tags)
selected-work.html — Main hub with horizontal sub-navigation
use-cases.html — Process & case studies hub
Individual case study pages (passwordless.html, ai-chat.html, data-lake.html, etc.)
Optional: Implement JS-based header/footer includes for easier maintenance
Performance audit & Lighthouse optimization (target 95+ across metrics)
Cross-browser testing (Chrome, Safari, Firefox, Edge)
🛠️ Maintenance Notes
Header/Footer Updates: Currently duplicated across pages. To update globally, either:
Edit each HTML file manually, or
Implement the JS include pattern (fetch('components/header.html')) when ready
CSS: All styles live in css/style.css. Page-specific overrides use inline <style> blocks or targeted class selectors.
JS: js/main.js is the only script needed for shared functionality. Add it to new pages via <script src="js/main.js" defer></script>.
Active States: On each new page, move the .is-active class to the corresponding navigation link in both desktop and mobile menus.