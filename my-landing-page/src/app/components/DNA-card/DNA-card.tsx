// Import React and other necessary modules
// eslint-disable-next-line @typescript-eslint/no-unused-vars
'use client';
import { useMotionValue } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useMotionTemplate, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Define the component props interface
interface EvervaultCardProps {
  text?: string;
  className?: string;
}

// Define the EvervaultCard component
const EvervaultCard: React.FC<EvervaultCardProps> = ({ text, className }) => {
  // Define state variables and hooks
  const [randomString, setRandomString] = useState('');

  // useEffect hook to set randomString
  useEffect(() => {
    const str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Define the onMouseMove function
  const onMouseMove = ({ currentTarget, clientX, clientY }: any) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    setRandomString(generateRandomString(1500));
  };

  // Return the JSX for the component
  return (
    <div className={cn('p-0.5 bg-transparent aspect-square flex items-center justify-center w-64 h-96 relative', className)}>
      <div onMouseMove={onMouseMove} className="group/card rounded-3xl w-full h-full relative overflow-hidden bg-transparent flex items-center justify-center">
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="dark:text-white text-black z-20">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define the CardPattern component
interface CardPatternProps {
  mouseX: any;
  mouseY: any;
  randomString: string;
}

const CardPattern: React.FC<CardPatternProps> = ({ mouseX, mouseY, randomString }) => {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500" style={style} />
      <motion.div className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100" style={style}>
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">{randomString}</p>
      </motion.div>
    </div>
  );
};

// Define the generateRandomString function
const generateRandomString = (length: number) => {
  const characters = 'CCGGAGGCGGGGTGGAGGGGGTCGGGGCTCGCGGCGTCGCACTGAAACTTTTCGTCCAACTTCTGGGCTGTTCTCGCTTCGGGGCCTCCGCCCCACCTCCCCCAGCCCCGAGCGCCGCAGCGTGACTTTGAAAAGCAGGTTGAAGACCCGACAAGAGCGAAGCC';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// Export the EvervaultCard component as default
export default EvervaultCard;
