/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sono': ['var(--font-sono)', 'sans-serif'],
        'noto-serif': ['var(--font-noto-serif-display)', 'serif'],
      },
    },
  },
  plugins: [],
};
