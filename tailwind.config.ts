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
        soria: ['var(--font-soria)'],
        generalSans: ['var(--font-general-sans)']
      },
      colors: {
        yellowPrimary: '#FFDB27',
        yellowSecondary: '#FFF8D6',
        darkPrimary: '#040421',
        grayPrimary: '#575467',
        graySecondary: '#E0E0F5'
      }
    }
  },
  plugins: [require('tailwindcss-gradients')]
}
export default config
