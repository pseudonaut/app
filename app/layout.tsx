import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { sfPro, inter } from "./fonts";
import { Suspense } from "react";

import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import cx from "classnames";

interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

export const metadata = {
  title: "Disco",
  description:
    "Cryptocurrency analytics platform",
  twitter: {
    card: "summary_large_image",
    title: "Disco",
    description:
      "Cryptocurrency analytics platform",
    // creator: "@QuantDisco",
  },
  metadataBase: new URL("https://quantdisco.com"),
  themeColor: "#000",
};

const locales = [
  'en', 'ja', 'zh', 'de', 'hi', 'fr', 'ko', 'pt', 'it', 'es', 'id', 'nl', 'tr', 'tl', 'pl',
  'sv', 'bg', 'ro', 'ar', 'cs', 'el', 'fi', 'hr', 'ms', 'sk', 'da', 'ta', 'uk', 'ru'
]

export default async function RootLayout({children, params: {locale}}) {
  return (
    <html lang={locale}>
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-blue-100 via-purple to-slate-200" />
        <main className="flex min-h-screen w-full flex-col items-center py-32">
          {children}
        </main>
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
