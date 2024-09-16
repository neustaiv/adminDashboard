/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      colors: {
        warmGray: '#f5f3f4', // Fond doux
        terracotta: '#e07a5f', // Accent chaleureux
        peach: '#f4a261', // Second accent
        sand: '#e9c46a', // Couleur supplémentaire
        darkBrown: '#264653', // Texte
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

