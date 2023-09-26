// create pages/_document.tsx:

import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { GA_TRACKING_ID } from '../lib/gtag';

const APP_NAME = 'Next.js Template';
const APP_DESCRIPTION = 'Next.js Template';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* PWA primary color */}
                    {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
                    <meta name="application-name" content={APP_NAME} />
                    <meta name="description" content={APP_DESCRIPTION} />
                    <meta name="apple-mobile-web-app-title" content={APP_NAME} />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content={'default'} />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />

                    {/* <link rel="manifest" href="/manifest.json" /> */}
                    {/* <link rel="apple-touch-icon" href="/icons/icon-192x192.png" /> */}
                    {/* <link rel="shortcut icon" href="/favicon.ico" /> */}

                    {/* <link rel="manifest" href="/manifest.json" /> */}
                    {/* <link rel="apple-touch-icon" href="/icons/icon-192x192.png" /> */}
                    {/* <link rel="shortcut icon" href="/favicon.ico" /> */}

                    {/* <link rel="manifest" href="/manifest.json" /> */}
                    {/* <link rel="apple-touch-icon" href="/icons/icon-192x192.png" /> */}
                    {/* <link rel="shortcut icon" href="/favicon.ico" /> */}

                    {/* <link rel="manifest" href="/manifest.json" /> */}
                    {/* <link rel="apple-touch-icon" href="/icons/icon-192x192.png" /> */}
                    {/* <link rel="shortcut icon" href="/favicon.ico" /> */}

                    {/* <link rel="manifest" href="/manifest.json" /> */}
                    {/* <link rel="apple-touch-icon" href="/icons/icon-192x192.png" /> */}
                    {/* <link rel="shortcut icon" href="/favicon.ico" /> */}

                    {/* <link rel="manifest" href="/manifest.json" /> */}
                    {/* <link rel="apple-touch-icon" href="/icons/icon-192x192.png" /> */}
                    {/* <link rel="shortcut icon" href="/favicon.ico" /> */}

                    {/* <link rel="manifest" href="/manifest.json" /> */}

                </Head>
                <body className="bg-white dark:bg-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}