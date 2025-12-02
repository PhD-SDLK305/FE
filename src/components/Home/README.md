This folder contains the Home page-hero related components used by the application. The code here focuses on:

- readability and clean structure (small components with single responsibility)
- soft, subtle visuals (backdrop blur, gentle easing, rounded corners)

Files and responsibilities:
- `Hero.jsx` — the container that drives the hero carousel (autoplay, pause-on-hover, controls, dots).
- `HeroSlide.jsx` — lightweight presentational component that renders a single slide's background and overlay.
- `heroData.js` — demo dataset with 4 items; replace with remote data when ready.
- `ThumbnailCard.jsx` — small shared thumbnail card used in the hero scroller and recommended list.
- `RecommendedCarousel.jsx` — horizontally scrollable list of recommendations; uses `ThumbnailCard`.

Styling / animations:
- Animations and some tiny helpers live in `src/index.css`. The visual system is intentionally soft — feel free to tune timing in `index.css`.

Accessibility notes:
- `Hero` exposes aria-roledescription and pausing on hover; slides have polite aria-live updates for users of assistive tech.
- `ThumbnailCard` is keyboard-focusable and uses sensible focus states.

Next steps:
- Plug `heroData.js` into your backend API and lazy-load images for better performance.
- Replace placeholder artwork with final assets and tune typography for pixel-perfect matching.
