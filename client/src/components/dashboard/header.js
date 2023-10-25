import { Link } from "react-router-dom";
// Image
import logo from "../../assets/images/R-light.png";
// Icon
import { HamburgerIcon } from "../../assets/icons";
const DashboardHeader = ({ isSideOpen, setIsSideOpen }) => {
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

        <div className=''>
          <select className='border border-black'>
            <option>Select Brand</option>
            <option>Google</option>
            <option>Vimeo</option>
            <option>Spotify</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
