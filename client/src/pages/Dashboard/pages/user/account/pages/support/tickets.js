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

      <div className=''>
        <div className='flex justify-between items-center my-2 w-full text-gray-500 font-semibold text-lg p-5 border-2 border-transparent border-b-gray-400'>
          <p>Subject</p>
          <p>TicketId</p>
          <p>Status</p>
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
    <div className='w-full'>
      <main className='flex justify-between items-center my-2 text-xs gap-1 sm:text-base md:text-lg p-3'>
        <p className='flex flex-col justify-between items-start gap-2 w-16 text-ellipsis sm:w-fit overflow-hidden'>
          Ayomi Brand
        </p>
        <p className='w-20 text-ellipsis sm:w-fit overflow-hidden text-blue'>
          #YZY-453-04752
        </p>
        <p className='w-16 text-ellipsis sm:w-fit overflow-hidden'>Closed</p>
      </main>
    </div>
  );
};

export default MyTickets;
