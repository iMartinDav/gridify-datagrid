// components/Navigator.tsx
"use client"; // This makes the component a Client Component
import { useState } from "react";
// @ts-ignore // Add this comment to disable the TypeScript error
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navigator() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent px-4 py-5 shadow-xl rounded-xl">
      <div className="container flex flex-wrap items-center justify-between mx-auto rounded-lg">

        <button
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
              className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden rounded-lg"
          >
              <div className="flex items-center justify-between rounded-lg">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flow-root rounded-lg">
                <div className="-my-6 divide-y divide-gray-500/10 rounded-lg">
                  <div className="space-y-2 py-6 rounded-xl">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      Features
                    </a>

                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      Installation
                    </a>

                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      Usage
                    </a>

                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      License
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>

          <div className="hidden w-full md:block md:w-auto rounded-lg">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 rounded-lg">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Installation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Usage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navigator;
