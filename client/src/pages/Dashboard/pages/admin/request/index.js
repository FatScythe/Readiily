import { useState } from "react";
// Hook
import useTitle from "../../../../../hooks/useTitle";
import { AddUserIcon } from "../../../../../assets/icons";

const Request = () => {
  useTitle("All request");
  const [openModal, setOpenModal] = useState(false);
  return (
    <section>
      <main className='bg-white/80 sm:m-2 shadow-xl sm:p-2 relative'>
        {openModal && (
          <Designers openModal={openModal} setOpenModal={setOpenModal} />
        )}
        <header>
          <div className='text-blue font-bold text-lg sm:text-xl py-4 flex justify-between items-center'>
            <span>Unassigned Design Request</span>
            <button className='font-normal flex justify-start items-center gap-2 bg-black text-white px-4 py-2 rounded-3xl'>
              Create designer <AddUserIcon className='w-6 h-6 stroke-2' />
            </button>
          </div>
          <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 bg-blue/10 gap-2'>
            <div className='col-span-3 sm:col-span-3 text-secondary font-semibold sm:text-lg overflow-hidden'>
              ID
            </div>
            <div className='col-span-3 sm:col-span-3 text-secondary font-semibold sm:text-lg overflow-hidden'>
              Brand
            </div>
            <div className='col-span-3 sm:col-span-3 text-secondary font-semibold sm:text-lg overflow-hidden text-center'>
              Deadline
            </div>
            <div className='col-span-3 sm:col-span-3 text-secondary font-semibold sm:text-lg overflow-hidden text-center'>
              Assign
            </div>
          </div>
        </header>

        <div className='h-[50vh] sm:h-[60vh] overflow-x-hidden overflow-y-scroll'>
          <SingleRequest />
          <SingleRequest />
          <SingleRequest />
          <SingleRequest />
          <SingleRequest />
          <SingleRequest />
          <SingleRequest />
          <SingleRequest />
          <SingleRequest />
          <SingleRequest />
        </div>

        <div className='flex justify-end items-center py-3 px-4'>
          <button
            className='bg-sky-600 px-3 py-2 text-lg rounded-3xl text-white font-semibold'
            onClick={() => setOpenModal(!openModal)}
          >
            Assign to:
          </button>
        </div>
      </main>
    </section>
  );
};

export default Request;

