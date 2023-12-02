import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { sfPro, inter } from "./fonts";
import { Suspense } from "react";

import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import cx from "classnames";

export const metadata = {
  title: "QuantDisco",
  description:
    "Cryptocurrency analytics platform",
  twitter: {
    card: "summary_large_image",
    title: "QuantDisco",
    description:
      "Cryptocurrency analytics platform",
    // creator: "@QuantDisco",
  },
  metadataBase: new URL("https://quantdisco.com"),
  themeColor: "#000",
};

export default async function RootLayout({children, params: {locale}}) {
  return (
    <html lang={locale}>
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-slate-800 via-purple to-gray-950" />
        <main className="flex min-h-screen w-full flex-col items-center py-20">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
