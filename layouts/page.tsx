import Head from 'next/head';
import Footer from './footer';
import Navigation from './navigation';
import classNames from 'classnames';
import Copyright from './copyright';
import { motion } from "framer-motion"
import { Router } from 'next/router';
import { createContext, useContext, useState } from 'react';
import './custom';

interface Props {
  theme?: 'light' | 'dark'
  router?: any
  title?: string
}

interface PageContext {
  title?: string
  set: (v: Partial<PageContext>) => void
}

export const PAGE_CTX = createContext<PageContext>({ set: () => {} });

const Page = (props: React.PropsWithChildren<Props>) => {
  const {
    theme = 'light',
    children,
    router,
    title: pageTitle
  } = props;

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const [value, setValue] = useState<PageContext>({ set: () => {} });
  const CTX_VALUE_SETTER_GETTER = {
    ...value,
    set: (v: Partial<PageContext>) => { setValue({ ...value, ...v }) }
  }

  // Array of paths where navigation should be hidden
  // const router = useRouter();
  const hideNavPaths = ['/careglp', '/careglp/qualify', '/careglp/overview', '/careglp/nutrition'];
  
  const shouldShowNav = !hideNavPaths.includes(router.pathname);
  
  return (
    <PAGE_CTX.Provider value={CTX_VALUE_SETTER_GETTER}>
      <PAGE_CTX.Consumer>
        {(value) => (
          <section
            key={router.route}
            // initial="hidden"
            // animate="visible"
            // variants={variants}
            // transition={{ duration: 0.3 }}
            id="root"
            className={
              classNames({
                [theme]: true,
                'patientory': true
              })
            }
          >
            <Head>
              {/* META VALUES */}
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              
              <meta name="title" content="Your Health At Your Fingertips" />
              <meta name="description" content="Empowers you with actionable insights from your health data, incentivizing you to take control of your health outcomes." />

              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://patientory.com/" />
              <meta property="og:title" content="Your Health At Your Fingertips" />
              <meta property="og:description" content="Empowers you with actionable insights from your health data, incentivizing you to take control of your health outcomes." />
              <meta property="og:image" content="https://patientory.com/img/patientory/phones.webp" />

              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://patientory.com/" />
              <meta property="twitter:title" content="Your Health At Your Fingertips" />
              <meta property="twitter:description" content="Empowers you with actionable insights from your health data, incentivizing you to take control of your health outcomes." />
              <meta property="twitter:image" content="https://patientory.com/img/patientory/phones.webp" />
              
              

              <link rel="stylesheet" href="/styles/fonts.css"/>
              <link rel="stylesheet" href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css" />
              <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
              {/*<title>Patientory | {value.title} | Your Health At Your Fingertips</title>*/}
              <title>Patientory | Your Health At Your Fingertips</title>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-70084580-1"/>
              

              <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
              <script src="https://my.hellobar.com/df3e14de6833bca62fd2c2dd56c948268fc03d7c.js" type="text/javascript" charset="utf-8" async="async"> </script>

              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-70084580-1', { page_path: window.location.pathname });
                  `,
                }}
              />

              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    (function(h,o,t,j,a,r){
                      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                      h._hjSettings={hjid:2811931,hjsv:6};
                      a=o.getElementsByTagName('head')[0];
                      r=o.createElement('script');r.async=1;
                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                      a.appendChild(r);
                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                  `,
                }}
              />
              <style>
                {
                  `
                  df-messenger {
                    z-index: 99999999;
                    position: fixed;
                    bottom: 16px;
                    right: 20px;
                  }
                  :root {
                    --df-messenger-primary-color: #00CD7D;
                    --df-messenger-titlebar-title-font-size: 15px;
                  }
                  `
                }
              </style>
            </Head>
            {shouldShowNav && <Navigation theme={theme}/>}
            <section className={theme}>
              {children}
            </section>
            {shouldShowNav && <Footer theme={theme}/>}
            {shouldShowNav && <Copyright/>}
            <df-messenger
              location="us-central1"
              project-id="patientory-1292"
              agent-id="2a1f88ac-3319-41b8-9045-e3306dfaf735"
              language-code="en"
              max-query-length="-1"
              allow-feedback="all" intent="#startConversation">
              <df-messenger-chat-bubble
               chat-title="Patientory Health Coach" bot-writing-text="Thinking..." chat-title-icon="https://patientory.com/img/logo/small_dark.svg">
              </df-messenger-chat-bubble>
            </df-messenger>
          </section>
        )}
      </PAGE_CTX.Consumer>
    </PAGE_CTX.Provider>
  );
};

export default Page;