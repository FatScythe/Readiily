// Hook
import useTitle from "../../../../../hooks/useTitle";
import useSWR from "swr";
// Util
import url from "../../../../../utils/url";
// Components
import Loader from "../../../../../components/loader";
import Error1 from "../../../../../components/error";

const Payments = () => {
  useTitle("Payments");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    url + "/api/v1/transaction",
    fetcher,
    { refreshInterval: 3000 }
  );

  if (isLoading) {
    return (
      <div className='h-half sm:h-screen grid place-items-center'>
        <Loader className='w-20 h-20' />
      </div>
    );
  }

  if ((data && data.msg) || error) {
    return (
      <div className='h-half grid place-items-center'>
        <Error1 msg={data || error} />
      </div>
    );
  }

  return (
    <section className='mb-32'>
      <h1 className='bg-secondary/70 text-xl sm:text-2xl p-4 mb-3 font-semibold text-white'>
        Transactions
      </h1>
      {data.length > 0 ? (
        <div className='sm:p-2'>
          <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 bg-blue/10 gap-2 sm:font-semibold'>
            <div className='col-span-3'>Details</div>
            <div className='col-span-3 text-center'>Amount</div>
            <div className='col-span-3'>Status</div>
            <div className='col-span-3'>Type</div>
          </div>
          <div className='overflow-x-hidden overflow-y-auto'>
            {data.map((transaction) => (
              <SingleTransaction key={transaction._id} {...transaction} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className='text-center text-xl mt-10 font-bold'>
            No transaction yet
          </h1>
        </div>
      )}
    </section>
  );
};

export default Payments;

const SingleTransaction = ({ detail, amount, status, type }) => {
  return (
    <div className='grid grid-cols-12 gap-2 my-3'>
      <div className='col-span-3 text-sm sm:text-lg overflow-hidden sm:font-semibold'>
        {detail}
      </div>
      <div className='col-span-3 text-center'>
        <span className='font-bold text-sm sm:text-lg '>$</span>
        <span>{amount}</span>
      </div>
      <div
        className={`col-span-3 w-fit capitalize text-sm sm:text-base  ${
          status === "pending"
            ? "bg-orange/25 text-orange"
            : "bg-emerald-300 text-emerald-900"
        } text-xs h-fit sm:text-sm px-2 sm:px-4 py-1 sm:py-2 rounded-sm sm:rounded-xl`}
      >
        {status}
      </div>
      <div
        className={`col-span-3 text-xs sm:text-base ${
          type === "expense" ? "text-orange" : "text-green-500"
        } font-semibold capitalize`}
      >
        {type}
      </div>
    </div>
  );
};
