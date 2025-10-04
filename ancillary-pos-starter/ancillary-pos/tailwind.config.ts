import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { aa: { red: "#D10028", redDark: "#B10022" } },
      boxShadow: { card: "0 6px 24px rgba(0,0,0,.08)" },
      borderRadius: { xl2: "1rem" }
    },
  },
  plugins: [],
} satisfies Config;
