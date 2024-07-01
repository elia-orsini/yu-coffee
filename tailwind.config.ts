import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "1-star": "#dc2626",
        "2-star": "#ea580c",
        "3-star": "#facc15",
        "4-star": "#84cc16",
        "5-star": "#22d3ee",
      },
      fontSize: {
        "2xs": ".6rem",
      },
    },
  },
  plugins: [],
};
export default config;
