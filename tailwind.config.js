/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./templates/LandingPage/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      colors:{
        red: '#FF4655',
        grey:'#ECE8E1',
        blue:'#0F1923',
        black:'	#111111',
        blackGrey:'#292929',
      }
    },
  },
  plugins: [],
};

module.exports = config;
