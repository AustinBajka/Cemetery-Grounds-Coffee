import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
    colors: {
      green: {
        '200': '#92CCC1',
        '300': '#80B4AA',
        '600': '#314642',
        '700': '#233431',
      },
      brown: {
        '800': '#282424',
      },
      white: {
        '100': '#FFFFFF',
        '200': '#F5F5F5',
      },
      black: {
        '100': '#000000',
      },
      disabled: {
        '100': '#4B4B4B',
      },
    },
  },
  plugins: [],
} satisfies Config;
