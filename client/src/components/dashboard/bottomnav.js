import { NavLink } from "react-router-dom";
// Links
import links from "../../assets/links/dashlinks";

const DashboardBotNav = () => {
  return (
    <nav className='z-20 sm:hidden w-11/12 fixed left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 bottom-0 bg-primary h-16 rounded-3xl py-2 px-3'>
      <ul className='side-opt flex flex-row justify-between items-center gap-3 mx-3'>
        {links.user.map((link) => {
          return (
            <NavLink
              key={link.id}
              to={link.to}
              className='flex justify-start items-center gap-2 hover:bg-sky-200 p-2 rounded-full'
              title={link.title}
            >
              {link.icon}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default DashboardBotNav;
