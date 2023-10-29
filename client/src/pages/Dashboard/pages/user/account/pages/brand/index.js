import { Outlet, NavLink, Navigate } from "react-router-dom";

const Brand = () => {
  return (
    <div>
      <Navigate to='/dashboard/account/brand/create' />
      <header className='px-2 py-5 m-2 sm:m-4'>
        <ul className='flex justify-start items-center text-blue gap-5 sm:gap-8'>
          <NavLink to='/dashboard/account/brand/create' className='relative'>
            <li className='text-lg sm:text-2xl text-secondary'>Create Brand</li>
            <p className='absolute -bottom-2 w-0 h-1 bg-gradient-to-r from-red-500 to-green-500'></p>
          </NavLink>

          <NavLink to='/dashboard/account/brand/manage' className='relative'>
            <li className='text-lg sm:text-2xl text-secondary'>
              Manage Brands
            </li>
            <p className='absolute -bottom-2 w-0 h-1 bg-gradient-to-r from-red-500 to-green-500'></p>
          </NavLink>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Brand;
