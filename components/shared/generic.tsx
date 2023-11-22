"use client";

import Balancer from "react-wrap-balancer";
import Image from "next/image";

import {useTranslations} from 'next-intl';
import { useSignInModal } from "../layout/sign-in-modal";

export default function Generic() {
  
  const t = useTranslations('Home');
  const { SignInModal, setShowSignInModal } = useSignInModal();

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <SignInModal />
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
          className="animate-fade-up bg-gradient-to-br from-green-800 to-black bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-3xl md:leading-[5rem]"
          style={{ animationFillMode: "forwards" }}
        >
          <Balancer>{t('Ultimate')}</Balancer>
        </h3>
        <button
            className="mt-4 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-green-500 active:bg-green-500 transition-colors duration-500"
            onClick={() => setShowSignInModal(true)}
          >
            {t('Sign In')}
          </button>
      </div>
    </>
  );
}