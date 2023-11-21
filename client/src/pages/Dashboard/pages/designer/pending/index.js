import { useState } from "react";
// Hook
import useTitle from "../../../../../hooks/useTitle";
import useSWR from "swr";
// Utils
import url from "../../../../../utils/url";
import time_between from "../../../../../utils/time_between";
// Icon
import { CancelIcon } from "../../../../../assets/icons";
// Toastify
import { toast } from "react-toastify";
// Component
import Loader from "../../../../../components/loader";
import Error1 from "../../../../../components/error";
import Comment from "../../../../../components/dashboard/comment";

const PendingRequest = () => {
  useTitle("Available Request");
  const [modal, setModal] = useState({ open: false, request: null });
  const [requestId, setRequestId] = useState([]);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    url + "/api/v1/request/assign",
    fetcher
  );

  const handleAccept = async () => {
    try {
      if (requestId.length < 1) {
        toast.info("Select request to accept");
        return;
      }
      const res = await fetch(url + "/api/v1/request/accept", {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ requestId }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.msg || "Something went wrong");
        return;
      }

      toast.success(data.msg);
      setRequestId([]);
    } catch (error) {
      toast.error(error.msg || "Something went wrong");
      console.error(error);
    }
  };

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

  const myRequest = data?.filter((request) => !request.accepted) || [];

  return (
    <section className='relative'>
      {modal.open && <RequestModal modal={modal} setModal={setModal} />}
      <main className='bg-white/80 sm:m-2 shadow-xl sm:p-2'>
        <header>
          <div className='text-blue font-bold text-lg sm:text-xl py-4'>
            Available Design Request
          </div>
          {myRequest.length > 0 && (
            <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 bg-blue/10 gap-2'>
              <div className='col-span-3 text-secondary font-semibold sm:text-lg overflow-hidden'>
                ID
              </div>
              <div className='col-span-3 text-secondary font-semibold sm:text-lg overflow-hidden'>
                Brand
              </div>
              <div className='col-span-3 text-secondary font-semibold sm:text-lg overflow-hidden text-center'>
                Deadline
              </div>
              <div className='col-span-3 text-secondary font-semibold sm:text-lg overflow-hidden text-center'>
                Accept
              </div>
            </div>
          )}
        </header>

        <div className='h-[50vh] sm:h-[60vh] overflow-x-hidden overflow-y-scroll'>
          {myRequest.length > 0 ? (
            myRequest.map((request) => (
              <SingleRequest
                key={request._id}
                request={request}
                setModal={setModal}
                requestId={requestId}
                setRequestId={setRequestId}
              />
            ))
          ) : (
            <div>
              <h1 className='text-center text-xl font-semibold sm:text-2xl'>
                You have no pending design request
              </h1>
            </div>
          )}
        </div>

        {myRequest.length > 0 && (
          <div className='flex justify-end items-center py-3 px-4'>
            <button
              className='bg-sky-600 px-3 py-2 text-lg rounded-3xl text-white font-semibold'
              onClick={handleAccept}
            >
              Accept
            </button>
          </div>
        )}
      </main>
    </section>
  );
};

export default PendingRequest;

const SingleRequest = ({ request, setModal, requestId, setRequestId }) => {
  const { _id, brand, date } = request;
  return (
    <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 mt-3 gap-2 border border-transparent border-b-slate-400'>
      <p className='flex flex-col justify-between items-start text-sm sm:text-base col-span-3 overflow-hidden'>
        <span>{_id}</span>
        <button
          className='text-blue underline underline-offset-2 text-xs sm:text-sm'
          onClick={() => setModal({ open: true, request: { ...request } })}
        >
          View Request
        </button>
      </p>
      <div className='col-span-3 sm:text-lg flex justify-start gap-2 items-center overflow-hidden'>
        {brand && (brand.logoLight || brand.logoDark) && (
          <img
            src={brand.logoLight || brand.logoDark}
            className='w-10 h-10 rounded-full'
            alt={brand.name}
          />
        )}
        <span>{brand ? brand.name : "No brand name"}</span>
      </div>
      <div
        className='col-span-3 sm:text-lg overflow-hidden text-center text-red-400 cursor-pointer'
        title={new Date(date).toDateString()}
      >
        {time_between(new Date(date))}
      </div>
      <div className='col-span-3 sm:text-lg overflow-hidden text-center'>
        <input
          type='checkbox'
          className='scale-105 h-8 w-8 accent-blue'
          onChange={(e) => {
            if (e.target.checked) {
              setRequestId([...requestId, _id]);
            } else {
              let filterId = requestId.filter((id) => id !== _id);
              setRequestId(filterId);
            }
          }}
        />
      </div>
    </div>
  );
};

const RequestModal = ({ modal, setModal }) => {
  return (
    <div className='relative'>
      <p
        className='fixed bottom-0 left-0 right-0 top-0 bg-black/30 z-10'
        onClick={() => setModal({ open: false, request: null })}
      ></p>
      <div className='absolute top-56 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-11/12 sm:w-3/4 bg-grayish z-20 p-2'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg font-semibold'>
            Request #{modal.request._id}
          </h1>
          <button
            className='bg-red-400 p-1 rounded-full'
            onClick={() => setModal({ open: false, request: null })}
          >
            <CancelIcon className='w-6 h-6 stroke-white stroke-2' />
          </button>
        </div>
        <p className='mt-6'>
          <span className='text-lg font-bold'>Description:</span>
          {modal.request.desc}
        </p>

        {(modal.request.brand.logoLight || modal.request.brand.logoDark) && (
          <img
            src={
              modal.request.brand
                ? modal.request.brand.logoLight || modal.request.brand.logoDark
                : ""
            }
            alt='additional information'
          />
        )}
        <Comment id={modal.request._id} />
      </div>
    </div>
  );
};
