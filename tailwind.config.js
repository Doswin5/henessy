/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '767px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primaryColor: 'rgb(204, 153, 51)',
        primaryHoverColor: 'rgba(204, 153, 51, 0.7)',
        textColor: 'rgb(242, 242, 242)',
        bgColor: 'rgb(18, 18, 18)'
      }
    },
  },
  plugins: [],
}
