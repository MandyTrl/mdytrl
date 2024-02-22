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
        footer: '0 22px 15px -22px rgba(0,0,0,0.45) inset, 27px 0 10px -27px rgba(0,0,0,0.45) inset',
        'footer-btn': '0 20px 15px -20px rgba(0,0,0,0.2) inset, 25px 0 10px -25px rgba(0,0,0,0.3) inset'
      }
    }
  },
  plugins: [require('tailwindcss-gradients')]
}
export default config
