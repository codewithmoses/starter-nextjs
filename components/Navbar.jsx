"use client";
import { FaShoppingCart, FaChevronRight } from 'react-icons/fa'; // Import icons directly
import { FaFacebook } from 'react-icons/fa'; // Import icon directly
import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaBarsStaggered } from "react-icons/fa6";
import { FiHome } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import Button from './Button';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div className="relative flex items-center justify-between">
    <Link href="/" aria-label="Company" title="Company" className="inline-flex items-center font-noto-serif">
      <FiHome className="w-8 text-zinc-700 dark:text-white" />
      <span className="ml-2 text-xl font-bold tracking-wide text-zinc-800 dark:text-white  ">
        Company
      </span>
    </Link>

    <ul className="font-sono flex items-center hidden space-x-8 lg:flex">
      <li>
        <Link
          href="/"
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-zinc-700 dark:text-white transition-colors duration-200 hover:text-zinc-400 dark:hover:text-zinc-400"
        >
          Product
        </Link>
      </li>

      <li>
        <Link
          href="/"
          aria-label="Features"
          title="Features"
          className="font-medium tracking-wide text-zinc-700 dark:text-white transition-colors duration-200 hover:text-zinc-400 dark:hover:text-zinc-400"
        >
          Features
        </Link>
      </li>

      <li>
        <Link
          href="/"
          aria-label="Pricing"
          title="Pricing"
          className="font-medium tracking-wide text-zinc-700 dark:text-white transition-colors duration-200 hover:text-zinc-400 dark:hover:text-zinc-400"
        >
          Pricing
        </Link>
      </li>

      <li>
        <Link
          href="/"
          aria-label="About us"
          title="About us"
          className="font-medium tracking-wide text-zinc-700 dark:text-white transition-colors duration-200 hover:text-zinc-400 dark:hover:text-zinc-400"
        >
          About us
        </Link>
      </li>
    </ul>

    <ul className="font-sono flex items-center hidden space-x-8 lg:flex">
      <li>
        <Button type="icon-text" variant="primary" icon={FaShoppingCart}>
          Buy Now
        </Button>
        <ThemeToggle />
        <Button type="icon-only" variant="primary" icon={FaFacebook} onClick={() => console.log('Icon-only button clicked')} />
      </li>
    </ul>

    <div className="lg:hidden">
      <button
        aria-label="Open Menu"
        title="Open Menu"
        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 dark:hover:bg-deep-purple-900"
        onClick={() => setIsMenuOpen(true)}
      >
        <FaBarsStaggered className="w-5 text-lg text-zinc-600 dark:text-white" />
      </button>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full">
          <div className="p-5 bg-white dark:bg-black border rounded shadow-sm dark:shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <Link href="/" aria-label="Company" title="Company" className="inline-flex items-center font-noto-serif">
                  <FiHome className="w-8 text-zinc-700 dark:text-white" />
                  <span className="ml-2 text-xl font-bold tracking-wide text-zinc-800 dark:text-white uppercase">
                    Company
                  </span>
                </Link>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-700 focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <AiOutlineClose className="w-5 text-lg text-zinc-600 dark:text-white" />
                </button>
              </div>
            </div>
            <nav>
              <ul className="space-y-4 font-semibold text-lg">
                <li>
                  <Link
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className="font-medium tracking-wide text-zinc-700 dark:text-white transition-colors duration-200 hover:text-zinc-400 dark:hover:text-zinc-400"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    aria-label="Features"
                    title="Features"
                    className="font-medium tracking-wide text-zinc-700 dark:text-white transition-colors duration-200 hover:text-zinc-400 dark:hover:text-zinc-400"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    aria-label="Pricing"
                    title="Pricing"
                    className="font-medium tracking-wide text-zinc-700 dark:text-white transition-colors duration-200 hover:text-zinc-400 dark:hover:text-zinc-400"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    aria-label="About us"
                    title="About us"
                    className="font-medium tracking-wide text-zinc-700 dark:text-white transition-colors duration-200 hover:text-zinc-400 dark:hover:text-zinc-400"
                  >
                    About us
                  </Link>
                </li>
                <li>
                 
                  <Button type="icon-only" variant="primary" icon={FaFacebook} onClick={() => console.log('Icon-only button clicked')} />
                  <Button type="icon-only" variant="primary" icon={FaFacebook} onClick={() => console.log('Icon-only button clicked')} />
                  <Button type="icon-only" variant="primary" icon={FaFacebook} onClick={() => console.log('Icon-only button clicked')} /> <Button type="icon-only" variant="primary" icon={FaFacebook} onClick={() => console.log('Icon-only button clicked')} />
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  </div>
</div>


  );
};
