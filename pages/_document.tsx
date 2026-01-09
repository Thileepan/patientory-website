import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style>{`
            .goog-te-banner-frame { display: none !important; }
            body { top: 0 !important; }
            .skiptranslate { display: none !important; }
            .goog-te-gadget { display: none !important; }
            #goog-gt-tt { display: none !important; }
            .goog-te-balloon-frame { display: none !important; }
            .goog-text-highlight { background: none !important; box-shadow: none !important; }
          `}</style>
        </Head>
        <body>
          <div id="google_translate_element" style={{ display: 'none' }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument