import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#2E7EC8", foreground: "#FFFFFF" },
        secondary: { DEFAULT: "#4A9FE5", foreground: "#FFFFFF" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
