/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        text_main: '#F3F3F3',
         text_din: '#76808C',
         
         bg_main: '#0E141B',
         bg_highlight: '#1E2329',
         bg_hover: '#313843',
         bg_secondary: '#14344B',
         bg_tertiary: '#212B54',
         
         primary: '#66C0F4',
         secondary: '#4B619B',
         accent_green: '#A1CD44',
         accent_red: '#CD5444',
         accent_yellow: '#C1B15F'
      }
    },
  },
  plugins: [],
}

