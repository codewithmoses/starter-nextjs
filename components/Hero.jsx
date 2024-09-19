import { MdPlace } from 'react-icons/md';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'; // Import the required icons
import { PiPhoneCallFill } from "react-icons/pi";
import { HiMiniRocketLaunch } from "react-icons/hi2";

import Button from './Button';


export const Hero = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
        <div className="flex items-center justify-center  w-16 h-16 mb-4 rounded-full bg-indigo-500">
          <MdPlace className="text-teal-900 w-7 h-7" />
        </div>
        <div className="max-w-xl mb-6">
        <div>
          <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Let us handle
            <br className="hidden md:block" />
            your next{' '}
            <span className="inline-block text-deep-purple-accent-400">
              destination
            </span>
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="flex items-center mt-1 space-x-3">
        <Button type="icon-only" variant="primary" icon={FaTwitter} onClick={() => console.log('Icon-only button clicked')} />
        <Button type="icon-only" variant="primary" icon={FaInstagram} onClick={() => console.log('Icon-only button clicked')} />
        <Button type="icon-only" variant="primary" icon={FaFacebook} onClick={() => console.log('Icon-only button clicked')} />
      </div>
      <div class="flex items-center gap-4 sm:justify-center">
        <Button type="icon-text" variant="primary" icon={HiMiniRocketLaunch}>
          Get Started
        </Button>
        <Button type="icon-text" variant="primary" icon={PiPhoneCallFill}>
         Contact Me
        </Button>
        </div>
        </div>
    
        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
          <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
            <div className="h-full p-5 border border-l-0 rounded-r">
              <h6 className="mb-2 font-semibold leading-5">
                I'll be sure to note that in my log
              </h6>
              <p className="text-sm text-gray-900">
                Lookout flogging bilge rat main sheet bilge water nipper fluke to go on account heave down.
              </p>
            </div>
          </div>
          <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
            <div className="h-full p-5 border border-l-0 rounded-r">
              <h6 className="mb-2 font-semibold leading-5">
                A business big enough that it could be listed
              </h6>
              <p className="text-sm text-gray-900">
                Those options are already baked in with this model shoot me an email clear.
              </p>
            </div>
          </div>
        </div>
       
      </div>
      <div className="flex items-center justify-center -mx-4 lg:pl-8">
        <div className="flex flex-col items-end px-3">
          <img
            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img
            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="px-3">
          <img
            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
            src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  );
};
