// useTitle("All Designs");
// // Hook
// import useTitle from "../../../../../hooks/useTitle";
// const Designs = () => {
//   return (
//     <section>
//       <main className='bg-white/80 sm:m-2 shadow-xl sm:p-2'>
//         <header>
//           <div className='text-blue font-bold text-lg sm:text-xl py-4'>
//             All Design History
//           </div>
//           <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 bg-blue/10 gap-2'>
//             <div className='col-span-4 sm:col-span-4 text-secondary font-semibold sm:text-lg overflow-hidden'>
//               Brands
//             </div>
//             <div className='col-span-4 sm:col-span-3 text-secondary font-semibold sm:text-lg overflow-hidden flex justify-start items-center gap-1'>
//               <span className='hidden sm:block'>Request</span>
//               <span className='sm:hidden'>Req.</span>
//               <span className='hidden sm:block'>Number</span>
//               <span className='sm:hidden'>No.</span>
//             </div>
//             <div className='col-span-4 sm:col-span-5 text-secondary font-semibold sm:text-lg overflow-hidden text-center'>
//               Date
//             </div>
//           </div>
//         </header>

//         <div className='h-[50vh] sm:h-[60vh] overflow-x-hidden overflow-y-scroll'>
//           <SingleRequest />
//           <SingleRequest />
//           <SingleRequest />
//           <SingleRequest />
//           <SingleRequest />
//           <SingleRequest />
//           <SingleRequest />
//           <SingleRequest />
//           <SingleRequest />
//           <SingleRequest />
//         </div>
//       </main>
//     </section>
//   );
// };

// export default Designs;

