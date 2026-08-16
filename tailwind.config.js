/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#14171c",
        panel: "#1b1f27",
        raised: "#232935",
        line: "#2e3542",
        ink: "#eceef2",
        dim: "#8b93a6",
        amber: "#f2a93b",
        teal: "#45d6c4",
        violet: "#8b9ef5",
        red: "#e8604c",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
