/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#EAD8B1',       
        primary: '#27496D',       
        secondary: '#EAD8B1',    
        tertiary: '#F59E0B',     
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Adding Poppins as the primary font
      },
    },
  },
  plugins: [],
}
