"use client";

import { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;   // ms per character
  deletingSpeed?: number; // ms per character
  delayBetween?: number;  // delay before deleting
}

export default function Typewriter({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, words, wordIndex, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className="font-mono text-primary">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
