import { Link } from "react-router-dom";
import { ClipBoardIcon, TrashIcon } from "../../../../../../../assets/icons";

const BrandManage = () => {
  return (
    <div className='p-3 h-screen'>
      <header className='relative'>
        <h1 className='text-lg sm:text-3xl text-blue flex justify-start items-center gap-3'>
          <span>Your brands</span>
          <span className='text-black'>1/2</span>
          <Link
            to='/dashboard/account/brand/create'
            className='bg-blue text-white sm:text-lg capitalize sm:uppercase rounded-3xl px-2 sm:px-4 py-1 sm:py-2'
          >
            create brands
          </Link>
        </h1>
        <div className='absolute -bottom-4 w-full h-1 bg-gradient-to-r from-red-500 to-green-500 mt-5'>
          <div className='flex justify-between items-center my-5 w-full sm:w-10/12 text-gray-500 font-semibold text-lg sm:text-xl md:text-2xl p-5 border-2 border-transparent border-b-gray-600'>
            <p>Brand(s)</p>
            <p>Email</p>
            <p>Status</p>
          </div>
          <div className='h-96 overflow-scroll pb-11'>
            <SingleBrand />
            <SingleBrand />
            <SingleBrand />
            <SingleBrand />
            <SingleBrand />
          </div>
        </div>
      </header>
    </div>
  );
};

const SingleBrand = () => {
  return (
    <div className='group h-20 w-full flex justify-between items-center mb-5'>
      <main className='basis-full sm:basis-10/12 flex justify-between items-center my-5 text-gray-300 text-xs gap-1 sm:text-base md:text-lg p-5 border border-transparent border-b-gray-600'>
        <p className='flex flex-col justify-between items-start gap-2 w-16 text-ellipsis sm:w-fit overflow-hidden'>
          <span>Ayomi Brand</span>
          <button>
            653434232323afg <ClipBoardIcon className='w-6 h-6 inline' />
          </button>
        </p>
        <p className='w-20 text-ellipsis sm:w-fit overflow-hidden'>
          ayomibrand@gmail.com
        </p>
        <p className='w-16 text-ellipsis sm:w-fit overflow-hidden'>Active</p>
      </main>
      <button className='basis-1/6 group-hover:flex hidden sm:flex justify-center items-center rounded-full p-2 hover:bg-black'>
        <TrashIcon className='w-6 h-6 sm:w-8 sm:h-8 fill-red-500 stroke-red-100' />
      </button>
    </div>
  );
};

export default BrandManage;
