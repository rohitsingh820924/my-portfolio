import { useState } from 'react';
import { FaRegCopy } from "react-icons/fa6";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

interface CopyIconProps {
    text: string;
  }

  const CopyIcon: React.FC<CopyIconProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <span onClick={handleCopyClick} className='cursor-pointer ml-2 inline-block'>
      {isCopied ? < IoCheckmarkDoneOutline /> : <FaRegCopy />}
    </span>
  );
};

export default CopyIcon;
