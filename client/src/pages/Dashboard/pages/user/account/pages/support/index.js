import { Link, Outlet } from "react-router-dom";
import useTitle from "../../../../../../../hooks/useTitle";
const Support = () => {
  useTitle("My Tickets");
  return (
    <div className='p-3'>
      <div className='bg-white rounded-lg p-5 shadow-lg'>
        <header className='flex justify-start items-center gap-10'>
          <Link
            to='/dashboard/account/ticket/tickets'
            className='text-secondary font-semibold'
          >
            Tickets
          </Link>
          <Link
            to='/dashboard/account/ticket/new'
            className='bg-secondary px-3 py-2 text-white font-semibold'
          >
            Open Ticket
          </Link>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Support;
