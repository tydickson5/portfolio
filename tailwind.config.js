/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: {
          50: "#FAF8F5",
          100: "#F5F2EB", // Base background
          200: "#EBE5D8", // Elevated card / border
          300: "#DED6C4", // Stronger border
          400: "#C7BC9F",
          500: "#A89A7B",
          600: "#8B7D60",
          700: "#6B5F47",
          800: "#4D4433",
          900: "#332C21",
        },
        forest: {
          50: "#F2F6F3",
          100: "#DEECE2",
          200: "#BFD9CA",
          300: "#92C0A5",
          400: "#60A17B",
          500: "#3E835B",
          600: "#2F6A48",
          700: "#26543A",
          800: "#1F432F",
          900: "#163324", // Primary dark green
          950: "#0C1D14", // Deepest forest green
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        subtle: "0 2px 10px -2px rgba(22, 51, 36, 0.06), 0 1px 3px -1px rgba(22, 51, 36, 0.04)",
        card: "0 10px 30px -10px rgba(22, 51, 36, 0.08), 0 4px 6px -2px rgba(22, 51, 36, 0.03)",
        "card-hover": "0 20px 35px -10px rgba(22, 51, 36, 0.14), 0 8px 12px -4px rgba(22, 51, 36, 0.06)",
      },
    },
  },
  plugins: [],
};

