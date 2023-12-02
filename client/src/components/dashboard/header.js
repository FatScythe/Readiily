import { Link, useLocation, useNavigate } from "react-router-dom";
// Image
import logo from "../../assets/images/R-light.png";
// Icon
import { HamburgerIcon, ExitIcon, BellIcon } from "../../assets/icons";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getBrands, selectBrand } from "../../features/brand/brandSlice";
import { logoutAccount } from "../../features/auth/authSlice";
import Loader from "../loader";
import { useEffect } from "react";

const DashboardHeader = ({ isSideOpen, setIsSideOpen, role }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <header className='flex justify-between items-center bg-white'>
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

      <nav className='flex justify-between items-center basis-full sm:basis-11/12 p-2 shadow-md'>
        <Link to='/'>
          <img src={logo} alt='Readiily' className='w-8 h-10' />
        </Link>

        <div className='flex justify-between items-center'>
          {role === "user" && <UserHeader />}
          {role === "designer" && <DesignerHeader />}
          {role === "admin" && <AdminHeader />}
          <button
            className='sm:hidden mx-4'
            onClick={() => {
              dispatch(logoutAccount());
              navigate("/");
            }}
          >
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

  return <UserHeaderHome />;
};

const UserHeaderHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const { currentBrand, brands, loading } = useSelector((store) => store.brand);
  const handleSelect = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    dispatch(
      selectBrand({
        name: e.target.value,
        id: e.target.options[selectedIndex].getAttribute("data-key"),
      })
    );
  };

  if (loading) {
    return <Loader className='w-6 h-6' />;
  }
  if (!loading && !brands) {
    return <div>Error...</div>;
  }
  if (brands && brands.nb < 1) {
    return (
      <Link
        to='/dashboard/account/brand/create'
        className='bg-blue rounded-md px-3 py-2 text-white'
      >
        Create Brand
      </Link>
    );
  }

  return (
    <select
      className='border border-black'
      onChange={handleSelect}
      value={currentBrand ? currentBrand.name : "Select a brand"}
    >
      {brands.brands.map((brand) => {
        return (
          <option key={brand._id} data-key={brand._id}>
            {brand.name || "Select a brand"}
          </option>
        );
      })}
    </select>
  );
};
const DesignerHeader = () => {
  const { account } = useSelector((store) => store.auth);
  return (
    <div className='flex justify-between items-center gap-1 sm:gap-3'>
      <h3 className='text-blue text-lg font-semibold sm:text-xl md:text-2xl'>
        Hello {account ? account?.name.split(" ")[0] : "Designer"}
      </h3>
      <button>
        <BellIcon className='w-6 h-6 sm:h-8 sm:w-8' />
      </button>
    </div>
  );
};

const AdminHeader = () => {
  const { account } = useSelector((store) => store.auth);
  return (
    <div className='flex justify-between items-center gap-1 sm:gap-3'>
      <h3 className='text-blue text-lg font-semibold sm:text-xl md:text-2xl'>
        Hello {account ? account?.name.split(" ")[0] : "Admin"}
      </h3>
      <button>
        <BellIcon className='w-6 h-6 sm:h-8 sm:w-8' />
      </button>
    </div>
  );
};
