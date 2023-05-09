// import konstaConfig config
import konstaConfig from 'konsta/config'

// wrap config with konstaConfig config
module.exports = konstaConfig({
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
});