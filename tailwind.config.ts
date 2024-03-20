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
        'brow-4': '#763F21',

        // Main Colors
        '@botticelli-blue': '#BCC8CA',
        '@maastricht-blue': '#092337',
        '@chinese-white': '#E1E1DA',
        '@ghost-white': '#F8F8F8',
        '@snow-white': '#FFFAFA',
        '@peplum-quarter-white': '#F0E9F9',
        '@desert-sand': '#E7D5A7'
      }
    }
  },
  plugins: []
};
export default config;
