/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "serif"],
    },
    fontWeight: {
      thin: "100",
      ExtraLight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      colors: {
        ef6351: '#ef6351',
        f38375: '#f38375',
        f7a399: '#f7a399',
        fbc3bc: '#fbc3bc',
        ffe3e0: '#ffe3e0',
      },
    },
  },
  plugins: [],
};
