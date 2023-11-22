import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// Links
import links from "../../assets/links/dashlinks";

const DashboardBotNav = ({ role }) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, controlNavbar]);
  return (
    <nav
      className={`z-20 sm:hidden w-11/12 fixed left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 ${
        show ? "bottom-0" : "-bottom-full"
      } bg-primary h-16 rounded-3xl py-2 px-3 transition-all duration-700 ease-in-out`}
    >
      <ul className='side-opt flex flex-row justify-between items-center gap-3 mx-3'>
        {links[role].map((link) => {
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
