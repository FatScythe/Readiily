import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Hook
import useTitle from "../../../../../hooks/useTitle";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../../../../features/ticket/ticketSlice";
// Components
import Loader from "../../../../../components/loader";
import Error1 from "../../../../../components/error";

const Tickets = () => {
  useTitle("Tickets");
  const dispatch = useDispatch();
  const { loading, tickets } = useSelector((store) => store.ticket);
  const [option, setOption] = useState("all entry");

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (loading) {
    return (
      <div className='h-half sm:h-screen grid place-items-center'>
        <Loader className='w-20 h-20' />
      </div>
    );
  }
  if (!loading && !tickets) {
    return (
      <div className='h-half grid place-items-center'>
        <Error1 />
      </div>
    );
  }

  let allTickets = [];
  if (tickets) {
    allTickets = tickets.tickets.filter((ticket) => {
      if (!option.startsWith("all")) {
        return ticket.status === option;
      }
      return ticket;
    });
  }

  return (
    <section>
      <main className='bg-white/80 sm:m-2 shadow-xl sm:p-2'>
        <header>
          <div className='text-blue font-bold text-lg sm:text-xl py-4 flex justify-between items-center'>
            <p>Tickets</p>
            <select
              className='border border-gray-400 bg-gray-300 w-36 text-lg capitalize'
              value={option}
              onChange={(e) => {
                setOption(e.target.value);
              }}
            >
              <option>all entry</option>
              <option>closed</option>
              <option>pending</option>
            </select>
          </div>
          {allTickets.length >= 1 && (
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
          )}
        </header>

        {allTickets.length >= 1 ? (
          <div className='h-[50vh] sm:h-[60vh] overflow-x-hidden overflow-y-scroll'>
            {allTickets.map((ticket) => (
              <SingleTicket key={ticket._id} {...ticket} />
            ))}
          </div>
        ) : (
          <div className='my-10 text-center text-xl sm:text-3xl italic font-semibold'>
            <h1>You have no {option} tickets</h1>
          </div>
        )}
      </main>
    </section>
  );
};

export default Tickets;

const SingleTicket = ({ status, _id, ticketId, subject }) => {
  return (
    <Link
      to={"/dashboard/ticket/" + _id}
      className='w-full grid grid-cols-12 my-2 text-xs gap-1 sm:text-base md:text-lg p-3 capitalize'
    >
      <p className='col-span-4 gap-2 text-ellipsis text-center overflow-hidden'>
        {subject}
      </p>
      <p className='col-span-4 text-ellipsis text-center overflow-hidden text-blue'>
        {ticketId}
      </p>
      <p className='col-span-4 text-ellipsis text-center overflow-hidden'>
        {status}
      </p>
    </Link>
  );
};
