"use client";

import { signOut } from "next-auth/react";
import { AlignStartHorizontal, Video, LogOut } from "lucide-react";
import Popover from "@/components/shared/popover";
import Image from "next/image";
import { Session } from "next-auth";
import React, { useEffect, useState } from 'react';
import { imageSequence_01 } from "./enrollRotation";
import { useSignInModal } from "../layout/sign-in-modal";

export default function Enroll({ session }: { session: Session | null }) {

  const { SignInModal, setShowSignInModal } = useSignInModal();

  const [currentIndex0, setCurrentIndex0] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const [currentIndex5, setCurrentIndex5] = useState(0);
  const [currentIndex6, setCurrentIndex6] = useState(0);
  const [currentIndex7, setCurrentIndex7] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeout(() => { setCurrentIndex0((prevIndex) => (prevIndex + 1) % imageSequence_01.rotation.length); }, 100 * 1);
      setTimeout(() => { setCurrentIndex1((prevIndex) => (prevIndex + 1) % imageSequence_01.rotation.length); }, 100 * 2);
      setTimeout(() => { setCurrentIndex2((prevIndex) => (prevIndex + 1) % imageSequence_01.rotation.length); }, 100 * 3);
      setTimeout(() => { setCurrentIndex3((prevIndex) => (prevIndex + 1) % imageSequence_01.rotation.length); }, 100 * 4);
      setTimeout(() => { setCurrentIndex4((prevIndex) => (prevIndex + 1) % imageSequence_01.rotation.length); }, 100 * 5);
      setTimeout(() => { setCurrentIndex5((prevIndex) => (prevIndex + 1) % imageSequence_01.rotation.length); }, 100 * 6);
      setTimeout(() => { setCurrentIndex6((prevIndex) => (prevIndex + 1) % imageSequence_01.rotation.length); }, 100 * 7);
      setTimeout(() => { setCurrentIndex7((prevIndex) => (prevIndex + 1) % imageSequence_01.rotation.length); }, 100 * 8);
    }, imageSequence_01.interval);

    return () => clearInterval(timer);
  }, []);

  const { email, image } = session?.user || {};

  if (!email) return (
    <div className="relative text-left max-w-xl">
      <SignInModal />
      <section className="overflow-hidden rounded-lg shadow-2xl drop-shadow-2xl md:grid md:grid-cols-4">
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex0]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex1]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex2]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex3]}
          className="h-32 w-full object-cover md:h-full"
        />

        <div className="p-4 text-center sm:p-6 md:col-span-4 lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest">
            Enroll Today
          </p>

          <h2 className="mt-6 font-black uppercase">
            <span className="text-4-xl bg-gradient-to-r from-orange-400 via-orange-600 to-yellow-800 bg-clip-text font-extrabold text-transparent sm:text-5xl">
              SOLIDITY NIRVANA
            </span>
          </h2>

          <button
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-orange-500 active:bg-orange-500 transition-colors duration-500"
            onClick={() => setShowSignInModal(true)}
          >
            LOGIN
          </button>

          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Awaken your mind. Realize your potential.
          </p>
        </div>

        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex4]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex5]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex6]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex7]}
          className="h-32 w-full object-cover md:h-full"
        />
      </section>
    </div>
  );

  if (email.includes('.edu')) return (
    <div className="relative text-left max-w-xl">
      <section className="overflow-hidden rounded-lg shadow-2xl drop-shadow-2xl md:grid md:grid-cols-4">
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex0]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex1]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex2]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex3]}
          className="h-32 w-full object-cover md:h-full"
        />

        <div className="p-4 text-center sm:p-6 md:col-span-4 lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest">
            Enroll Today
          </p>

          <h2 className="mt-6 font-black uppercase">
            <span className="text-4-xl bg-gradient-to-r from-orange-400 via-orange-600 to-yellow-800 bg-clip-text font-extrabold text-transparent sm:text-5xl">
              SOLIDITY NIRVANA
            </span>
          </h2>

          <a
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-orange-500 active:bg-orange-500 transition-colors duration-500"
            href={"https://enroll.soliditynirvana.com/b/cN25nfeXc9nrglq3cf?prefilled_email=" + email}
            target="_blank"
            rel="noreferrer"
          >
            ENROLL
          </a>

          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Awaken your mind. Realize your potential.
          </p>
        </div>

        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex4]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex5]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex6]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex7]}
          className="h-32 w-full object-cover md:h-full"
        />
      </section>
    </div>
  );
  
  else return (
    <div className="relative text-left max-w-xl">
      <section className="overflow-hidden rounded-lg shadow-2xl drop-shadow-2xl md:grid md:grid-cols-4">
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex0]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex1]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex2]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex3]}
          className="h-32 w-full object-cover md:h-full"
        />

        <div className="p-4 text-center sm:p-6 md:col-span-4 lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest">
            Enroll Today
          </p>

          <h2 className="mt-6 font-black uppercase">
            <span className="text-4-xl bg-gradient-to-r from-orange-400 via-orange-600 to-yellow-800 bg-clip-text font-extrabold text-transparent sm:text-5xl">
              SOLIDITY NIRVANA
            </span>
          </h2>

          <a
            className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-orange-500 active:bg-orange-500 transition-colors duration-500"
            href={"https://enroll.soliditynirvana.com/b/14kcPHg1garv5GM6oq?prefilled_email=" + email}
            target="_blank"
            rel="noreferrer"
          >
            ENROLL
          </a>

          <p className="mt-8 text-xs font-medium uppercase text-gray-400">
            Awaken your mind. Realize your potential.
          </p>
        </div>

        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex4]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex5]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex6]}
          className="h-32 w-full object-cover md:h-full"
        />
        <img
          alt="Trainer"
          src={imageSequence_01.rotation[currentIndex7]}
          className="h-32 w-full object-cover md:h-full"
        />
      </section>
    </div>
  );

}
