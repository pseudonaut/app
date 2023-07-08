"use client";

import { useState } from "react";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import CardEpisode from "@/components/home/cardEpisode";
import Link from "next/link";
import { Session } from "next-auth";
import Generic from "@/components/shared/generic";
import ComponentGrid from "@/components/home/component-grid";
import Turning from "@/components/shared/turning";

export default function Episodes({ session }: { session: Session | null }) {

  const [difficulty, setDifficulty] = useState('Introduction');
  const [episode, setEpisode] = useState('none');
  const [episodeNumber, setEpisodeNumber] = useState('none');
  const [image, setImage] = useState('none');
  
  if (!session) return <Generic />;

  const introEpisodes = [
    {
      title: "Coding Environment",
      image: "/waterfall.png",
      description: "Learn about the coding environment (foundry-rs, IDEs, CLI, etc.)"
    },
    {
      title: "Github",
      image: "/lotus.png",
      description: "Explore the fundamentals of Github for version control and branch management"
    },
    {
      title: "foundry-rs",
      image: "/pose.png",
      description: "A more thorough review of foundry-rs functionality and essential tools"
    },
  ]

  const easyEpisodes = [
    {
      title: "Introduction",
      image: "/pose2.png",
      description: "A brief overview of how this course works, and the different sections"
    },
    {
      title: "Fundamentals",
      image: "/school.png",
      description: "The absolute fundamentals of Solidity, an introduction to types"
    },
    {
      title: "Primitive Types",
      image: "/waterfall.png",
      description: "Examines the int, uint, bool, bytes, and other primitives"
    }
  ];

  return (
    <>
      <div className="z-10">

        <div className="my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 md:grid-cols-5 xl:px-0">
          <div>
            <div>
              <div
                style={{display: "flex", justifyContent: "center"}}>
                <Image
                  src="/SNLogoClear.png"
                  alt="SN logo"
                  width="150"
                  height="150"
                  className="animate-fade-up"
                  style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                />
              </div>
              <br />

              <span className="grid h-10 place-content-center rounded-lg bg-orange-300 text-x">
                <b>Episodes</b>
              </span>

              <ul className="mt-6 space-y-1">
                <li>
                  <details className="group [&_summary::-webkit-details-marker]:hidden" onClick={() => {setEpisode('none'); setDifficulty('Introduction');}}>
                    <summary
                      className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-green-200 hover:text-gray-700"
                      style={{backgroundColor: difficulty === 'Introduction' ? '#bbf7d0' : ''}}
                    >
                      <span className="text-sm font-medium"> <b>[0/5] Introduction</b></span>
                      <Turning />
                    </summary>
                  </details>
                </li>

                <li>
                  <details className="group [&_summary::-webkit-details-marker]:hidden" onClick={() => {setEpisode('none'); setDifficulty('Easy');}}>
                    <summary
                      className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-green-200 hover:text-gray-700"
                      style={{backgroundColor: difficulty === 'Easy' ? '#bbf7d0' : ''}}
                    >
                      <span className="text-sm font-medium"> <b>[0/20] Easy</b></span>
                      <Turning />
                    </summary>
                  </details>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-4">

            {episode !== 'none' && <div>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <Image
                    style={{ borderRadius: '20%', overflow: 'hidden' }}
                    src={image}
                    alt="From Within"
                    width="250"
                    height="250"
                  />
                </div>
                <div>
                  <h2 className="bg-gradient-to-br from-black to-grey-800 bg-clip-text font-display text-xl font-bold text-transparent md:text-1xl md:font-normal">
                    <Balancer>
                      #{episodeNumber}
                    </Balancer>
                  </h2>
                  <h2 className="bg-gradient-to-br from-black to-green-500 bg-clip-text font-display text-xl font-bold text-transparent md:text-4xl md:font-normal">
                    <Balancer>
                      {episode}
                    </Balancer>
                  </h2>
                  <h2 className="bg-gradient-to-br from-black to-grey-800 bg-clip-text font-display text-xl font-bold text-transparent md:text-2xl md:font-normal">
                    <Balancer>
                      {difficulty}
                    </Balancer>
                  </h2>
                </div>
                <div>
                  
                  <h2 className="bg-gradient-to-br from-black to-grey-800 bg-clip-text font-display text-xl font-bold text-transparent md:text-2xl md:font-normal">
                    <Balancer>
                      
                    </Balancer>
                  </h2>
                </div>
                <div>
                  <button
                    className="float-right rounded-full border border-black bg-green-200 p-1.5 px-4 text-sm text-black transition-all hover:bg-transparent hover:text-black"
                    onClick={() => {setEpisode("none"); setImage("none"); setEpisodeNumber("none");}}
                  >
                    {'<='} Back
                  </button>
                </div>
                
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>}
            
            <div className="my-10 grid w-full max-w-screen-xl md:grid-cols-3">
              {difficulty === 'Introduction' && episode === 'none' && introEpisodes.map(({ title, description, image }, index) => (
                <div key={title} onClick={() => {setEpisode(title); setImage(image); setEpisodeNumber(String(index + 1));}}>
                  <CardEpisode
                    key={title}
                    title={title}
                    description={description}
                    episodeNumber={index + 1}
                    image={image}
                  />
                </div>
              ))}

              {difficulty === 'Easy' && episode === 'none' && easyEpisodes.map(({ title, description, image }, index) => (
                <div key={title} onClick={() => {setEpisode(title); setImage(image); setEpisodeNumber(String(index + 1));}}>
                  <CardEpisode
                    key={title}
                    title={title}
                    description={description}
                    episodeNumber={index + 1}
                    image={image}
                  />
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </>
  );
}