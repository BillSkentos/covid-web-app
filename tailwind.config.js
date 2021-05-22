module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        FQA:'#f0fbff',
        FQAItem: '#003476',
        lightBlue:'#2dbae8',
        orange:'#fd7e14',
      },
      fontFamily:{
        'sans':['Roboto' , 'Sans-serif']
      },
      boxShadow:{
        buttonShadow:'0 5px 28.5px 1.5px rgb(45 186 232 / 50%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
