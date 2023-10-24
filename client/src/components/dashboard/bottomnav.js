import { NavLink } from "react-router-dom";
// Icons
import {
  CalendarIcon,
  ContactIcon,
  HomeIcon,
  IdeaIcon,
} from "../../assets/icons";

const DashboardBotNav = () => {
  return (
    <nav className='sm:hidden w-11/12 fixed left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 bottom-2 bg-primary h-16 rounded-3xl py-2 px-3'>
      <ul className='side-opt flex flex-row justify-between items-center gap-3 mx-3'>
        <NavLink
          to='/dashboard/home'
          className='flex justify-start items-center gap-2 hover:bg-sky-200 p-2 rounded-full'
          title='Home'
        >
          <HomeIcon className='w-6 h-6' />
        </NavLink>
        <NavLink
          to='/dashboard/calendar'
          className='flex justify-start items-center gap-2 hover:bg-sky-200 p-2 rounded-full'
          title='Calendar'
        >
          <CalendarIcon className='w-6 h-6' />
        </NavLink>

        <NavLink
          to='/dashboard/idea'
          className='flex justify-start items-center gap-2 hover:bg-sky-200 p-2 rounded-full'
          title='Ideate'
        >
          <IdeaIcon className=' w-6 h-6' />
        </NavLink>

        <NavLink
          to='/dashboard/account'
          className='flex justify-start items-center gap-2 hover:bg-sky-200 p-2 rounded-full'
          title='Account'
        >
          <ContactIcon className='w-6 h-6' />
        </NavLink>
      </ul>
    </nav>
  );
};

export default DashboardBotNav;
