/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      desaturatedBlue: 'hsl(222, 26%, 31%)',
      darkBlue: ' hsl(223, 31%, 20%)',
      darkDesaturatedBlue: 'hsl(224, 36%, 15%)',
      white: '#fff',
      Desaturateddarkblue: 'hsl(225, 21%, 49%)',
      Desaturateddarkblue2: 'hsl(224, 28%, 35%)',

      Red: ' hsl(6, 63%, 50%)',
      Darkred: 'hsl(6, 70%, 34%)',
      Lightgrayishorange: 'hsl(30, 25%, 89%)',
      Grayishorange: 'hsl(28, 16%, 65%)',
      
      Lightgray:'hsl(0, 0%, 90%)',
      Grayishred:'hsl(0, 5%, 81%)',
      Verylightgray:'hsl(0, 0%, 93%)',

      Darkmoderatecyan:'hsl(185, 42%, 37%)',
      Verydarkcyan:'hsl(185, 58%, 25%)',

      Orange:'hsl(25, 98%, 40%)',
      Darkorange:'hsl(25, 99%, 27%)',

      Lightgrayishyellow:'hsl(45, 7%, 89%)',
      Darkgrayishorange:'hsl(35, 11%, 61%)',

      Verydarkgrayishyellow:'hsl(60, 10%, 19%)',
      White:'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
