import { Link, useLocation } from "react-router-dom";
// Image
import logo from "../../assets/images/R-light.png";
// Icon
import { HamburgerIcon, ExitIcon, BellIcon } from "../../assets/icons";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectBrand } from "../../features/brand/brandSlice";

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
        <Link to='/'>
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
  const { currentBrand, brands, loading } = useSelector((store) => store.brand);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentLocation = location.pathname.substring(11);

  const handleSelect = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    dispatch(
      selectBrand({
        name: e.target.value,
        id: e.target.options[selectedIndex].getAttribute("data-key"),
      })
    );
  };

  if (currentLocation === "calendar") {
    return (
      <div className='font-semibold text-blue sm:font-bold sm:text-2xl md:text-3xl mx-2'>
        Set your Calendar
      </div>
    );
  }
  if (currentLocation === "idea") {
    return (
      <div className='font-semibold text-left sm:font-bold sm:text-2xl md:text-3xl mx-2'>
        Content Inspiration
      </div>
    );
  }
  if (currentLocation.startsWith("account")) {
    return (
      <div className='text-blue font-semibold sm:text-xl mx-2'>My Account</div>
    );
  }
  return (
    <>
      {loading ? (
        <div className='animate-pulse duration-700'>...</div>
      ) : brands && brands?.brands.length > 0 ? (
        <>
          <select
            className='border border-black'
            onChange={handleSelect}
            value={currentBrand.name}
          >
            {brands.brands.map((brand) => {
              return (
                <option key={brand._id} data-key={brand._id}>
                  {brand.name}
                </option>
              );
            })}
          </select>
        </>
      ) : (
        <Link
          to='/dashboard/account/brand/create'
          className='bg-blue rounded-md px-3 py-2 text-white'
        >
          Create Brand
        </Link>
      )}
    </>
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
