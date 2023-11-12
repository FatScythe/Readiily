import { useState } from "react";
// Icon
import { ChevronUp, TicketIcon } from "../../../../assets/icons";

const SingleTicket = () => {
  const [openReply, setOpenReply] = useState(false);

  return (
    <section className='px-2 py-4'>
      <header className='flex flex-col justify-start items-start gap-6 my-6'>
        <h1 className='text-xl sm:text-2xl md:text-3xl'>
          <span> Bug: Unable to request twice per day line in calendar</span>
          <span className='text-slate-400'> #YZY-453-04752</span>
        </h1>
        <p className='bg-green-700 px-3 py-2 text-lg sm:text-xl rounded-3xl w-fit flex justify-between items-center gap-2 text-white'>
          <span>
            <TicketIcon className='w-6 h-6' />
          </span>
          <span>Open</span>
        </p>
      </header>
      <main>
        <div className='border-2 py-2 rounded-md my-6'>
          <h2 className='font-semibold flex flex-col sm:flex-row justify-start items-start gap-1'>
            <span>Account 65221212 </span>
            <span className='text-black/60'>Opened ticket on 12-05-2025</span>
          </h2>
          <p className='my-2 text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nemo
            magnam vero, cumque maiores ea, quo dolore accusamus alias
            voluptatum dolores modi laudantium. Optio recusandae aliquid culpa
            iusto fugit cum fuga, distinctio cumque sapiente!
          </p>
        </div>

        <form className='flex flex-col justify-between items-start gap-4'>
          <button
            type='button'
            className='font-semibold text-lg flex justify-start items-center gap-2 cursor-pointer'
            onClick={() => setOpenReply(!openReply)}
          >
            <span>Reply</span>
            <ChevronUp className={`w-6 h-6 ${openReply ? "" : "rotate-180"}`} />
          </button>
          {openReply && (
            <>
              <select className='border border-gray-400 bg-gray-300 w-36 text-lg block'>
                <option>Pending</option>
                <option>Closed</option>
              </select>
              <textarea
                className='block w-full border border-black'
                name='response'
                id='response'
                cols='30'
                rows='10'
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

        <h2 className='text-xl font-semibold italic py-3'>Comments:</h2>
        <Response />
        <Response />
        <Response />
        <Response />
        <Response />
        <Response />
        <Response />
        <Response />
      </main>
    </section>
  );
};

export default SingleTicket;

const Response = () => {
  return (
    <div className='border-blue border-2 py-2 rounded-md my-4'>
      <h2 className='font-semibold flex flex-col sm:flex-row justify-start items-start gap-1'>
        <span>Account 65221212 </span>
        <span className='text-black/60'>commented on 12-05-2025</span>
      </h2>
      <p className='my-2 text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nemo
        magnam vero, cumque maiores ea, quo dolore accusamus alias voluptatum
        dolores modi laudantium. Optio recusandae aliquid culpa iusto fugit cum
        fuga, distinctio cumque sapiente!
      </p>
    </div>
  );
};
