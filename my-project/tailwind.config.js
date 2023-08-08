/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '4rem',
        lg: '5rem',
      },
      
    },
    

    extend: {},
  },
  plugins: [],
}