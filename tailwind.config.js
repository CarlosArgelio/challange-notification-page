/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1440px",
      },
      colors: {
        "primary-red": "hsl(1, 90%, 64%)",
        "primary-blue": "hsl(219, 85%, 26%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "very-ligth-graying-blue": "hsl(210, 60%, 98%)",
        "ligth-grayish-blue-1": "hsl(211, 68%, 94%)",
        "ligth-grayish-blue-2": "hsl(205, 33%, 90%)",
        "grayish-blue": "hsl(219, 14%, 63%)",
        "dark-grayish-blue": "hsl(219, 12%, 42%)",
        "very-dark-blue": "hsl(224, 21%, 14%)",
      },
      fontFamily: {
        "plus-jakerta-sans": ["Plus Jakarta Sans"],
      },
    },
  },
  plugins: [],
};
