import Balancer from "react-wrap-balancer";
import Image from "next/image";

import dbConnect from 'lib/dbConnect'
import User from "models/User";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function fetchData() {

  await dbConnect();
  
  // Get the session from the context
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.name) {
    return { status: false, membership: 'Free' };
  }

  /* find data based on session.username in our database */
  const result = await User.findOne({ email: session.user.email });

  if (!result) {

    // User not found, create and insert a new user
    const newUser = new User({
      email: session.user.email,
      membership: 'Free'
    });

    try {
      const savedUser = await newUser.save();
      const email = session.user.email;
      const namePart = email.split('@')[0];
      const sanitized = namePart.replace(/[^a-zA-Z]/g, '');
      const response = await fetch('https://marketing.soliditynirvana.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: sanitized,
          api_key: process.env.SENDY_KEY,
          email: session.user.email,
          list: process.env.SENDY_LIST,
        }),
      });
      return { status: false, membership: savedUser.membership };
    } catch (error) {
      console.error('Error creating and saving user:', error);
      return { status: false, membership: 'Free' };
    }

  }
  else {
    return {status: false, membership: result.membership};
  }

}

export default async function Home() {
  
  const member = await fetchData();
  const session = await getServerSession(authOptions);

  const features = [
    {
      title: 'Disco',
      description: 'Data',
      demo: (
        <div className="flex items-center justify-center space-x-20">
            <Image
              style={{ borderRadius: '50%', overflow: 'hidden' }}
              src="/DiscoLogoClear.png"
              alt="Quant"
              width="200"
              height="200"
            ></Image>
        </div>
      ),
    },
    {
      title: 'Disco',
      description: 'Data',
      demo: (
        <div className="flex items-center justify-center space-x-20">
            <Image
              style={{ borderRadius: '50%', overflow: 'hidden' }}
              src="/DiscoLogoClear.png"
              alt="Quant"
              width="200"
              height="200"
            ></Image>
        </div>
      ),
    },
    {
      title: 'Disco',
      description: 'Data',
      demo: (
        <div className="flex items-center justify-center space-x-20">
            <Image
              style={{ borderRadius: '50%', overflow: 'hidden' }}
              src="/DiscoLogoClear.png"
              alt="Quant"
              width="200"
              height="200"
            ></Image>
        </div>
      ),
    },
  ];

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
            src="/DiscoLogoClear.png"
            alt="Disco Logo"
            width="300"
            height="300"
            className="animate-fade-up"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          ></Image>
        </div>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-slate-600 bg-clip-text text-center font-display text-4xl font-bold text-transparent opacity-0 drop-shadow-sm md:text-7xl"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Quant</Balancer>
          <Balancer>Disco</Balancer>
        </h1>
        <br />
        <h3
          className="animate-fade-up bg-gradient-to-br from-slate-300 to-slate-400 bg-clip-text text-center font-display text-2xl font-bold text-transparent opacity-0 drop-shadow-sm md:text-3xl"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>www.quantdisco.com</Balancer>
        </h3>
      </div>
      <br />
    </>
  );
}


