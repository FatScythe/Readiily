import "./dashboard.css";
import { NavLink } from "react-router-dom";
// Icons
import {
  CalendarIcon,
  ContactIcon,
  ExitIcon,
  HomeIcon,
  IdeaIcon,
} from "../../assets/icons";

const DashboardSideNav = ({ isSideOpen, setIsSideOpen }) => {
  return (
    <nav
      className='hidden sm:block col-span-1 w-full'
      onMouseEnter={() => setIsSideOpen(true)}
      onMouseLeave={() => setIsSideOpen(false)}
    >
      <main
        className={`flex flex-col justify-start gap-24 items-start px-2 py-4 transition-all duration-700 ease-in-out h-full ${
          isSideOpen
            ? "absolute top-0 left-0 right-[80%] px-4 bg-white/90"
            : "w-full"
        }`}
      >
        <ul className='side-opt flex flex-col justify-between items-center gap-5'>
          <NavLink
            to='/dashboard/home'
            className='flex justify-start items-center gap-2 hover:bg-sky-200 p-2 rounded-full'
          >
            <HomeIcon className='sm:w-8 sm:h-8 md:w-10 md:h-10' />
            {isSideOpen && <p className='hidden sm:block'>Home</p>}
          </NavLink>
          <NavLink
            to='/dashboard/calendar'
            className='flex justify-start items-center gap-2 hover:bg-sky-200 p-2 rounded-full'
          >
            <CalendarIcon className='sm:w-8 sm:h-8 md:w-10 md:h-10' />
            {isSideOpen && <p className='hidden sm:block'>Calendar</p>}
          </NavLink>

          <NavLink
            to='/dashboard/idea'
            className='flex justify-start items-center gap-2 hover:bg-sky-200 p-2 rounded-full'
          >
            <IdeaIcon className=' sm:w-8 sm:h-8 md:w-10 md:h-10' />
            {isSideOpen && <p className='hidden sm:block'>Ideate</p>}
          </NavLink>

          <NavLink
            to='/dashboard/account'
            className='flex justify-start items-center gap-2 hover:bg-sky-200 p-2 rounded-full'
          >
            <ContactIcon className='sm:w-8 sm:h-8 md:w-10 md:h-10' />
            {isSideOpen && <p className='hidden sm:block'>Account</p>}
          </NavLink>
        </ul>

        <button className='flex justify-start items-center gap-2 hover:bg-red-200 p-2 rounded-full'>
          <ExitIcon className='sm:w-8 sm:h-8 md:w-10 md:h-10' />
          {isSideOpen && <p className='hidden sm:block'>Logout</p>}
        </button>
      </main>
    </nav>
  );
};

export default DashboardSideNav;
