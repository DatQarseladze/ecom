import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        ...require("tailwindcss/defaultTheme").screens,
        "2xl": { min: "1921px" },
        "max-2xl": { max: "1920px" },
      },
      boxShadow: {
        "outer-borders":
          "0 0 0 10px #ffffff, 0 0 0 20px #dcdcdc, 0 0 0 30px #ffffff",
      },
      variants: {
        fill: ["hover", "focus"],
      },
    },
  },
  plugins: [],
};
export default config;
