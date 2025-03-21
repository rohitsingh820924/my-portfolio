import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useState } from 'react';
import { FiClipboard, FiCheck } from 'react-icons/fi';

interface CodeBlockProps {
  code: string;
  language: string; // Added prop for dark mode
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
  };

  return (
    <div className='relative'>
      <button
        onClick={handleCopy}
        aria-label="Copy code"
        className='absolute top-3 right-3'
      >
        {copied ? <FiCheck color={"white"} /> : <FiClipboard color={"white"} />}
      </button>

      <SyntaxHighlighter 
        language={language} 
        style={ tomorrow } 
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
