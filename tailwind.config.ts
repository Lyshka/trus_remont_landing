import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      black: {
        "1d": "#1D1D1D",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
      main: {
        DEFAULT: "#EEB968",
      },
      brown: {
        77: "#774619",
        51: "#51351A",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
