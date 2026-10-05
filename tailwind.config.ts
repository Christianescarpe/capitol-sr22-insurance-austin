import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#090d16",
          850: "#0d1527",
          800: "#111c34",
          700: "#182849",
          600: "#1f3560",
        },
        gold: {
          400: "#fcd34d",
          500: "#f59e0b",
          600: "#d97706",
          accent: "#f5c32c",
        },
        brand: {
          blue: "#1a56db",
          dark: "#0b132b",
          light: "#f8fafc",
        },
      },
    },
  },
  plugins: [],
};
export default config;
