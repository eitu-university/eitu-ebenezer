/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Cosmica substitute (DESIGN.md): single geometric sans for the whole system.
        'sans': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        'display': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Token names are generic surface/text/accent slots kept stable across
        // design-system swaps (see DESIGN.md) — current values map to "Awesomic".
        parchment: '#f4f4f5', // Paper — canvas background
        paper: '#ffffff', // Snow — elevated card surfaces
        taupe: '#ececee', // Cloud — 1px hairline border color
        ink: '#09090b', // Obsidian — dominant text, headlines
        charcoal: '#18181b', // Graphite — body text
        graphite: '#71717a', // Fog — muted/helper text
        ash: '#a1a1aa', // Ash — placeholder text, input borders
        terracotta: {
          DEFAULT: '#ff5a00', // Ember — the single accent color
          light: '#ff7a33',
        },
      },
      borderRadius: {
        card: '36px',
        nav: '12px',
        button: '14px',
        input: '14px',
      },
      boxShadow: {
        // Elevation comes from hairline borders, not shadows, per DESIGN.md.
        glow: 'none',
        float: '0px 4px 12px 0px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
