/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Cairo", "sans-serif"],
        basic: ["Open Sans", "sans-serif"],
      },
      // fontSize: {
      //   18: "1.125rem",
      //   20: "1.25rem",
      //   24: "1.5rem",
      //   40: "2.5rem",
      // },
      colors: {
        white: "var(--white)",
        orange: {
          100: "var(--orange-01)",
          200: "var(--orange-02)",
          300: "var(--orange-03)",
          400: "var(--orange-04)",
        },
        gray: {
          100: "var(--gray-01)",
          200: "var(--gray-02)",
          300: "var(--gray-03)",
          400: "var(--gray-04)",
          500: "var(--gray-05)",
        },
        purple: {
          200: "var(--secondary-circles)",
          300: "var(--secondary-circle)",
          400: "var(--primary-soft)",
          600: "var(--primary)",
          700: "var(--darkpurple)",
        },
        blue: {
          100: "var(--blue-01)",
          200: "var(--blue-02)",
          300: "var(--blue-03)",
        },
      },
      backgroundImage: {
        "check-box": "url('/icons/trash-icon.svg')",
      },
    },
  },
  plugins: [],
};
