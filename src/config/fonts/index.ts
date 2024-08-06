import localFont from 'next/font/local'

const archivo = localFont({
  src: [
    {
      path: './archivo/Archivo-Thin.otf',
      weight: '100',
      style: 'normal'
    },
    {
      path: './archivo/Archivo-ThinItalic.otf',
      weight: '100',
      style: 'italic'
    },
    {
      path: './archivo/Archivo-ExtraLight.otf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './archivo/Archivo-ExtraLightItalic.otf',
      weight: '200',
      style: 'italic'
    },
    {
      path: './archivo/Archivo-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './archivo/Archivo-LightItalic.otf',
      weight: '300',
      style: 'italic'
    },
    {
      path: './archivo/Archivo-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './archivo/Archivo-Italic.otf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './archivo/Archivo-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './archivo/Archivo-MediumItalic.otf',
      weight: '500',
      style: 'italic'
    },
    {
      path: './archivo/Archivo-SemiBold.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './archivo/Archivo-SemiBoldItalic.otf',
      weight: '600',
      style: 'italic'
    },
    {
      path: './archivo/Archivo-Bold.otf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './archivo/Archivo-BoldItalic.otf',
      weight: '700',
      style: 'italic'
    },
    {
      path: './archivo/Archivo-ExtraBold.otf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './archivo/Archivo-ExtraBoldItalic.otf',
      weight: '800',
      style: 'italic'
    },
    {
      path: './archivo/Archivo-Black.otf',
      weight: '900',
      style: 'normal'
    },
    {
      path: './archivo/Archivo-BlackItalic.otf',
      weight: '900',
      style: 'italic'
    }
  ],
  variable: '--font-archivo'
})

const chillax = localFont({
  src: [
    {
      path: './chillax/Chillax-Extralight.otf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './chillax/Chillax-Light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './chillax/Chillax-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './chillax/Chillax-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './chillax/Chillax-Semibold.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './chillax/Chillax-Bold.otf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-chillax'
})

export { archivo, chillax }
