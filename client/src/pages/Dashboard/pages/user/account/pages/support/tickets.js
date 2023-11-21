import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../../../../../../features/ticket/ticketSlice";
// Component
import Loader from "../../../../../../../components/loader";
import Error1 from "../../../../../../../components/error";

const MyTickets = () => {
  const dispatch = useDispatch();
  const { loading, tickets } = useSelector((store) => store.ticket);
  const [option, setOption] = useState("all entry");

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (loading) {
    return (
      <div className='h-half grid place-items-center'>
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

  let myTickets = [];

  if (tickets) {
    myTickets = tickets.tickets.filter((ticket) => {
      if (!option.startsWith("all")) {
        return ticket.status === option;
      }
      return ticket;
    });
  }

  return (
    <div className='my-5 p-3'>
      <div className='my-3'>
        <select
          className='capitalize border border-gray-400 bg-gray-300 w-36 text-lg'
          value={option}
          onChange={(e) => {
            setOption(e.target.value);
          }}
        >
          <option>all entry</option>
          <option>open</option>
          <option>closed</option>
          <option>pending</option>
        </select>
      </div>

      {myTickets.length >= 1 ? (
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
          <div className='overflow-x-hidden overflow-y-scroll border-2 border-transparent border-b-gray-400'>
            {myTickets.map((ticket) => (
              <SingleTicket key={ticket._id} {...ticket} />
            ))}
          </div>
        </div>
      ) : (
        <div className='my-10 text-center text-xl sm:text-3xl italic font-semibold'>
          <h1>You have no {option} tickets</h1>
        </div>
      )}
    </div>
  );
};

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

export default MyTickets;
