import { useState } from "react";
import { Link } from "react-router-dom";
// Hook
import useTitle from "../../../../../hooks/useTitle";
import useSWR from "swr";
// Icons
import { CancelIcon } from "../../../../../assets/icons";
// Utils
import url from "../../../../../utils/url";
import { downloadCloudinary } from "../../../../../utils/downloadFile";
// Component
import Comment from "../../../../../components/dashboard/comment";
import Loader from "../../../../../components/loader";
import Error1 from "../../../../../components/error";

const History = () => {
  useTitle("Design History");
  const [view, setView] = useState({
    open: false,
    request: null,
    comment: false,
  });
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    url + "/api/v1/request/history",
    fetcher
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
        <Error1 error={data || error} />
      </div>
    );
  }

  const myHistory =
    data?.filter((request) => request.status === "done" && request.design) ||
    [];

  return (
    <section>
      <main className='bg-white/80 sm:m-2 shadow-xl sm:p-2 relative'>
        <header>
          <div className='text-blue font-bold text-lg sm:text-xl py-4'>
            My Design History
          </div>
          {myHistory.length > 0 && (
            <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 bg-blue/10 gap-2'>
              <div className='col-span-4 sm:col-span-4 text-secondary font-semibold sm:text-lg overflow-hidden'>
                Brands
              </div>
              <div className='col-span-4 sm:col-span-4 text-secondary font-semibold sm:text-lg overflow-hidden flex justify-start items-center gap-1'>
                <span>Request</span>
              </div>
              <div className='col-span-4 sm:col-span-4 text-secondary font-semibold sm:text-lg overflow-hidden text-center'>
                Date
              </div>
            </div>
          )}
        </header>
        {view.open && <RequestModal view={view} setView={setView} />}

        <div className='h-[50vh] sm:h-[60vh] overflow-x-hidden overflow-y-scroll'>
          {myHistory.length > 0 ? (
            myHistory.map((request) => (
              <SingleRequest
                key={request._id}
                request={request}
                setView={setView}
              />
            ))
          ) : (
            <div className='text-center font-semibold text-lg sm:text-xl my-5'>
              <h1>No design history yet</h1>
            </div>
          )}
        </div>
      </main>
    </section>
  );
};

export default History;

const SingleRequest = ({ request, setView }) => {
  const { _id, brand, date } = request;
  return (
    <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 mt-3 gap-2 border border-transparent border-b-slate-400'>
      <div className='col-span-4 sm:text-lg flex justify-start gap-2 items-center overflow-hidden'>
        {brand && (brand.logoLight || brand.logoDark) ? (
          <img
            src={brand.logoLight || brand.logoDark}
            className='w-10 h-10 rounded-full hidden sm:block'
            alt={brand.name}
          />
        ) : (
          <></>
        )}
        <div className='flex flex-col justify-center'>
          <span>{brand.name}</span>
          <Link
            className='text-blue underline underline-offset-2'
            to={`/dashboard/request/brand/${brand ? brand._id : ""}`}
          >
            <span>View </span>
            <span className='hidden sm:inline'>Branding</span>
          </Link>
        </div>
      </div>
      <div className='col-span-4 sm:text-lg overflow-hidden flex flex-col justify-center'>
        <span>{_id}</span>
        <button
          className='bg-blue px-4 py-2 rounded-xl text-white w-fit text-sm'
          onClick={() => setView({ open: true, request })}
        >
          <span>View </span>
          <span className='hidden sm:inline'>Request</span>
        </button>
      </div>
      <div className='col-span-4 sm:col-span-4 overflow-hidden text-sm sm:text-base text-center'>
        {new Date(date).toLocaleDateString()}
      </div>
    </div>
  );
};

const RequestModal = ({ view, setView }) => {
  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 bg-black/5'>
      <div className='absolute h-4/6 -bottom-64 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-1/2 md::w-1/3 bg-grayish p-2 rounded-xl'>
        <div className='w-full flex justify-between items-center my-3'>
          <button
            className='underline underline-offset-2'
            onClick={() => setView({ ...view, comment: !view.comment })}
          >
            {view.comment ? "Request" : "Comment"}
          </button>

          <button
            onClick={() => setView({ ...view, open: false, request: null })}
          >
            <CancelIcon className='w-6 h-6 bg-red-500 rounded-full stroke-white stroke-2' />
          </button>
        </div>

        {view.comment ? (
          <Comment id={view.request._id} />
        ) : (
          <>
            <div className='w-5/6 sm:w-3/4 mx-auto'>
              <p className='border-2 border-black rounded-lg h-32 overflow-x-hidden overflow-y-scroll'>
                {view.request.desc}
              </p>
              <h2 className='text-lg sm:text-xl '>Preferred brand image</h2>

              {view.request.design && (
                <a href={downloadCloudinary(view.request.design)} download>
                  download
                </a>
              )}
            </div>

            <img
              className='w-full h-52 object-contain'
              src={view.request.design}
              alt={view.request.brand.name}
            />
          </>
        )}
      </div>
    </div>
  );
};
