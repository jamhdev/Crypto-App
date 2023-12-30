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
        background: `var(--color-background)`,
        primary: `var(--color-primary)`,
        accent: `var(--color-accent)`,
      },
    },
  },
  plugins: [],
};
export default config;