const SingleRequest = () => {
  return (
    <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 mt-3 gap-2 border border-transparent border-b-slate-400'>
      <div className='col-span-3 sm:col-span-3 sm:text-lg overflow-hidden'>
        6232391002182712the
      </div>
      <div className='col-span-3 sm:col-span-3 sm:text-lg flex justify-start gap-2 items-center overflow-hidden'>
        <img
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAABGlBMVEX////lQzU0o1NCgO/2twQ8fe9plvFPifDg6Pz2tQAwolAldO7lQTPkNiXlPzD2sgDkOyv3zcoln0nxpqHiIQDjLRjkMyD3+/hQrWj++PfsgnvreXH87u3woJvqcGf1v7z85bj3vQD+9eP4yWf3v0L++e72uiL62pv09/797tLl7fzW6ttwuYJntnvl8ugTnEBcsXG528H64N7pZFroW1DztLDmUkXvmJLuhRjyoifnWTbsezLkODjwlyr0qx/5zXbqbzLuhy72xK751IOmv/aDp/PW37rbuDG0tUTE1fmRr0rntiBvrFTQtzePsPSjtEqUyaBXqle6sS+p07JKkNBBlLGBwJA8nIkzoGAspDpNlsQ/m5Y4n3JHiOAJuJq3AAAEAElEQVRoge2XWVebQBSAyQSMECAJBogYE1OttdkQorH7vte2aa2pdvn/f6MTYmKGdRgHzunpfA/64ODHvXPn3oHjGAwGg8FgMBgMRuZsQvK3Nt32ttUaHUFGLWu77eb2Du7GVkHXlap6RVXRjbF13Mze3Nwe15WqXPAhV416q52tutaqKwHxAtXQT7ILvzYyqlHmefyKkpG+aSnxak9vjLNIfrsQnXBEr2/RDn7T0rHUM5RCjarbhf8RH7m+QdFd09UUbohuUXO3DeyUL+TUQk/tlum5a6njNrZpud24EyaH/U2n5t5Uw2sNNnO9rivK7IeKvAK9nHOtsK4mV/WxtVFrznDbJy3FULNwH+shakW1akgXa24cLfQU3WEbXlUsN7Bwsz322pBxQs3NbQWTro+Cak9/UpcLOkV3LZD0uM7pKnVqdQ6DOfJXuqrEzQyXZkvfued3U55Xcezx9wurBSdX83PfFXm+8uDRSq1lfENcZRfK+c7DpZ3mMUqkws/oPL5KvTzO0b0zl/OdJ/PU6/ltOMc9FfkrKs+gXR3l6Ob2l3K+8/yRHHvCaXOrwl/TuV8o5Ohebvki9S/ylL8UETl/N2xRt7SWyCsC+S4iF/dCF62XhURep3ff3kPluxHyYhLCGoF8H5FX7hDLSwfp5eiOV3ZI5cVievkttN4qofWGJRe6TP5vyOkVHImc1lErCgRHjVaTITlquO012U3QZPAGC5QHm7kv6wTt1TdSRf5NqFwoBfHJCQYLepkQ34IG9pNrSOwCyUhdvUZV3gGg9TCf66KRl9+TyJcXSHH/AwBAGmA+9x4twjJBvV1vuvjxFMywMUNHs14skbgXHw3iJzBHwtv1ddQtfCaTeydd/AIWaBOcp3yBk22596Eo7p+Ca2wn+aFXvrZTJnPDT2Tx7dcVN5CkxG3v+lsMySn32PkGUCSQYD8o+eWEWec4syH57fGxd9f8bsJan+HYwI99Fr18vehzE5ebR18L2gfDiMVnATfRUFkyDMph6ichetMB9sV3gWLgMJpg4uGBB9OeiZiHk4Ymwdc6RwbqzQKHDEJih3q7MXV6QxMy7DnTQ1ubl6b9YzX1wvoN5abmr/ir5Gu2bUveL21liXbxZ2kvEw1ThGGEPQLp8meZUtJnOKGJj8b+5aWe5AORgl37DVMvFG+64Ut7qszDLvydmpvjenZK++U5NTesOpAq9RqI6oJEmNOwbhOBjXvdw8aRMIPXpJjZQ4o5xak7SetTTfmS3qGWEL2kNXCv9wT6vh0TPuz4GLe8GzA8a4T6YZMHYaOWvr8P4DiRFmhwuIDBJLt8+zB7zqQ/OGxADgfTiTM0k5+h/g6Q/K0MBoPBYDAYDMb/xl8imWokuW/z0QAAAABJRU5ErkJggg=='
          className='w-10 h-10 rounded-full hidden sm:block'
          alt='google'
        />
        <span>Google</span>
      </div>
      <div className='col-span-3 sm:col-span-3 sm:text-lg overflow-hidden text-center text-red-400'>
        3 days
      </div>
      <div className='col-span-3 sm:col-span-3 sm:text-lg overflow-hidden text-center'>
        <input type='checkbox' className='scale-105 h-8 w-8 accent-blue' />
      </div>
    </div>
  );
};

const Designers = ({ openModal, setOpenModal }) => {
  return (
    <main>
      <div
        className='fixed bg-black/5 top-0 bottom-0 left-0 right-0 z-10'
        onClick={() => setOpenModal(!openModal)}
      ></div>

      <div className='fixed p-2 z-20 bg-slate-200 top-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-full sm:w-1/2 rounded-lg overflow-x-hidden overflow-y-scroll'>
        <h2 className='text-lg sm:text-xl font-semibold'>Designers:</h2>

        <div className='grid grid-cols-12 my-2 gap-2'>
          <button className='col-span-4 flex flex-col justify-center items-center gap-4 hover:bg-black/20 py-1 rounded-lg'>
            <img
              src='/public/images/avatar.png'
              className='w-14 h-14 rounded-full'
              alt='designer tag'
            />
            <h3 className='text-sm font-semibold'>Designer Tag</h3>
          </button>
          <button className='col-span-4 flex flex-col justify-center items-center gap-4 hover:bg-black/20 py-1 rounded-lg'>
            <img
              src='/public/images/avatar.png'
              className='w-14 h-14 rounded-full'
              alt='designer tag'
            />
            <h3 className='text-sm font-semibold'>Designer Tag</h3>
          </button>
          <button className='col-span-4 flex flex-col justify-center items-center gap-4 hover:bg-black/20 py-1 rounded-lg'>
            <img
              src='/public/images/avatar.png'
              className='w-14 h-14 rounded-full'
              alt='designer tag'
            />
            <h3 className='text-sm font-semibold'>Designer Tag</h3>
          </button>
          <button className='col-span-4 flex flex-col justify-center items-center gap-4 hover:bg-black/20 py-1 rounded-lg'>
            <img
              src='/public/images/avatar.png'
              className='w-14 h-14 rounded-full'
              alt='designer tag'
            />
            <h3 className='text-sm font-semibold'>Designer Tag</h3>
          </button>
        </div>
      </div>
    </main>
  );
};
