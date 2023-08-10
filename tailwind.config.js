/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Cairo", "sans-serif"],
        base: ["Open Sans", "sans-serif"],
      },
      colors: {
        white: "var(--white)",
        orange: "var(--orange)",
        gray: {
          100: "var(--gray-01)",
          200: "var(--gray-02)",
          300: "var(--gray-03)",
        },
        purple: {
          600: "var(--primary)",
          400: "var(--primary-soft)",
        },
      },
    },
  },
  plugins: [],
};
