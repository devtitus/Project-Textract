/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #9333EA 0%, #3B82F6 100%)',
        'bg-gradient': 'linear-gradient(90deg, #EFF6FF 0%, #FAF5FF 50%, #FDF2F8 100%)'
      },
    },
  },
  plugins: [],
};
