import React, { FC } from 'react';
import Link from 'next/link';

// ButtonProps interface for type checking props
interface ButtonProps {
  href: string;
  label: string;
}

// Reusable Button component
const Button: FC<ButtonProps> = ({ href, label }) => (
  <div className="rounded-md shadow">
    <Link href={href}>
      <button
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-6 lg:text-xl lg:px-8"
        aria-label={label} // Aria-label for accessibility
      >
        {label}
      </button>
    </Link>
  </div>
);

// Hero component
const Hero: FC = () => (
  <div className="bg-transparent">
    <div className="flex flex-col items-center min-h-screen py-8 md:py-16 lg:py-20">
      <div className="text-center">
        <h1 className="text-2xl tracking-tight font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <span className="block xl:inline">Supercharge your data app</span>
        </h1>
        <p className="mt-2 max-w-md mx-auto text-sm text-gray-300 sm:text-base md:mt-4 md:text-lg lg:text-xl md:max-w-3xl">
          Gridify is the datagrid component that helps you build your app faster and ship sooner.
        </p>
        <div className="mt-4 max-w-md mx-auto sm:flex sm:justify-center md:mt-6 lg:mt-8">
          <Button href="/get-started" label="Get started →" />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
