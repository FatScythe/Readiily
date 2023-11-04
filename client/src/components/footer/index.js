import { useState } from "react";
// Image
import logo from "../../assets/images/R-White.png";
// Icons
import {
  ChevronUp,
  FbIcon,
  InstaIcon,
  LInIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "../../assets/icons";

const Footer = () => {
  return (
    <footer className='bg-blue text-white'>
      <main className='container px-5 md:px-20 pt-5 pb-14 flex flex-col items-start gap-3 md:gap-5 md:flex-row justify-between'>
        <div className='contact flex flex-col justify-between items-start gap-5 mb-5 md:mb-0'>
          <img src={logo} alt='Readiily' className='w-30 h-20' />
          <div className='flex justify-between items-center gap-2'>
            <span>
              <MailIcon className='w-8 h-8' />
            </span>
            <span>design@readiily.com</span>
          </div>
          <div className='flex justify-between items-center gap-2'>
            <span>
              <PhoneIcon className='w-8 h-8' />
            </span>
            <span>+234 706 6151 673</span>
          </div>
          <div className='flex justify-between items-center gap-4'>
            <FbIcon className='w-6 h-6 sm:w-8 sm:h-8' />
            <InstaIcon className='w-6 h-6 sm:w-8 sm:h-8' />
            <LInIcon className='w-6 h-6 sm:w-8 sm:h-8' />
            <TwitterIcon className='w-6 h-6 sm:w-8 sm:h-8' />
          </div>
        </div>

        <Accordian1 />
        <Accordian2 />
        <Accordian3 />
      </main>
      <aside className='border-0 border-t p-2 border-t-white/60 '>
        <h2 className='text-white text-center'>
          © All right reserved - Readiily 2023
        </h2>
      </aside>
    </footer>
  );
};

export default Footer;

const Accordian1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full md:w-fit md:mt-14 hover:border-y sm:hover:border-y-0 border-x-0 border-y-gray-400 cursor-pointer'>
      <h1
        className='text-lg md:text-xl font-semibold mb-2 flex w-full md:w-fit md:block justify-between items-center'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Company</span>
        <span className='md:hidden'>
          <ChevronUp
            className={`w-6 h-6 stroke-white stroke-2 transition-all duration-300 ${
              isOpen ? "" : "rotate-180"
            }`}
          />
        </span>
      </h1>
      <ul
        className={`flex overflow-hidden ${
          isOpen ? "max-h-32" : "max-h-0 md:max-h-32"
        } flex-col justify-between items-start gap-3 transition-all duration-700`}
      >
        <li className='block'>About Us</li>
        <li>Pricing</li>
        <li>Product Roadmap</li>
      </ul>
    </div>
  );
};

const Accordian2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full md:w-fit md:mt-14 hover:border-y sm:hover:border-y-0 border-x-0 border-y-gray-400 cursor-pointer'>
      <h1
        className='text-lg md:text-xl font-semibold mb-2 flex w-full md:w-fit md:block justify-between items-center'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Account</span>
        <span className='md:hidden'>
          <ChevronUp
            className={`w-6 h-6 stroke-white stroke-2 transition-all duration-300 ${
              isOpen ? "" : "rotate-180"
            }`}
          />
        </span>
      </h1>
      <ul
        className={`flex overflow-hidden ${
          isOpen ? "max-h-32" : "max-h-0 md:max-h-32"
        } flex-col justify-between items-start gap-3 transition-all duration-700`}
      >
        <li>Log In</li>
        <li>Sign up</li>
        <li>Password Reset</li>
      </ul>
    </div>
  );
};

const Accordian3 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full md:w-fit md:mt-14 hover:border-y sm:hover:border-y-0 border-x-0 border-y-gray-400 cursor-pointer'>
      <h1
        className='text-lg md:text-xl font-semibold mb-2 flex w-full md:w-fit md:block justify-between items-center'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Legal</span>
        <span className='md:hidden'>
          <ChevronUp
            className={`w-6 h-6 stroke-white stroke-2 transition-all duration-300 ${
              isOpen ? "" : "rotate-180"
            }`}
          />
        </span>
      </h1>
      <ul
        className={`flex overflow-hidden ${
          isOpen ? "max-h-32" : "max-h-0 md:max-h-32"
        } flex-col justify-between items-start gap-3 transition-all duration-700`}
      >
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li></li>
      </ul>
    </div>
  );
};
