// Icons
import { CancelIcon, UploadIcon } from "../../../../../assets/icons";
const Post = ({ setIsPostOpen }) => {
  return (
    <div className='fixed bg-slate-200 z-40 -top-24 left-1/2 right-1/2 -translate-x-1/2 translate-y-1/2 w-full sm:w-3/4 md:w-1/2 h-4/5 border border-black'>
      <h3
        className='flex justify-end items-center w-full'
        onClick={() => setIsPostOpen(false)}
      >
        <CancelIcon className='w-6 h-6 bg-red-400 rounded-full p-1 m-2' />
      </h3>
      <main className='p-1 sm:p-2'>
        <h1 className='text-lg font-semibold sm:text-xl sm:my-2'>
          What to you intend to post today?
        </h1>
        <textarea
          className='w-11/12 mb-4 resize-none bg-transparent border border-black rounded-md outline-none p-2'
          rows={4}
          placeholder='Description'
        ></textarea>

        <div>
          <h2 className='text-base sm:text-lg underline underline-offset-4'>
            Additional Information
          </h2>
          <div className='w-32 h-28 rounded-md bg-transparent border border-black relative cursor-pointer'>
            <input
              type='file'
              className='w-full h-full opacity-0 z-30 absolute'
              accept='image/*'
            />
            <div className='absolute top-0 w-full text-center'>
              <h2>Prefered</h2>
              <h3>Main Image</h3>
              <UploadIcon className='w-6 h-6 mx-auto mt-3' />
            </div>
          </div>
          <div className='w-full flex justify-end items-center'>
            <button className='px-3 py-2 bg-sky-500 rounded-3xl font-semibold hover:opacity-50 text-white text-sm'>
              Pay now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Post;
