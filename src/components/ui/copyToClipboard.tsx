import React, { useState } from "react";
import { Copy, Check, LucideIcon } from "lucide-react";
import { Button } from "./button";

interface CopyToClipboardProps {
  textToCopy: string;
  Icon?: LucideIcon;
  className?: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  textToCopy,
  Icon = Copy,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy text.");
      });
  };

  const DisplayIcon = copied ? Check : Icon;

  const feedbackClasses = copied
    ? "bg-green-100 border-green-500 text-green-700"
    : "bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200";

  return (
    <Button
      onClick={handleCopy}
      aria-label={copied ? "Text copied" : "Copy to clipboard"}
      variant="outline"
      size="lg"
      className={`group border-primary/90 bg-background/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm 
              sm:text-base font-medium hover:bg-background/80 hover:border-primary/50 transition-all duration-300 
              w-fit sm:w-auto${feedbackClasses} ${className}`}
    >
      <DisplayIcon className="w-5 h-5 flex-shrink-0" />

      <span className="font-medium text-sm truncate">
        {copied ? "Copied!" : textToCopy}
      </span>
    </Button>
  );
};

export default CopyToClipboard;
