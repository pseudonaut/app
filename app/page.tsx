import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/solidity-nirvana/easy",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://twitter.com/SolidityNirvana"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Follow us (@SolidityNirvana)
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Solidity Nirvana is the ultimate guide.</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            50+ episodes, 500+ puzzles, and 1,000+ scenarios
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/Solidity-Nirvana/Easy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Easy {' - '}</span> {' '}
              <span className="font-semibold">{nFormatter(stars)} Stars</span>
            </p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-gray-200 px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Medium (WIP)</span>
            </p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-gray-200 px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Hard (WIP)</span>
            </p>
          </a>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Track Performance",
    description:
      "Track your progress across all difficulties to achieve full comprehension",
    demo: <WebVitals />,
  },
  {
    title: "Worldclass Expertise",
    description:
      "From developers that have built live protocols and architected scalable financial systems",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/SNLogoClear.png" width={150} height={150} />
      </div>
    ),
  },
  {
    title: "Student Discounts",
    description:
      "Students at participating colleges receive major discounts, applications are open",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10 text-center">
        <span className="font-mono">MIT</span>
        <span className="font-mono">Stanford</span>
        <span className="font-mono">NYU</span>
        <span className="font-mono">ASU</span>
        <span className="font-mono">Cornell</span>
        <span className="font-mono">Princeton</span>
      </div>
    ),
  },
];
