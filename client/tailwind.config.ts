import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
    colors:{
      'primary':{
          400: '#588af5',
          500: '#1A73E8',
          600: '#185abc',
      },
      'secondary':{
        500: '#ffffff',
        600: '#f6f9fe'
      }
    }
  },
  },
  plugins: [],
};
export default config;
