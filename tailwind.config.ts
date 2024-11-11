import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        ...require("tailwindcss/defaultTheme").screens,
        "web-xl": { max: "1890px" },
      },
    },
  },
  plugins: [],
};
export default config;
