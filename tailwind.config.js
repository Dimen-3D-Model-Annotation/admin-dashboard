/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        accent: "#FF8F9C",
        blackish: "#1b1b1b",
        'custom-gray': 'rgba(217, 217, 217, 0.38)',
        'custom-togglegray': '#474747',
        'custom-purple': '#A020FF',
        'custom-purpleshade': '#C040FF'
      },
      width: {
        'custom-width': '75%', // Custom width class
        '120': '30rem', // Adjust this value as needed
      },
    },
  },
  plugins: [],
};