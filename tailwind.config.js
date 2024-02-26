/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        customBeige: '#E9D8DA',
        customDark: '#5D576B'
      },
    },
  },
  plugins: [
    import('flowbite/plugin')
  ],
}

