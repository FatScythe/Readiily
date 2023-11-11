// Hook
import { Link } from "react-router-dom";
import { UploadIcon } from "../../../../../assets/icons";
import useTitle from "../../../../../hooks/useTitle";
const AvailableRequest = () => {
  useTitle("Request");
  return (
    <section>
      <main className='bg-white/80 sm:m-2 shadow-xl sm:p-2'>
        <header>
          <div className='text-blue font-bold text-lg sm:text-xl py-4'>
            Available Design Request
          </div>
          <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 bg-blue/10 gap-2'>
            <div className='col-span-3 sm:col-span-3 text-secondary font-semibold sm:text-lg overflow-hidden'>
              Brands
            </div>
            <div className='col-span-3 sm:col-span-2 text-secondary font-semibold sm:text-lg overflow-hidden flex justify-start items-center gap-1'>
              <span className='hidden sm:block'>Request</span>
              <span className='sm:hidden'>Req.</span>
              <span className='hidden sm:block'>Number</span>
              <span className='sm:hidden'>No.</span>
            </div>
            <div className='col-span-3 sm:col-span-2 text-secondary font-semibold sm:text-lg overflow-hidden text-center'>
              Status
            </div>
            <div className='col-span-3 sm:col-span-5 text-secondary font-semibold sm:text-lg overflow-hidden text-center'>
              Action
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
      </main>
    </section>
  );
};

export default AvailableRequest;

const SingleRequest = () => {
  return (
    <div className='grid grid-cols-12 py-3 px-2 sm:py-6 sm:px-5 mt-3 gap-2 border border-transparent border-b-slate-400'>
      <div className='col-span-3 sm:col-span-3 sm:text-lg flex justify-start gap-2 items-center overflow-hidden'>
        <img
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAABGlBMVEX////lQzU0o1NCgO/2twQ8fe9plvFPifDg6Pz2tQAwolAldO7lQTPkNiXlPzD2sgDkOyv3zcoln0nxpqHiIQDjLRjkMyD3+/hQrWj++PfsgnvreXH87u3woJvqcGf1v7z85bj3vQD+9eP4yWf3v0L++e72uiL62pv09/797tLl7fzW6ttwuYJntnvl8ugTnEBcsXG528H64N7pZFroW1DztLDmUkXvmJLuhRjyoifnWTbsezLkODjwlyr0qx/5zXbqbzLuhy72xK751IOmv/aDp/PW37rbuDG0tUTE1fmRr0rntiBvrFTQtzePsPSjtEqUyaBXqle6sS+p07JKkNBBlLGBwJA8nIkzoGAspDpNlsQ/m5Y4n3JHiOAJuJq3AAAEAElEQVRoge2XWVebQBSAyQSMECAJBogYE1OttdkQorH7vte2aa2pdvn/f6MTYmKGdRgHzunpfA/64ODHvXPn3oHjGAwGg8FgMBgMRuZsQvK3Nt32ttUaHUFGLWu77eb2Du7GVkHXlap6RVXRjbF13Mze3Nwe15WqXPAhV416q52tutaqKwHxAtXQT7ILvzYyqlHmefyKkpG+aSnxak9vjLNIfrsQnXBEr2/RDn7T0rHUM5RCjarbhf8RH7m+QdFd09UUbohuUXO3DeyUL+TUQk/tlum5a6njNrZpud24EyaH/U2n5t5Uw2sNNnO9rivK7IeKvAK9nHOtsK4mV/WxtVFrznDbJy3FULNwH+shakW1akgXa24cLfQU3WEbXlUsN7Bwsz322pBxQs3NbQWTro+Cak9/UpcLOkV3LZD0uM7pKnVqdQ6DOfJXuqrEzQyXZkvfued3U55Xcezx9wurBSdX83PfFXm+8uDRSq1lfENcZRfK+c7DpZ3mMUqkws/oPL5KvTzO0b0zl/OdJ/PU6/ltOMc9FfkrKs+gXR3l6Ob2l3K+8/yRHHvCaXOrwl/TuV8o5Ohebvki9S/ylL8UETl/N2xRt7SWyCsC+S4iF/dCF62XhURep3ff3kPluxHyYhLCGoF8H5FX7hDLSwfp5eiOV3ZI5cVievkttN4qofWGJRe6TP5vyOkVHImc1lErCgRHjVaTITlquO012U3QZPAGC5QHm7kv6wTt1TdSRf5NqFwoBfHJCQYLepkQ34IG9pNrSOwCyUhdvUZV3gGg9TCf66KRl9+TyJcXSHH/AwBAGmA+9x4twjJBvV1vuvjxFMywMUNHs14skbgXHw3iJzBHwtv1ddQtfCaTeydd/AIWaBOcp3yBk22596Eo7p+Ca2wn+aFXvrZTJnPDT2Tx7dcVN5CkxG3v+lsMySn32PkGUCSQYD8o+eWEWec4syH57fGxd9f8bsJan+HYwI99Fr18vehzE5ebR18L2gfDiMVnATfRUFkyDMph6ichetMB9sV3gWLgMJpg4uGBB9OeiZiHk4Ymwdc6RwbqzQKHDEJih3q7MXV6QxMy7DnTQ1ubl6b9YzX1wvoN5abmr/ir5Gu2bUveL21liXbxZ2kvEw1ThGGEPQLp8meZUtJnOKGJj8b+5aWe5AORgl37DVMvFG+64Ut7qszDLvydmpvjenZK++U5NTesOpAq9RqI6oJEmNOwbhOBjXvdw8aRMIPXpJjZQ4o5xak7SetTTfmS3qGWEL2kNXCv9wT6vh0TPuz4GLe8GzA8a4T6YZMHYaOWvr8P4DiRFmhwuIDBJLt8+zB7zqQ/OGxADgfTiTM0k5+h/g6Q/K0MBoPBYDAYDMb/xl8imWokuW/z0QAAAABJRU5ErkJggg=='
          className='w-10 h-10 rounded-full hidden sm:block'
          alt='google'
        />
        <p className='flex flex-col justify-between items-start text-sm sm:text-base'>
          <span>Google</span>
          <Link
            to='/dashboard/request/brand'
            className='text-blue underline underline-offset-2 text-xs sm:text-sm'
          >
            View Branding
          </Link>
        </p>
      </div>
      <Link
        to='/dashboard/request/view'
        className='col-span-3 sm:col-span-2 sm:text-lg ml-4 sm:text-center overflow-hidden text-blue'
      >
        7
      </Link>
      <div className='col-span-3 sm:col-span-2 overflow-hidden text-sm sm:text-base text-center text-red-400 bg-gray-200 rounded-xl sm:rounded-3xl px-1 flex justify-center items-center'>
        Pending
      </div>
      <div className='col-span-3 sm:col-span-5 sm:text-lg overflow-hidden text-center'>
        <UploadIcon className='w-6 h-6 mx-auto' />
      </div>
    </div>
  );
};
