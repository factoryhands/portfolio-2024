import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Popover } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import './App.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popover className="relative bg-white">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link to="/" className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    Jennifer Spriggs
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <span>
                      Menu
                    </span>
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    About
                  </Link>
                  <Link to="/contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Contact
                  </Link>
                </Popover.Group>
              </div>
            </div>
            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link
                      to="/about"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    );
}
export default Navbar; 