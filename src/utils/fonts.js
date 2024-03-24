import localFont from 'next/font/local'

export const rokkitt = localFont({
  src: [
    {
      path: '../../public/fonts/Rokkitt/Rokkitt-Thin.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Rokkitt/Rokkitt-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Rokkitt/Rokkitt-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Rokkitt/Rokkitt-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Rokkitt/Rokkitt-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Rokkitt/Rokkitt-SemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Rokkitt/Rokkitt-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Rokkitt/Rokkitt-ExtraBold.ttf',
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
