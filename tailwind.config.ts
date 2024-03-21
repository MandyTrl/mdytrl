import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        rokkitt: ['var(--font-rokkitt)'],
        generalSans: ['var(--font-general-sans)']
      },
      colors: {
        'yel-primary': '#FFDB27',
        'yel-secondary': '#FFF8D6',
        primary: '#040421',
        'gray-primary': '#575467',
        'gray-secondary': '#E0E0F5'
      },
      boxShadow: {
        footer: 'rgba(0, 0, 0, 0.5) 0px 10px 12px 0px inset;',
        'footer-btn': '0 15px 5px -15px rgba(0,0,0,0.3) inset, 15px 0 8px -10px rgba(0,0,0,0.3) inset'
      }
    }
  },
  plugins: [require('tailwindcss-gradients')]
}
export default config
