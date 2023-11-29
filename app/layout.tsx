import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Ganalytics from './ganalytics';
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import {notFound} from 'next/navigation';
import Head from 'next/head'; // Import the 'head' component

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
  // if (!locales.includes(locale as any)) notFound();
  return (
    <html lang={locale}>
      <Head>
            <script
                dangerouslySetInnerHTML={{
                  __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM}');
                  `,
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
        {/* Add the noscript iframe to the body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
