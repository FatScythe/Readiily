import "./dashboard.css";
import { NavLink, useNavigate } from "react-router-dom";
// Icons
import { ExitIcon } from "../../assets/icons";
// Links
import links from "../../assets/links/dashlinks";
// Redux
import { useDispatch } from "react-redux";
import { logoutAccount } from "../../features/auth/authSlice";

const DashboardSideNav = ({ isSideOpen, setIsSideOpen, role }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <nav
      className='hidden sm:block col-span-1 w-full h-full overflow-y-hidden z-30'
      onMouseEnter={() => setIsSideOpen(true)}
      onMouseLeave={() => setIsSideOpen(false)}
    >
      <main
        className={`flex flex-col justify-start gap-24 items-start px-2 py-4 transition-all duration-700 ease-in-out h-full ${
          isSideOpen
            ? "absolute top-0 left-0 right-[80%] px-4 bg-lightpink"
            : "w-full bg-white h-screen shadow-md"
        }`}
      >
        <ul className='side-opt flex flex-col justify-between items-center gap-5'>
          {links[role].map((link) => {
            return (
              <NavLink
                to={link.to}
                title={link.title}
                key={link.id}
                className='flex justify-start items-center gap-2 hover:bg-sky-200 p-2 rounded-full w-full'
              >
                {link.icon}
                {isSideOpen && (
                  <p className='hidden sm:block capitalize'>{link.name}</p>
                )}
              </NavLink>
            );
          })}
        </ul>

        <button
          onClick={() => {
            dispatch(logoutAccount());
            navigate("/");
          }}
          className='flex justify-start items-center gap-2 hover:bg-red-200 p-2 rounded-full'
        >
          <ExitIcon className='sm:w-8 sm:h-8 md:w-10 md:h-10' />
          {isSideOpen && <p className='hidden sm:block'>Logout</p>}
        </button>
      </main>
    </nav>
  );
};

export default DashboardSideNav;
