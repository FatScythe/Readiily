// Hook
import useTitle from "../../../../../hooks/useTitle";
// Icon
import { DownloadIcon } from "../../../../../assets/icons";
const BrandInfo = () => {
  useTitle("Brand Info");
  return (
    <section>
      <main className='bg-white/80 sm:m-2 shadow-xl sm:p-2'>
        <header>
          <div className='text-blue font-bold text-lg sm:text-xl py-4'>
            Brand Brandings
          </div>
        </header>

        <div className='grid grid-cols-12 my-4 gap-3'>
          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>Brand Color</h2>
            <main className='flex justify-start items-center gap-4'>
              <p className='flex flex-col justify-between items-center gap-2'>
                <span className='h-10 w-10 bg-black rounded-full'></span>
                <span>#000</span>
              </p>
              <p className='flex flex-col justify-between items-center gap-2'>
                <span className='h-10 w-10 bg-red-500 rounded-full'></span>
                <span className='text-sm'>#F312</span>
              </p>
            </main>
          </div>

          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>Font</h2>
            <main className='flex justify-start items-center gap-4 w-full'>
              <p className='border border-black rounded-md p-2 w-full flex justify-between items-center'>
                <span>Raleway</span>
                <DownloadIcon className='w-6 h-6' />
              </p>
            </main>
          </div>

          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>Brand Social Handle</h2>
            <main className='grid grid-cols-12 gap-2 w-full'>
              <p className='col-span-6 flex justify-start items-center gap-2 bg-sky-500 text-white rounded-md p-1'>
                <span className=''>i</span>
                <span>@twitter</span>
              </p>
              <p className='col-span-6 flex justify-start items-center gap-2 bg-sky-500 text-white rounded-md p-1'>
                <span className=''>i</span>
                <span>@twitter</span>
              </p>
            </main>
          </div>

          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>Brand Website</h2>
            <main className='flex justify-start items-center gap-4 w-full'>
              <p className='border border-black rounded-md p-2 w-full'>
                www.website.com
              </p>
            </main>
          </div>
          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>
              Logo for Light Background
            </h2>
            <main className='flex justify-start items-center gap-4 w-full'>
              <p className='border border-black rounded-md p-2 w-full flex justify-between items-center'>
                <img src='' alt='logo' />
                <DownloadIcon className='w-6 h-6' />
              </p>
            </main>
          </div>

          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>Brand Color</h2>
            <main className='flex justify-start items-center gap-4 w-full'>
              <p className='border border-black rounded-md p-2 w-full flex justify-between items-center'>
                <img src='' alt='logo' />
                <DownloadIcon className='w-6 h-6' />
              </p>
            </main>
          </div>

          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>Brand Industry</h2>
            <main className='grid grid-cols-12 gap-2 w-full'>
              <p className='col-span-6 bg-gray-400 text-white rounded-md p-1'>
                <span>Technology</span>
              </p>
            </main>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BrandInfo;
