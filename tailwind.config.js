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
        customDark: '#6f6a7a',
        customHover: '#F2DFDF',
        customHoverDark: '#6f6a7a9c'
      }, 
      fontFamily: {
        DM: ['dm-serif display-regular']
      }
      
    },
    
  },
  
  plugins: [
    import('flowbite/plugin')
  ],
}

