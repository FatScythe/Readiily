import { Link } from "react-router-dom";
// Hook
import useTitle from "../../../../../hooks/useTitle";

const Tickets = () => {
  useTitle("Tickets");
  return (
    <section>
      <main className='bg-white/80 sm:m-2 shadow-xl sm:p-2'>
        <header>
          <div className='text-blue font-bold text-lg sm:text-xl py-4 flex justify-between items-center'>
            <p>Tickets</p>
            <select className='border border-gray-400 bg-gray-300 w-36 text-lg'>
              <option>All Entry</option>
              <option>Closed</option>
              <option>Pending</option>
            </select>
          </div>
          <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 bg-blue/10 gap-2'>
            <div className='col-span-4 text-secondary text-center font-semibold sm:text-lg overflow-hidden'>
              Subject
            </div>
            <div className='col-span-4 text-secondary text-center font-semibold sm:text-lg overflow-hidden'>
              TicketId
            </div>

            <div className='col-span-4 text-secondary text-center font-semibold sm:text-lg overflow-hidden'>
              Status
            </div>
          </div>
        </header>

        <div className='h-[50vh] sm:h-[60vh] overflow-x-hidden overflow-y-scroll'>
          <SingleTicket />
          <SingleTicket />
          <SingleTicket />
          <SingleTicket />
          <SingleTicket />
          <SingleTicket />
          <SingleTicket />
          <SingleTicket />
          <SingleTicket />
          <SingleTicket />
        </div>
      </main>
    </section>
  );
};

export default Tickets;

const SingleTicket = () => {
  return (
    <Link
      to='/dashboard/ticket/12345'
      className='w-full grid grid-cols-12 my-2 text-xs gap-1 sm:text-base md:text-lg p-3'
    >
      <p className='col-span-4 gap-2 text-ellipsis text-center overflow-hidden'>
        Ayomi Brand
      </p>
      <p className='col-span-4 text-ellipsis text-center overflow-hidden text-blue'>
        #YZY-453-04752
      </p>
      <p className='col-span-4 text-ellipsis text-center overflow-hidden'>
        Closed
      </p>
    </Link>
  );
};
