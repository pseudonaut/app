"use client";

import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import Generic from "@/components/shared/generic";

export default function Dashboard({ session }: { session: Session | null }) {
  
  const { email, image } = session?.user || {};

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
          <Balancer>Solidity Nirvana</Balancer>
        </h1>
        <h3
          className="animate-fade-up bg-gradient-to-br from-green-800 to-black bg-clip-text text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-3xl md:leading-[5rem]"
          style={{ animationFillMode: "forwards" }}
        >
          <Balancer>{email}</Balancer>
        </h3>
        <br />
        <h1>
          Language
        </h1>
      </div>
    </>
  );
}