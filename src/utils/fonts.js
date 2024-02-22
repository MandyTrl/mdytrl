import localFont from 'next/font/local'

export const rokkitt = localFont({
  src: [
    {
      path: '../../public/fonts/rokkitt/rokkitt-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../public/fonts/rokkitt/rokkitt-Extralight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../public/fonts/rokkitt/rokkitt-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/rokkitt/rokkitt-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/rokkitt/rokkitt-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/rokkitt/rokkitt-Semibold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/rokkitt/rokkitt-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/rokkitt/rokkitt-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    }
  ],
  variable: '--font-rokkitt'
})

export const generalSans = localFont({
  src: [
    {
      path: '../../public/fonts/General Sans/GeneralSans-Extralight.otf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-Semibold.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-ExtralightItalic.otf',
      weight: '200',
      style: 'italic'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-LightItalic.otf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-Italic.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-MediumItalic.otf',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-SemiboldItalic.otf',
      weight: '600',
      style: 'italic'
    },
    {
      path: '../../public/fonts/General Sans/GeneralSans-BoldItalic.otf',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-general-sans'
})
