import React from 'react';
import Image from 'next/image';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="max-w-5xl w-full text-center sm:text-left">
          <Hero />
          <p className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit sm:static sm:w-auto sm:rounded-xl sm:border sm:bg-gray-200 sm:p-4 sm:dark:bg-zinc-800/30">
            Gridify Datagrid React database component à la Notion, Airtable, etc. Gridify Datagrid
            is a versatile React component for efficiently displaying tabular data in web
            applications. It offers a range of powerful features to help you manage and visualize
            your data effectively.
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://github.com/YOUR_USERNAME/gridify-datagrid"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/your-avatar.png"
                alt="Your Avatar"
                className="dark:invert"
                width={100}
                height={100}
                priority
              />
            </a>
          </div>
        </div>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/gridify-logo.svg"
            alt="Gridify Logo"
            width={180}
            height={180}
            priority
          />
        </div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="#features"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={'mb-3 text-2xl font-semibold'}>
              Features{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={'m-0 max-w-[30ch] text-sm opacity-50'}>
              Learn more about the features of Gridify Datagrid.
            </p>
          </a>

          <a
            href="#installation"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={'mb-3 text-2xl font-semibold'}>
              Installation{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={'m-0 max-w-[30ch] text-sm opacity-50'}>
              Learn how to install and set up Gridify Datagrid.
            </p>
          </a>

          <a
            href="#usage"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={'mb-3 text-2xl font-semibold'}>
              Usage{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={'m-0 max-w-[30ch] text-sm opacity-50'}>
              Explore how to use Gridify Datagrid in your projects.
            </p>
          </a>

          <a
            href="#license"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_self"
            rel="noopener noreferrer"
          >
            <h2 className={'mb-3 text-2xl font-semibold'}>
              License{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={'m-0 max-w-[30ch] text-sm opacity-50'}>
              Read about the licensing terms of Gridify Datagrid.
            </p>
          </a>
        </div>
        <Footer /> {/* Add the Footer component here */}
      </main>
    </div>
  );
}