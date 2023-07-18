import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
        className="absolute top-2 right-2 p-2 rounded-md bg-blue-200 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={handleCopyCode}
      >
        {copySuccess ? 'Copied!' : "Copy"}
      </button>
    </div>
  );
};

export default CodeBlock;