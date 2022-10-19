/* eslint-disable max-len */
import { Html, Head, Main, NextScript } from 'next/document';


// we set lang="en-US" in next.config.js, don't need to repeat it on <Html> here
// The <Head /> component used here should only be used for any <head> code that is common for all pages.
// Local stuff like title, or viewport meta tags, should go in that page's use of CatoHead.
export default function Document() {
  return (
    <Html>
      <Head>
        {/*
          we don't need these two- nextjs will hit up googleapis during build, inline the font declaration file(s),
          and then add the preconnect gstatic link. I'm leaving this comment here so the knowledge pings
          my brain more later.
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        */}
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&amp;display=swap" rel="stylesheet" />

        <meta name="rating" content="general" />
        <meta name="color-scheme" content="dark" />

        {/* @TODO replace placeholder name or set using admin page */}
        <meta name="apple-mobile-web-app-title" content="Cato" />

        {/*
          <link rel="icon" type="image/png" href="/assets/icons/favicon.png" sizes="16x16 32x32" />
          <link rel="icon" type="image/png" href="/assets/icons/android-touch-icon-128x128.png" sizes="128x128" />
          <link rel="icon" type="image/png" href="/assets/icons/android-touch-icon-192x192.png" sizes="192x192" />
          <link rel="apple-touch-icon" type="image/png" href="/assets/icons/apple-touch-icon-180x180.png" />
          <link rel="apple-touch-icon" type="image/png" href="/assets/icons/apple-touch-icon-120x120.png" sizes="120x120" />
          <link rel="apple-touch-icon" type="image/png" href="/assets/icons/apple-touch-icon-152x152.png" sizes="152x152" />
          <link rel="apple-touch-icon" type="image/png" href="/assets/icons/apple-touch-icon-167x167.png" sizes="167x167" />
          <link rel="apple-touch-icon" type="image/png" href="/assets/icons/apple-touch-icon-180x180.png" sizes="180x180" />
        */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// <meta name="apple-mobile-web-app-capable" content="yes" />
// <meta name="apple-mobile-web-app-status-bar-style" content="black" />
