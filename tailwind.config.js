/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1160px",
    },
    fontSize: {
      base: "1rem",
      "6xl": ["clamp(1.75rem, 1.3979rem + 1.5023vw, 2.75rem)", "1.1em"],
    },
    colors: {
      orange: "hsl(26, 100%, 55%)",
      "pal-orange": "hsl(25, 100%, 94%)",
      "ver-dar-blue": "hsl(220, 13%, 13%)",
      "dar-grayis-blue": "hsl(219, 9%, 45%)",
      "grayis-blue": "hsl(220, 14%, 75%)",
      "ligh-grayis-blue": "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },
    fontFamily: {
      "kumbh-sans": ["Kumbh Sans", "sans-serif"],
    },
    extend: {
      animation: {
        "slide-next": "slideNext 0.4s ease-out",
        "slide-prev": "slidePrev 0.4s ease-out",
      },
      keyframes: {
        slideNext: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slidePrev: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
