"use client";
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'; // Import the required icons
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md'; // Import other necessary icons
import Button from './Button';

export const Footer = () => {
  return (
<div className="font-sono px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="sm:col-span-2">
      <a
        href="/"
        aria-label="Go home"
        title="Company"
        className="inline-flex items-center transition-colors duration-300 text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300"
      >
        <div className="w-8 text-zinc-400 dark:text-zinc-200">
          {/* Replace SVG with a placeholder or any custom icon */}
          <FaFacebook className="text-xl" />
        </div>
        <span className="font-noto-serif ml-2 text-xl font-bold tracking-wide text-zinc-800 dark:text-zinc-200 uppercase">
          Company
        </span>
      </a>
      <div className="mt-6 lg:max-w-sm">
        <p className="text-sm text-zinc-800 dark:text-zinc-300">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <p className="mt-4 text-sm text-zinc-800 dark:text-zinc-300">
          Eaque ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div>
    <div className="space-y-2 text-sm">
      <p className="text-base font-bold tracking-wide text-zinc-900 dark:text-zinc-100 font-noto-serif">
        Contacts
      </p>
      <div className="flex items-center">
        <Button type="icon-only" variant="primary" icon={MdPhone} onClick={() => console.log('Icon-only button clicked')} />
        <a
          href="tel:850-123-5021"
          aria-label="Our phone"
          title="Our phone"
          className="transition-colors duration-300 text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          850-123-5021
        </a>
      </div>
      <div className="flex items-center">
        <Button type="icon-only" variant="primary" icon={MdEmail} onClick={() => console.log('Icon-only button clicked')} />
        <a
          href="mailto:info@lorem.mail"
          aria-label="Our email"
          title="Our email"
          className="transition-colors duration-300 text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          info@lorem.mail
        </a>
      </div>
      <div className="flex items-center">
        <Button type="icon-only" variant="primary" icon={MdLocationOn} onClick={() => console.log('Icon-only button clicked')} />
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Our address"
          title="Our address"
          className="transition-colors duration-300 text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          312 Lovely Street, NY
        </a>
      </div>
    </div>
    <div>
      <span className="text-base font-bold tracking-wide text-zinc-900 dark:text-zinc-100 font-noto-serif">
        Social
      </span>
      <div className="flex items-center mt-1 space-x-3">
        <Button type="icon-only" variant="primary" icon={FaTwitter} onClick={() => console.log('Icon-only button clicked')} />
        <Button type="icon-only" variant="primary" icon={FaInstagram} onClick={() => console.log('Icon-only button clicked')} />
        <Button type="icon-only" variant="primary" icon={FaFacebook} onClick={() => console.log('Icon-only button clicked')} />
      </div>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
        Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
        spare ribs salami.
      </p>
    </div>
  </div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row border-zinc-300 dark:border-zinc-700">
    <p className="text-sm text-zinc-600 dark:text-zinc-400">
      © Copyright 2020 Lorem Inc. All rights reserved.
    </p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
      <li>
        <a
          href="/"
          className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          F.A.Q
        </a>
      </li>
      <li>
        <a
          href="/"
          className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          Privacy Policy
        </a>
      </li>
      <li>
        <a
          href="/"
          className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          Terms &amp; Conditions
        </a>
      </li>
    </ul>
  </div>
</div>

  );
};
