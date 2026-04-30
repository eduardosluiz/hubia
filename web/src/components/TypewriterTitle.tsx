'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTitleProps {
  text: string;
  className?: string;
}

const TypewriterTitle = ({ text, className = "" }: TypewriterTitleProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let currentText = '';
    let index = 0;
    
    const timer = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        setDisplayText(currentText);
        index++;
      } else {
        clearInterval(timer);
        setIsDone(true);
      }
    }, 50); // Velocidade da digitação

    return () => clearInterval(timer);
  }, [text]);

  return (
    <h1 className={`${className} flex items-center`}>
      {displayText}
      {!isDone && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-1 h-6 bg-neon-blue ml-1 inline-block"
        />
      )}
    </h1>
  );
};

export default TypewriterTitle;
