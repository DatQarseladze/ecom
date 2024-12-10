import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Make sure all your JSX files are included here
  ],
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
      spacing: {
        "22.47": "22.47px",
      },
      borderWidth: {
        "5.62": "5.62px",
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
