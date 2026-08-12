/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        freya: {
          bg: '#FAF6F0',
          bgAlt: '#F4EFE6',
          terracotta: '#C86D51',
          terracottaDark: '#A8543B',
          terracottaLight: '#F4E4DF',
          toast: '#D98E3A',
          caramel: '#E8A858',
          sage: '#607765',
          sageLight: '#EBF0EC',
          espresso: '#2C201C',
          dark: '#211A17',
        }
      }
    },
  },
  plugins: [],
}
