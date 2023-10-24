import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// Images
import logo from "../../assets/images/Rlogo.png";
import icon from "../../assets/images/R-light.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav className='flex justify-between items-center container relative py-3 md:pt-0'>
      <div className='flex w-full fixed top-1 md:static md:w-fit md:block justify-between items-center z-30'>
        <Link to='/' className='basis-1/3'>
          <img
            src={logo}
            className='w-30 h-20 hidden md:block'
            alt='readiily'
          />
          <img
            src={icon}
            className='w-10 sm:w-16 h-10 sm:h-14 md:hidden'
            alt='readiily'
          />
        </Link>

        <button
          className={`toggle-menu ${isNavOpen ? "open" : "close"}`}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <div className='line mb-1'></div>
          <div className='line'></div>
        </button>
      </div>

      <div
        onClick={() => setIsNavOpen(false)}
        className={`block pt-40 text-center md:pt-0 text-white sm:text-blue bg-black z-10 md:bg-transparent transition-all duration-700 fixed w-full ${
          isNavOpen ? "right-0" : "-right-full"
        } top-0 bottom-0 md:static md:flex justify-between items-center basis-4/6`}
      >
        <ul className='flex flex-col gap-10 md:flex-row items-center md:gap-4 cursor-pointer basis-1/2'>
          <a
            href='#features'
            className='text-xl sm:text-2xl md:text-base font-semibold hover:text-orange transition-colors duration-500'
          >
            Features
          </a>
          <a
            href='#cta'
            className='text-xl sm:text-2xl md:text-base font-semibold hover:text-orange transition-colors duration-500'
          >
            Pricing
          </a>
        </ul>

        <div className='flex flex-col pt-10 md:pt-0 gap-10 md:flex-row justify-end items-center md:gap-0 basis-1/2'>
          <Link
            to='/auth'
            className='block w-fit mx-auto md:w-full md:inline-block text-xl sm:text-2xl md:text-base font-semibold hover:text-orange transition-colors duration-500'
          >
            Log in
          </Link>
          <Link
            to='/auth?signup=true'
            className='font-semibold text-white text-xl sm:text-2xl md:text-sm bg-blue px-3 py-2 rounded-md md:w-full hover:scale-105 transition-all duration-500'
          >
            Get your first design!
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
