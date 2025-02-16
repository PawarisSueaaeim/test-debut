import type { Config } from "tailwindcss";
import { ORENGE } from "./constants/COLORS";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orenge: ORENGE
      },
    },
  },
  plugins: [],
} satisfies Config;
