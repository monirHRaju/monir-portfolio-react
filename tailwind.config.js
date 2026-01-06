/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5BB954", // Vibrant green from screenshot
        "background-light": "#f3f4f6", // Light gray for light mode
        "background-dark": "#111111", // Very dark charcoal for dark mode
        "card-light": "#ffffff",
        "card-dark": "#1e1e1f", // Slightly lighter dark for cards
        "sidebar-dark": "#18181b",
        "text-muted-dark": "#9ca3af",
        "text-muted-light": "#6b7280",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        'xl': "1rem",
        '2xl': "1.5rem",
        '3xl': "2rem",
      },
      boxShadow: {
          'neumorphic-dark': '5px 5px 10px #151516, -5px -5px 10px #272728',
          'glow': '0 0 15px rgba(91, 185, 84, 0.3)',
      }
    },
  },
  plugins: [],
}
