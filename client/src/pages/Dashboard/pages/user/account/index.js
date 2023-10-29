import "./account.css";
import { NavLink, Outlet, Navigate } from "react-router-dom";
// Hook
import useTitle from "../../../../../hooks/useTitle";
const Account = () => {
  useTitle("My Account");
  return (
    <section id='account'>
      <Navigate to='/dashboard/account/brand' />
      <nav className='shadow-2xl bg-lightpink px-2 pt-6 pb-2 m-2 sm:m-4'>
        <ul className='flex justify-start items-center text-blue gap-5 sm:gap-8'>
          <NavLink to='/dashboard/account/brand' className='relative'>
            <li className='text-xl sm:text-2xl'>Brands</li>
            <p className='absolute -bottom-2 w-0 h-1 bg-gradient-to-r from-red-500 to-green-500'></p>
          </NavLink>

          <NavLink to='/dashboard/account/wallet' className='relative'>
            <li className='text-xl sm:text-2xl'>Wallet</li>
            <p className='absolute -bottom-2 w-0 h-1 bg-gradient-to-r from-red-500 to-green-500'></p>
          </NavLink>

          <NavLink to='/dashboard/account/ticket' className='relative'>
            <li className='text-xl sm:text-2xl'>Support</li>
            <p className='absolute -bottom-2 w-0 h-1 bg-gradient-to-r from-red-500 to-green-500'></p>
          </NavLink>
        </ul>
      </nav>

      <main className='mb-40'>
        <Outlet />
      </main>
    </section>
  );
};

export default Account;
