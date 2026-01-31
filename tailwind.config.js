/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slds-blue': '#0176d3',
        'slds-gray-1': '#f3f3f3',
        'slds-gray-2': '#ecebea',
        'slds-text': '#181818',
        'barca-blue': '#004d98',
        'barca-red': '#a50044',
        'csk-yellow': '#ffff3c',
        'csk-blue': '#0081e9',
      },
    },
  },
  plugins: [],
}
