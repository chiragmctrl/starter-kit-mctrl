import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./packages/**/*.{ts,tsx}" // monorepo safe
  ]
};

export default config;
