import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // Importing styles for both dark and light modes
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import { FiClipboard, FiCheck } from 'react-icons/fi'; // Icons for copy and copied status
import { useTheme } from 'next-themes';

interface CodeBlockProps {
  code: string;
  language: string; // Added prop for dark mode
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

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
        {copied ? <FiCheck color={theme==="dark" ? "white" : "black"} /> : <FiClipboard color={theme==="dark" ? "white" : "black"} />}
      </button>

      <SyntaxHighlighter 
        language={language} 
        style={theme==="dark" ? tomorrow : solarizedlight} // Conditional styling based on isDarkMode
        showLineNumbers
        customStyle={theme === "dark" ? {} : { backgroundColor: "#e5e7eb" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
