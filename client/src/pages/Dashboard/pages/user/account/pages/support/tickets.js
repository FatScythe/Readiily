import { Link } from "react-router-dom";

const MyTickets = () => {
  return (
    <div className='my-5 p-3'>
      <div className='my-3'>
        <select className='border border-gray-400 bg-gray-300 w-36 text-lg'>
          <option>All Entry</option>
          <option>Closed</option>
          <option>Pending</option>
        </select>
      </div>

      <div>
        <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 border-2 border-transparent border-b-gray-400'>
          <div className='col-span-4 text-gray-500 text-center font-semibold sm:text-lg overflow-hidden'>
            Subject
          </div>
          <div className='col-span-4 text-gray-500 text-center font-semibold sm:text-lg overflow-hidden'>
            TicketId
          </div>

          <div className='col-span-4 text-gray-500 text-center font-semibold sm:text-lg overflow-hidden'>
            Status
          </div>
        </div>
        <div className='overflow-scroll border-2 border-transparent border-b-gray-400'>
          <SingleTicket />
          <SingleTicket />
          <SingleTicket />
          <SingleTicket />
          <SingleTicket />
          <SingleTicket />
        </div>
      </div>
    </div>
  );
};

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

export default MyTickets;
