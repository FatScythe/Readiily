import { Link, Outlet, Navigate } from "react-router-dom";
const Support = () => {
  return (
    <div className='p-3'>
      <div className='bg-white rounded-lg p-5 shadow-lg'>
        <Navigate to='/dashboard/account/ticket/tickets' />
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