// const SingleRequest = () => {
//   return (
//     <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 mt-3 gap-2 border border-transparent border-b-slate-400'>
//       <div className='col-span-4 sm:col-span-4 sm:text-lg flex justify-start gap-2 items-center overflow-hidden'>
//         <img
//           src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAABGlBMVEX////lQzU0o1NCgO/2twQ8fe9plvFPifDg6Pz2tQAwolAldO7lQTPkNiXlPzD2sgDkOyv3zcoln0nxpqHiIQDjLRjkMyD3+/hQrWj++PfsgnvreXH87u3woJvqcGf1v7z85bj3vQD+9eP4yWf3v0L++e72uiL62pv09/797tLl7fzW6ttwuYJntnvl8ugTnEBcsXG528H64N7pZFroW1DztLDmUkXvmJLuhRjyoifnWTbsezLkODjwlyr0qx/5zXbqbzLuhy72xK751IOmv/aDp/PW37rbuDG0tUTE1fmRr0rntiBvrFTQtzePsPSjtEqUyaBXqle6sS+p07JKkNBBlLGBwJA8nIkzoGAspDpNlsQ/m5Y4n3JHiOAJuJq3AAAEAElEQVRoge2XWVebQBSAyQSMECAJBogYE1OttdkQorH7vte2aa2pdvn/f6MTYmKGdRgHzunpfA/64ODHvXPn3oHjGAwGg8FgMBgMRuZsQvK3Nt32ttUaHUFGLWu77eb2Du7GVkHXlap6RVXRjbF13Mze3Nwe15WqXPAhV416q52tutaqKwHxAtXQT7ILvzYyqlHmefyKkpG+aSnxak9vjLNIfrsQnXBEr2/RDn7T0rHUM5RCjarbhf8RH7m+QdFd09UUbohuUXO3DeyUL+TUQk/tlum5a6njNrZpud24EyaH/U2n5t5Uw2sNNnO9rivK7IeKvAK9nHOtsK4mV/WxtVFrznDbJy3FULNwH+shakW1akgXa24cLfQU3WEbXlUsN7Bwsz322pBxQs3NbQWTro+Cak9/UpcLOkV3LZD0uM7pKnVqdQ6DOfJXuqrEzQyXZkvfued3U55Xcezx9wurBSdX83PfFXm+8uDRSq1lfENcZRfK+c7DpZ3mMUqkws/oPL5KvTzO0b0zl/OdJ/PU6/ltOMc9FfkrKs+gXR3l6Ob2l3K+8/yRHHvCaXOrwl/TuV8o5Ohebvki9S/ylL8UETl/N2xRt7SWyCsC+S4iF/dCF62XhURep3ff3kPluxHyYhLCGoF8H5FX7hDLSwfp5eiOV3ZI5cVievkttN4qofWGJRe6TP5vyOkVHImc1lErCgRHjVaTITlquO012U3QZPAGC5QHm7kv6wTt1TdSRf5NqFwoBfHJCQYLepkQ34IG9pNrSOwCyUhdvUZV3gGg9TCf66KRl9+TyJcXSHH/AwBAGmA+9x4twjJBvV1vuvjxFMywMUNHs14skbgXHw3iJzBHwtv1ddQtfCaTeydd/AIWaBOcp3yBk22596Eo7p+Ca2wn+aFXvrZTJnPDT2Tx7dcVN5CkxG3v+lsMySn32PkGUCSQYD8o+eWEWec4syH57fGxd9f8bsJan+HYwI99Fr18vehzE5ebR18L2gfDiMVnATfRUFkyDMph6ichetMB9sV3gWLgMJpg4uGBB9OeiZiHk4Ymwdc6RwbqzQKHDEJih3q7MXV6QxMy7DnTQ1ubl6b9YzX1wvoN5abmr/ir5Gu2bUveL21liXbxZ2kvEw1ThGGEPQLp8meZUtJnOKGJj8b+5aWe5AORgl37DVMvFG+64Ut7qszDLvydmpvjenZK++U5NTesOpAq9RqI6oJEmNOwbhOBjXvdw8aRMIPXpJjZQ4o5xak7SetTTfmS3qGWEL2kNXCv9wT6vh0TPuz4GLe8GzA8a4T6YZMHYaOWvr8P4DiRFmhwuIDBJLt8+zB7zqQ/OGxADgfTiTM0k5+h/g6Q/K0MBoPBYDAYDMb/xl8imWokuW/z0QAAAABJRU5ErkJggg=='
//           className='w-6 h-6 sm:w-10 sm:h-10 rounded-full'
//           alt='google'
//         />
//         <p className='text-sm sm:text-base'>Google</p>
//       </div>
//       <div className='col-span-4 sm:col-span-3 sm:text-lg overflow-hidden text-blue text-center mr-5'>
//         7
//       </div>
//       <div className='col-span-4 sm:col-span-5 overflow-hidden text-sm sm:text-base text-center'>
//         01-01-2023
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { Link } from "react-router-dom";
// Hook
import useTitle from "../../../../../hooks/useTitle";
import useSWR from "swr";
// Icons
import { CancelIcon } from "../../../../../assets/icons";
// Utils
import url from "../../../../../utils/url";

const Designs = () => {
  useTitle("All Designs");
  const [view, setView] = useState({ open: false, request: null });
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    url + "/api/v1/request/history",
    fetcher
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if ((data && data.msg) || error) {
    return <div>Failed to load</div>;
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

export default Designs;

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
        <button
          className='w-full flex justify-end items-center'
          onClick={() => setView({ open: false, request: null })}
        >
          <CancelIcon className='w-6 h-6 bg-red-500 rounded-full stroke-white stroke-2' />
        </button>
        <div className='w-5/6 sm:w-3/4 mx-auto'>
          <p className='border-2 border-black rounded-lg h-32 overflow-x-hidden overflow-y-scroll'>
            {view.request.desc}
          </p>
          <h2 className='text-lg sm:text-xl '>Preferred brand image</h2>

          <button>download</button>
        </div>

        <img
          className='w-full h-52 object-contain'
          src={view.request.design}
          alt={view.request.brand.name}
        />
      </div>
    </div>
  );
};
