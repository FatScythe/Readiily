import { useState } from "react";
import { useParams } from "react-router-dom";
// Icon
import { ChevronUp, TicketIcon } from "../../../../assets/icons";
// Hook
import useTitle from "../../../../hooks/useTitle";
import useSWR from "swr";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { replyTicket } from "../../../../features/ticket/ticketSlice";

const SingleTicket = () => {
  useTitle("Ticket");
  const { account: currentAccount } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [form, setForm] = useState({ status: "pending", reply: "" });
  const [openReply, setOpenReply] = useState(false);
  const { id } = useParams();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/v1/ticket/" + id, fetcher);

  if ((data && data.msg) || error) {
    return <div>Failed to load</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { subject, ticketId, message, status, account, createdAt, response } =
    data;

  return (
    <section className='px-2 py-4'>
      <header className='flex flex-col justify-start items-start gap-6 my-6'>
        <h1 className='text-xl sm:text-2xl md:text-3xl'>
          <span>{subject}</span>
          <span className='text-slate-400'> {ticketId}</span>
        </h1>
        <p
          className={`${status === "open" && "bg-green-700"} 
          ${status === "closed" && "bg-gray-600"} 
          ${
            status === "pending" && "bg-yellow-700"
          } text-white px-3 py-2 text-lg sm:text-xl rounded-3xl w-fit flex justify-between items-center gap-2`}
        >
          <span>
            <TicketIcon className='w-6 h-6' />
          </span>
          <span className='capitalize'>{status}</span>
        </p>
      </header>
      <main>
        <div className='border-2 py-2 rounded-md my-6 px-1'>
          <h2 className='font-semibold flex flex-col sm:flex-row justify-start items-start sm:items-center gap-1'>
            <span className='text-xl capitalize'>{account.name} </span>
            <span className='text-black/60'>
              Opened ticket on {new Date(createdAt).toDateString()}
            </span>
          </h2>
          <p className='my-2 text-lg'>{message}</p>
        </div>

        {status !== "closed" && (
          <form
            className='flex flex-col justify-between items-start gap-4'
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(replyTicket({ ...form, ticketId: id }));
            }}
          >
            <button
              type='button'
              className='font-semibold text-lg flex justify-start items-center gap-2 cursor-pointer'
              onClick={() => setOpenReply(!openReply)}
            >
              <span>Reply</span>
              <ChevronUp
                className={`w-6 h-6 ${openReply ? "" : "rotate-180"}`}
              />
            </button>
            {openReply && (
              <>
                {(account._id === currentAccount.userId ||
                  currentAccount.role === "admin") && (
                  <select
                    className='border border-gray-400 bg-gray-300 w-36 text-lg block'
                    value={form.status}
                    onChange={(e) =>
                      setForm({ ...form, status: e.target.value })
                    }
                  >
                    <option>Pending</option>
                    <option>Closed</option>
                  </select>
                )}
                <textarea
                  className='block w-full border border-black p-2 text-lg'
                  name='response'
                  id='response'
                  cols='30'
                  rows='10'
                  value={form.reply}
                  onChange={(e) => setForm({ ...form, reply: e.target.value })}
                ></textarea>
                <div className='flex justify-end items-center w-full'>
                  <button
                    type='submit'
                    className='bg-blue px-3 py-1 rounded-md text-lg text-white'
                  >
                    Reply
                  </button>
                </div>
              </>
            )}
          </form>
        )}

        <h2 className='text-xl font-semibold italic py-3'>Comments:</h2>
        {response.length > 1 ? (
          response.map((comment) => <Response key={comment._id} {...comment} />)
        ) : (
          <div className='text-center font-semibold text-lg sm:text-xl my-5'>
            <h1>No comment yet</h1>
          </div>
        )}
      </main>
    </section>
  );
};

export default SingleTicket;

const Response = ({ account, reply, createdAt }) => {
  return (
    <div
      className={`${
        account.role === "admin" ? "border-green-500" : "border-blue"
      } border-2 py-2 rounded-md my-4 p-2`}
    >
      <h2 className='font-semibold flex flex-col sm:flex-row justify-start items-start gap-1'>
        <span>{account?.name} </span>
        <span className='text-black/60'>
          commented on {new Date(createdAt).toDateString()}
        </span>
      </h2>
      <p className='my-2 text-lg'>{reply}</p>
    </div>
  );
};
