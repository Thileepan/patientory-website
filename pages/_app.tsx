import Page from '../layouts/page'
import Head from 'next/head'
import { useRouter } from 'next/router';
import '../styles/global.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import { useEffect } from 'react';
import { LanguageProvider } from '../lib/language/LanguageProvider';

export function reportWebVitals(metric) {
  console.log(metric)
}

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    if (window) {
      let w = window as any
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push(['js', new Date()]);
      w.dataLayer.push(['config', 'UA-70084580-1']);
    }
  }, [])

  const theme: 'light' | 'dark' = router.pathname !== '/' ? 'light' : 'light'
  return (
    <LanguageProvider>
      <Page router={router} theme={theme}>
        <Head>
          <style>
              {
                `
                #__next, html {
                  background: ${theme === 'light' ? 'white' : 'black'}
                }
                `
              }
          </style>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-70084580-1"></script>

        </Head>
        <Component {...pageProps} />
      </Page>
    </LanguageProvider>
  )
}

export default MyApp
