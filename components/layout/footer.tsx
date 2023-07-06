
import { Github, Twitter } from "@/components/shared/icons";

export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 py-5 text-center">
      <br />
      <br />
      {/* <a
        href="https://twitter.com/SolidityNirvana"
        target="_blank"
        rel="noreferrer"
        className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-orange-100 px-7 py-2 transition-colors hover:bg-orange-300"
      >
        <Twitter className="h-5 w-5 text-[#000]" />
        <p className="text-sm font-semibold text-[#000]">
          Follow us (@SolidityNirvana)
        </p>
      </a> */}
    <p className="text-gray-500">
        Your journey begins here.
      </p>
    </div>
  );
}
