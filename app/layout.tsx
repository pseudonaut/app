import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Ganalytics from './ganalytics';
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import {notFound} from 'next/navigation';

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
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-orange-100 via-green to-green-200" />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
        <Ganalytics />
      </body>
    </html>
  );
}
