/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      primary: 'hsl(var(--color-primary))',
      secondry: 'hsl(var(--color-secondry))',
      bg_primary: 'hsl(var(--bg-primary))',
      fontLight: 'hsl(var(--font-color-light))',
      fontDark: 'hsl(var(--font-color-dark))',
      hoverColor: 'hsl(var(--hover-color))'
    },
    extend: {
      fontFamily:{
        'Montserrat':['Montserrat'],
        'Fraunces': ['Fraunces']
      }
    },
  },
  plugins: [],
}

