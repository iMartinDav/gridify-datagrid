import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-transparent">
      <div className="flex flex-col items-center min-h-screen py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Supercharge your data app</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Gridify is the datagrid component that helps you build your app
            faster and ship sooner.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="/get-started">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Get started →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
