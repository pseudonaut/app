import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs, dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CopyIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5V3a2 2 0 012-2h2a2 2 0 012 2v2"
      />
    </svg>
  );
  

const CodeBlock = ({ code }: {code: string}) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="relative rounded-md shadow-sm text-sm">
      <SyntaxHighlighter language="plaintext" style={dark}>
        {code}
      </SyntaxHighlighter>
      <button
        type="button"
        className="absolute top-2 right-2 p-2 rounded-md bg-green-300 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
        onClick={handleCopyCode}
      >
        {/* {copySuccess ? 'Copied!' : <CopyIcon />} */}
        {copySuccess ? 'Copied!' : "Copy"}
      </button>
    </div>
  );
};

export default CodeBlock;