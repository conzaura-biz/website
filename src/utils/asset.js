/**
 * Resolves a public asset path using Vite's base URL.
 * Use this for all static assets in /public (images, avatars, etc.)
 * so they work correctly on GitHub Pages sub-paths.
 *
 * Example: asset('/images/hero.jpg') → '/website/images/hero.jpg'
 */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export default function asset(path) {
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}
