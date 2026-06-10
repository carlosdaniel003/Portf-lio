/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mach: {
          dark: '#050505',    // Fundo principal (quase preto)
          panel: '#111111',   // Fundo dos cards
          red: '#ff0000',     // Vermelho Speed Racer
          redGlow: '#dc2626', // Vermelho para sombras
          text: '#e5e5e5',    // Texto claro
          muted: '#737373'    // Texto secundário
        }
      }
    },
  },
  plugins: [],
};