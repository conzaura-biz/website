# Conzaura — Business Registration & Consultation

A production-oriented React + Vite frontend for Conzaura, designed around the supplied visual references: dark green, warm gold, editorial serif headings, thin borders, generous whitespace, service cards, consultation blocks, and a green footer.

## Tech stack
- React
- Vite
- JavaScript / JSX
- React Router DOM
- CSS3 (Grid/Flexbox, responsive breakpoints, reduced motion)

No UI framework is used.

## Routes
- `/` — Home
- `/about` — About Conzaura
- `/contact` — Contact and contact form

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Architecture
`src/components` contains reusable UI. `src/data` contains navigation, service, FAQ, and testimonial data. `src/pages` contains route-level page composition. `src/utils` contains validation logic. `src/styles/global.css` contains the design system and responsive styles.

## Logo and favicon
Replace:
- `public/logo.svg`
- `public/favicon.svg`

with the final Conzaura assets. The header references `/logo.svg`, so no component changes are required.

## Images
The supplied visual references are stored locally in `public/images/smart-solutions.jpg` and `public/images/why-choose-person.jpg`, so the site does not depend on random external image URLs. Additional approved images can be added to `public/images/`.

## Forms / API
`ConsultationForm.jsx` and `Contact.jsx` perform frontend validation and currently simulate successful local submission. The consultation submit handler has a clearly marked location where a real `fetch()` / API call can be connected. No email is claimed to have been sent.

The consultation form includes a functional local checkbox fallback. To enable the real Google reCAPTCHA v2 widget, create `.env` from `.env.example` and set `VITE_RECAPTCHA_SITE_KEY` to your site key. The component loads the official Google widget and validates its response before submission.

## Brand colors

The reference design uses the secondary brand gold consistently. The separate highlight gold is intentionally not used in page UI.
- Primary: `#071F02`
- Secondary: `#C89004`
- Background green: `#0A2A04`

## Folder structure
```text
public/
  logo.svg
  favicon.svg
src/
  components/
  data/
  pages/
  styles/
  utils/
  App.jsx
  main.jsx
index.html
package.json
vite.config.js
README.md
```

## Deployment
Run `npm run build` and deploy the generated `dist/` directory to Vercel, Netlify, an Nginx static host, or another SPA-compatible host. Configure SPA fallback to `index.html` so direct visits to `/about` and `/contact` resolve correctly.


### Brand assets
The project uses `public/logo.png` and `public/favicon.png`, cropped from the Conzaura brand artwork supplied with the design reference. Replace these PNGs with the original high-resolution logo/favicon files when available.

## Runtime stability

The route scroll helper uses an explicit `useEffect` block so `window.scrollTo()` is never returned as an effect cleanup function. This prevents React's `destroy is not a function` error during navigation.


### Brand mark
The supplied Conzaura emblem is kept as `public/conzaura-mark-source.jpg` and used in its cleaned transparent form as `public/conzaura-mark.png` for section/page badges and as the favicon source.
