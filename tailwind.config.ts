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
        'yel-primary': '#FFDB27',
        'yel-secondary': '#FFF8D6',
        primary: '#040421',
        'gray-primary': '#575467',
        'gray-secondary': '#E0E0F5'
      }
    }
  },
  plugins: [require('tailwindcss-gradients')]
}
export default config
