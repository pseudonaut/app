"use client";

import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { Session } from "next-auth";
import Generic from "@/components/shared/generic";

import Link from "next/link";

// import { useRouter } from 'next/router';

import {useTranslations} from 'next-intl';

export default function Dashboard({ session }: { session: Session | null }) {

  const { email, image } = session?.user || {};

  // const router = useRouter();
  
  const t = useTranslations('Home');

  const locales = [
    'en', 'ja', 'zh', 'de', 'hi', 'fr', 'ko', 'pt', 'it', 'es', 'id', 'nl', 'tr', 'tl', 'pl',
    'sv', 'bg', 'ro', 'ar', 'cs', 'el', 'fi', 'hr', 'ms', 'sk', 'da', 'ta', 'uk', 'ru'
  ]

  const localesFull = [
    'English', // en
    '日本語',   // ja (Japanese)
    '中文',     // zh (Chinese)
    'Deutsch', // de (German)
    'हिन्दी',   // hi (Hindi)
    'Français', // fr (French)
    '한국어',   // ko (Korean)
    'Português', // pt (Portuguese)
    'Italiano', // it (Italian)
    'Español', // es (Spanish)
    'Bahasa Indonesia', // id (Indonesian)
    'Nederlands', // nl (Dutch)
    'Türkçe', // tr (Turkish)
    'Filipino', // tl (Filipino)
    'Polski', // pl (Polish)
    'Svenska', // sv (Swedish)
    'Български', // bg (Bulgarian)
    'Română', // ro (Romanian)
    'العربية', // ar (Arabic)
    'Čeština', // cs (Czech)
    'Ελληνικά', // el (Greek)
    'Suomi', // fi (Finnish)
    'Hrvatski', // hr (Croatian)
    'Bahasa Melayu', // ms (Malay)
    'Slovenčina', // sk (Slovak)
    'Dansk', // da (Danish)
    'தமிழ்', // ta (Tamil)
    'Українська', // uk (Ukrainian)
    'Русский' // ru (Russian)
  ];

  if (!session) return <Generic />;

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/SNLogoClear.png"
            alt="SN logo"
            width="300"
            height="300"
          ></Image>
        </div>
        <br />
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-green-600 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationFillMode: "forwards" }}
        >
          <Balancer>{t('Solidity Nirvana')}</Balancer>
        </h1>
        <h3
          // className="animate-fade-up bg-gradient-to-br from-green-800 to-black bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-3xl md:leading-[5rem]"
          className="animate-fade-up bg-gradient-to-br from-green-800 to-black bg-clip-text text-center font-display text-2xl"
          style={{ animationFillMode: "forwards" }}
        >
          <Balancer>{email}</Balancer>
        </h3>
        <br />
        <br />
        <div
          className="grid grid-cols-3 mt-6 gap-3 animate-fade-up items-center justify-center opacity-0"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          {localesFull.map((locale, index) => <a
            className="items-center justify-center space-x-2 rounded-full border border-gray-400 bg-amber-100 px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800 hover:bg-amber-300"
            key={locale}
            href={"/" + locales[index]}
          >
            <p>
              <span className="hidden sm:inline-block">{locale}</span>
            </p>
          </a>)}
        </div>
      </div>
    </>
  );
}