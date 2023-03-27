/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#96fc49",
          "secondary": "#7f53cc",
          "accent": "#aae888",
          "neutral": "#282839",
          "base-100": "#e5e7eb",
          "info": "#8BBAE9",
          "success": "#2DD793",
          "warning": "#975F0C",
          "error": "#F47E6C",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}
