# UI component map

The interface is organized by responsibility so visual work is easy to locate.

- `GameVisuals.tsx` — icons, food illustrations, penguin states, and the food pyramid.
- `Layout.tsx` — responsive navigation, shared primary button, and footer.
- `../pages/Home.tsx` — landing page and game introduction.
- `../pages/Game.tsx` — game states, food selection, feedback, scoring, and misinformation detector.
- `../pages/Guide.tsx` — instructions page.
- `../game/data.ts` — editable foods, prices, health explanations, penguins, budgets, and claims.
- `../game/types.ts` — shared UI and game data contracts.

Keep reusable visual primitives in `components`, full-screen views in `pages`, and content/rules in `game`.
