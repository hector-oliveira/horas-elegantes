import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'brow-1': '#F8E1CF',
        'brow-2': '#D8C2A7',
        'brow-3': '#D2A27A',
        'brow-4': '#763F21'
      }
    }
  },
  plugins: []
};
export default config;
