import { Link, useLocation } from "react-router-dom";
// Image
import logo from "../../assets/images/R-light.png";
// Icon
import { HamburgerIcon, ExitIcon, BellIcon } from "../../assets/icons";
const DashboardHeader = ({ isSideOpen, setIsSideOpen, role }) => {
  return (
    <header className='flex justify-between items-center'>
      <button
        className='hidden sm:block basis-auto p-4'
        onClick={() => setIsSideOpen(!isSideOpen)}
      >
        <HamburgerIcon
          className={`sm:w-6 sm:h-6 md:w-10 md:h-10 transition-all ease-in-out duration-700 ${
            isSideOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      <nav className='flex justify-between items-center basis-full sm:basis-11/12 p-2 sm:border-2 shadow-md'>
        <Link to='/dashboard'>
          <img src={logo} alt='Readiily' className='w-8 h-10' />
        </Link>

        <div className='flex justify-between items-center'>
          {role === "user" && <UserHeader />}
          {role === "designer" && <DesignerHeader />}
          {role === "admin" && <AdminHeader />}
          <button className='sm:hidden mx-4'>
            <ExitIcon className='w-6 h-6' />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;

const UserHeader = () => {
  const location = useLocation();
  const currentLocation = location.pathname.substring(11);

  if (currentLocation === "calendar") {
    return (
      <div className='font-semibold text-blue sm:font-bold sm:text-2xl md:text-3xl mx-2'>
        Set your Calendar
      </div>
    );
  }
  if (currentLocation === "idea") {
    return <div className='mx-2'></div>;
  }
  if (currentLocation.startsWith("account")) {
    return (
      <div className='text-blue font-semibold sm:text-xl mx-2'>My Account</div>
    );
  }
  return (
    <select className='border border-black'>
      <option>Select Brand</option>
      <option>Google</option>
      <option>Vimeo</option>
      <option>Spotify</option>
    </select>
  );
};

const DesignerHeader = () => {
  return (
    <div className='flex justify-between items-center gap-1 sm:gap-3'>
      <h3 className='text-blue text-lg font-semibold sm:text-xl md:text-2xl'>
        Hello Ayo
      </h3>
      <button>
        <BellIcon className='w-6 h-6 sm:h-8 sm:w-8' />
      </button>
    </div>
  );
};

const AdminHeader = () => {
  return (
    <div className='flex justify-between items-center gap-1 sm:gap-3'>
      <h3 className='text-blue text-lg font-semibold sm:text-xl md:text-2xl'>
        Hello Admin
      </h3>
      <button>
        <BellIcon className='w-6 h-6 sm:h-8 sm:w-8' />
      </button>
    </div>
  );
};
