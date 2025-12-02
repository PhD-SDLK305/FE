Project organization — front-end (src) overview

Goal: keep the structure simple, predictable, and scalable.

Top-level layout
- src/
  - assets/        # static images and icons
  - apis/          # API helpers and endpoints
  - components/    # reusable UI + domain components (barrels provided)
    - Header/
    - Footer/
    - Home/
    - Loading/
    - Illustrations/
    - ui/           # small atomic UI components (button, input, card...)
  - hooks/         # custom react hooks
  - pages/         # page route components (barrel export at src/pages/index.js)
  - utils/         # utilities and small helpers
  - index.css      # global styles
  - main.jsx

Why this layout?
- Keeps presentation components under components/ and route-driven page containers under pages/.
- Barrel files make imports concise and easier to maintain.
- Keep related components together for feature-focused development.
