import { useState } from "react";
// Hook
import useTitle from "../../../../../hooks/useTitle";
import { CancelIcon } from "../../../../../assets/icons";

const RequestView = () => {
  useTitle("Design View");
  const [view, setView] = useState(false);
  return (
    <section className='relative'>
      <main className='bg-white/80 sm:m-2 shadow-xl sm:p-2'>
        <header>
          <div className='text-blue font-bold text-lg sm:text-xl py-4'>
            Requested Design View
          </div>
          <div className='py-3 px-2 sm:py-6 sm:px-5 bg-blue/10'>
            <h2 className='text-secondary font-semibold sm:text-lg'>
              Google Requested Designs
            </h2>
          </div>
        </header>

        {view && (
          <div className='fixed top-0 right-0 left-0 bottom-0 bg-black/5'>
            <div className='absolute h-4/6 -bottom-64 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-1/2 md::w-1/3 bg-gray p-2 rounded-xl'>
              <button
                className='w-full flex justify-end items-center'
                onClick={() => setView(!view)}
              >
                <CancelIcon className='w-6 h-6 bg-red-500 rounded-full stroke-white stroke-2' />
              </button>
              <div className='w-5/6 sm:w-3/4 mx-auto'>
                <p className='border-2 border-black rounded-lg h-32 overflow-x-hidden overflow-y-scroll'>
                  Description Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Amet, unde?
                </p>
                <h2 className='text-lg sm:text-xl '>Preferred brand image</h2>

                <button>download</button>
                <form className='w-full my-5'>
                  <label htmlFor='upload-design'>
                    <div className='bg-sky-500 rounded-lg w-full py-4 text-white text-center'>
                      Upload design
                    </div>
                  </label>
                  <input
                    id='upload-design'
                    name='upload-design'
                    type='file'
                    className='hidden'
                  />
                </form>
              </div>
            </div>
          </div>
        )}

        <div className='h-[50vh] sm:h-[70vh] overflow-x-hidden overflow-y-scroll'>
          <SingleRequest view={view} setView={setView} />
          <SingleRequest view={view} setView={setView} />
          <SingleRequest view={view} setView={setView} />
          <SingleRequest view={view} setView={setView} />
          <SingleRequest view={view} setView={setView} />
          <SingleRequest view={view} setView={setView} />
        </div>
      </main>
    </section>
  );
};

export default RequestView;

const SingleRequest = ({ view, setView }) => {
  return (
    <div className='py-4 px-2 sm:py-8 sm:px-5'>
      <h2 className='sm:text-lg flex flex-col justify-between items-start'>
        <span>January 1</span>
        <button
          className='text-blue underline underline-offset-2'
          onClick={() => setView(!view)}
        >
          View request
        </button>
      </h2>
    </div>
  );
};
