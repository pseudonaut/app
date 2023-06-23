export default function Footer() {
  return (
    <div className="absolute w-full border-t border-gray-200 py-5 text-center">
      <p className="text-gray-500">
        Your journey begins here @ {" "}
        <a
          className="font-medium text-green-500 underline transition-colors"
          href="https://github.com/Solidity-Nirvana"
          target="_blank"
          rel="noopener noreferrer"
        >
          SolidityNirvana
        </a>
      </p>
    </div>
  );
}
