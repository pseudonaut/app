import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { sfPro, inter } from "./fonts";
import { Suspense } from "react";
import Script from 'next/script';

import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import Ganalytics from './ganalytics';
import cx from "classnames";
import Head from "next/head";

interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

export const metadata = {
  title: "SolidityNirvana",
  description:
    "The ultimate guide to Solidity",
  twitter: {
    card: "summary_large_image",
    title: "SolidityNirvana",
    description:
      "The ultimate guide to Solidity",
    creator: "@SolidityNirvana",
  },
  metadataBase: new URL("https://soliditynirvana.com"),
  themeColor: "#000",
};

const locales = [
  'en', 'ja', 'zh', 'de', 'hi', 'fr', 'ko', 'pt', 'it', 'es', 'id', 'nl', 'tr', 'tl', 'pl',
  'sv', 'bg', 'ro', 'ar', 'cs', 'el', 'fi', 'hr', 'ms', 'sk', 'da', 'ta', 'uk', 'ru'
]

export default async function RootLayout({children, params: {locale}}) {
  return (
    <html lang={locale}>
      <Head>
          <Script 
            strategy="afterInteractive"
            src={"https://www.googletagmanager.com/gtag/js?id=" + process.env.NEXT_PUBLIC_GTM}
            onLoad={() => {
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', process.env.NEXT_PUBLIC_GTM);
            }}
          />
      </Head>
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-orange-100 via-green to-green-200" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center py-32">
          {children}
        </main>
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
        <Analytics />
        <Ganalytics />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
      </body>
    </html>
  );
}
