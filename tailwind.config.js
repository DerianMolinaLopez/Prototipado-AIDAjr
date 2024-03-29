/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),//sacamos una copia de la paleta de color actual para mantenerla e ingresar nuestra propia paleta
       //variaciones del verde
       'verde-fuerte':'#003302',
        'verde-fuerte-reducido':'#0D560F',
        'verde-medio':'#268029',
        'verde-bajo':'#4FAA52',
        'verde-muy-bajo':'#88D68A',
         //variaciones del azul
        'azul-fuerte-medio':'#3937FF',
        'azul-medio':'#4654F0',
        'azul-fuerte':'#0028BFF',
        //variaciones de naranja y amarillo
        'naranja':'#FF7815',
        'amarillo':'#F0D906',
        'naranja-amarillado':'#FFAE12'
    })
  },
  plugins: [],
}

