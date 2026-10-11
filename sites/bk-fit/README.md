# BK FIT — Concept site

A modern landing page for a fictional **BK FIT** line (high-protein burgers grilled over fire), built for the fitness audience with **React + Vite + Tailwind v4 + shadcn/ui**.

> This is a **concept, unofficial project** for design study. Products, prices and nutrition values are illustrative.

## Sections

- **Hero** with a vector burger illustration and floating macro cards
- **"Why BK FIT"**: grilled over fire, up to 51g of protein, whole-wheat bun, transparent macros
- **FIT menu** (`Tabs`): burgers, bowls and combos with protein/carb/fat bars (`Progress`) and "add to order" (`sonner` toast)
- **Protein calculator**: goal (`ToggleGroup`) + weight (`Slider`) → daily target and a recommended item
- **30-Day Challenge**: gym check-ins turn into discounts
- Testimonials (`Avatar`), FAQ (`Accordion`), newsletter (`Field` + `Input`)
- Light/dark theme (dark by default; press `d` or use the header button)

## Running it

```bash
npm install
npm run dev
```

## Design notes

- The palette lives in `src/index.css` as semantic tokens (`--primary` flame red, `--accent` ember orange, brown/cream backgrounds) plus a custom `--fit` token (green for protein).
- Typography: **Anton** (display, uppercase) + **Inter**.
- The components in `src/components/ui` come from this repository's `new-york-v4` registry.
