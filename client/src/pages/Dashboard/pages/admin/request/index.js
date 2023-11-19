import "./request.css";
import { useState } from "react";
import { Link } from "react-router-dom";
// Hook
import useTitle from "../../../../../hooks/useTitle";
import useSWR from "swr";
// Icons
import { AddUserIcon, CancelIcon } from "../../../../../assets/icons";
// Utils
import time_between from "../../../../../utils/time_between";
// Components
import Designers from "./designers";
import Comment from "../../../../../components/dashboard/comment";
// Toastify
import { toast } from "react-toastify";

const Request = () => {
  useTitle("All request");
  const [openModal, setOpenModal] = useState(false);
  const [view, setView] = useState({
    open: false,
    request: null,
    comment: false,
  });
  const [requestId, setRequestId] = useState([]);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/v1/request", fetcher);

  if ((data && data.msg) || error) {
    return <div>Failed to load</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const unassignedReq = data.requests.filter(
    (request) => !request.accepted && !request.designer
  );

  return (
    <section>
      <main className='bg-white/80 sm:m-2 shadow-xl sm:p-2 relative'>
        {openModal && (
          <Designers
            openModal={openModal}
            setOpenModal={setOpenModal}
            requestId={requestId}
            setRequestId={setRequestId}
          />
        )}
        <header>
          <div className='text-blue font-bold text-lg sm:text-xl py-4 flex justify-between items-center'>
            <span>Unassigned Design Request</span>
            <Link
              to='/dashboard/create'
              className='font-normal self-end flex justify-start items-center gap-2 bg-black text-white px-4 py-2 rounded-3xl'
              title='create designer'
            >
              <span className='hidden sm:block'>Create designer </span>
              <AddUserIcon className='w-6 h-6 stroke-2' />
            </Link>
          </div>
          {unassignedReq.length >= 1 && (
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
                Assign
              </div>
            </div>
          )}
        </header>

        {view.open && <RequestModal view={view} setView={setView} />}

        <div className='h-[50vh] sm:h-[60vh] overflow-x-hidden overflow-y-scroll'>
          {unassignedReq.length >= 1 ? (
            unassignedReq.map((request) => (
              <SingleRequest
                key={request._id}
                request={request}
                requestId={requestId}
                setRequestId={setRequestId}
                setView={setView}
              />
            ))
          ) : (
            <div className='text-center font-semibold text-lg sm:text-xl my-5'>
              <h1>No request for the month yet</h1>
            </div>
          )}
        </div>

        <div className='flex justify-end items-center py-3 px-4'>
          <button
            className='bg-sky-600 px-3 py-2 text-lg rounded-3xl text-white font-semibold'
            onClick={() => {
              if (requestId.length < 1) {
                toast.info("Please select request to assign");
                return;
              }
              setOpenModal(!openModal);
            }}
          >
            Assign to:
          </button>
        </div>
      </main>
    </section>
  );
};

export default Request;

const SingleRequest = ({ request, requestId, setRequestId, setView }) => {
  const { _id, brand, date } = request;

  return (
    <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 mt-3 gap-2 border border-transparent border-b-slate-400'>
      <div className='col-span-3 sm:text-lg overflow-hidden flex flex-col justify-center'>
        <span>{_id}</span>
        <button
          className='bg-blue px-4 py-2 rounded-xl text-white w-fit text-sm'
          onClick={() => setView({ open: true, request })}
        >
          <span>View </span>
          <span className='hidden sm:inline'>Request</span>
        </button>
      </div>
      <div className='col-span-3 sm:text-lg flex justify-start gap-2 items-center overflow-hidden'>
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
      <div
        className='col-span-3 sm:text-lg overflow-hidden text-center text-red-400 cursor-pointer'
        title={new Date(date).toDateString()}
      >
        {time_between(new Date(date))}
      </div>
      <div className='col-span-3 sm:text-lg overflow-hidden text-center'>
        <input
          onChange={(e) => {
            if (e.target.checked) {
              setRequestId([...requestId, _id]);
            } else {
              let filterId = requestId.filter((id) => id !== _id);
              setRequestId(filterId);
            }
          }}
          type='checkbox'
          className='scale-105 h-6 w-6 border border-transparent outline -outline-offset-1 outline-2 outline-blue'
        />
      </div>
    </div>
  );
};

const RequestModal = ({ view, setView }) => {
  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 bg-black/5 z-20'>
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
          <div className='w-5/6 sm:w-3/4 mx-auto'>
            <p className='border-2 border-black rounded-lg h-32 overflow-x-hidden overflow-y-scroll'>
              {view.request.desc}
            </p>
            <h2 className='text-lg sm:text-xl '>Preferred brand image</h2>

            <button>download</button>
          </div>
        )}
      </div>
    </div>
  );
};
