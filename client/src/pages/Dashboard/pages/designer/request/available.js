import { useState } from "react";
import { Link } from "react-router-dom";
// Hook
import useTitle from "../../../../../hooks/useTitle";
import useSWR from "swr";
// Icon
import { UploadIcon } from "../../../../../assets/icons";
// Utils
import url from "../../../../../utils/url";
import time_between from "../../../../../utils/time_between";
// Components
import Loader from "../../../../../components/loader";
import Error1 from "../../../../../components/error";
import UploadResponse from "./upload";

const AvailableRequest = () => {
  useTitle("Accepted Request");
  const [view, setView] = useState({
    open: false,
    request: null,
    comment: false,
  });
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    url + "/api/v1/request/assign",
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
  const myRequest = data?.filter((request) => request.accepted) || [];

  return (
    <section className='relative'>
      <main className='bg-white/80 sm:m-2 shadow-xl sm:p-2'>
        <header>
          <div className='text-blue font-bold text-lg sm:text-xl py-4'>
            Accepted Design Request
          </div>
          {myRequest.length > 0 && (
            <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 bg-blue/10 gap-2'>
              <div className='col-span-4 sm:col-span-3 text-secondary font-semibold sm:text-lg overflow-hidden'>
                Brand
              </div>
              <div className='col-span-3 hidden sm:block text-secondary font-semibold sm:text-lg overflow-hidden'>
                Status
              </div>
              <div className='col-span-4 sm:col-span-3 text-secondary font-semibold sm:text-lg overflow-hidden text-center'>
                Deadline
              </div>
              <div className='col-span-4 sm:col-span-3 text-secondary font-semibold sm:text-lg overflow-hidden text-center'>
                Action
              </div>
            </div>
          )}
        </header>

        {view.open && <UploadResponse view={view} setView={setView} />}

        <div className='h-[50vh] sm:h-[70vh] overflow-x-hidden overflow-y-scroll'>
          {myRequest.length > 0 ? (
            myRequest.map((request) => (
              <SingleRequest
                key={request._id}
                request={request}
                view={view}
                setView={setView}
              />
            ))
          ) : (
            <div>
              <h1 className='text-center text-xl font-semibold sm:text-2xl'>
                You have no accepted design request
              </h1>
            </div>
          )}
        </div>
      </main>
    </section>
  );
};

export default AvailableRequest;

const SingleRequest = ({ request, view, setView }) => {
  const { brand, date, status } = request;

  return (
    <div className='grid grid-cols-12 py-4 px-2 sm:py-8 sm:px-5'>
      <div className='col-span-4 sm:col-span-3 sm:text-lg flex justify-between items-start'>
        <div className='sm:text-lg flex justify-start gap-2 items-center overflow-hidden'>
          {brand && (brand.logoLight || brand.logoDark) && (
            <img
              src={brand.logoLight || brand.logoDark}
              className='w-10 h-10 rounded-full'
              alt={brand.name}
            />
          )}
          <h2 className='flex flex-col justify-start items-start sm:items-center'>
            <span>{brand ? brand.name : "No brand name"}</span>
            <Link
              className='text-blue underline underline-offset-2'
              to={`/dashboard/request/brand/${brand ? brand._id : ""}`}
            >
              <span className='hidden sm:inline'>View </span>
              <span>Branding</span>
            </Link>
          </h2>
        </div>
      </div>

      <p className='col-span-3 hidden sm:block'>
        <span
          className={`bg-gray-300 rounded-2xl px-4 py-2 capitalize ${
            status === "pending" ? "text-red-400" : "text-green-500"
          }`}
        >
          {status}
        </span>
      </p>

      <p
        className='col-span-4 sm:col-span-3 sm:text-lg overflow-hidden text-center text-red-400 cursor-pointer'
        title={new Date(date).toDateString()}
      >
        {time_between(new Date(date))}
      </p>

      <div className='col-span-4 sm:col-span-3 flex justify-center items-center'>
        <button onClick={() => setView({ open: true, request })}>
          <UploadIcon className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
};
