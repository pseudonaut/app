"use client";

import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default function Generic() {
  
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
          <Balancer>The ultimate guide to Solidity.</Balancer>
        </h3>
      </div>
    </>
  );
}