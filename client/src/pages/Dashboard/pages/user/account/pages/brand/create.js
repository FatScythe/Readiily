import {
  AddIcon,
  CancelIcon,
  UploadLogoIcon,
} from "../../../../../../../assets/icons";

const CreateBrand = () => {
  return (
    <div className='p-3'>
      <form>
        <div className='flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3'>
          <span className='text-lg'>Set your brand's name</span>
          <input
            type='text'
            placeholder='My Brand'
            className='border border-blue rounded-md p-2 w-full sm:w-1/2 outline-black'
          />
        </div>
        <main className='grid grid-cols-12 my-4 gap-3'>
          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 p-1 sm:p-2'>
            <h2 className='text-blue text-lg'>Brand Color</h2>
            <main className='flex gap-2 justify-start items-center'>
              <div className='inline'>colors</div>
              <div className='my-4 inline'>
                <label htmlFor='color' className=''>
                  <AddIcon className='w-14 h-14' />
                </label>
                <input id='color' type='color' className='invisible' />
              </div>
            </main>
          </div>
          <div className='flex flex-col justify-between items-stretch w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 p-1 sm:p-2'>
            <h2 className='text-blue text-lg flex justify-between items-center'>
              <p>Font</p>
              <div className='flex justify-between items-center gap-2'>
                <input type='checkbox' className='w-6 h-6' />
                <span className='text-gray-300'>Use a Custom Font</span>
              </div>
            </h2>
            <div>
              <input
                type='search'
                className='w-full outline-none border border-gray-400 rounded-md p-3'
              />
            </div>
          </div>

          <div className='flex flex-col justify-between items-stretch w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 p-1 sm:p-2'>
            <h2 className='text-blue text-lg'>Brand Email </h2>
            <div>
              <input
                type='search'
                className='w-full outline-none border border-gray-400 rounded-md p-3'
              />
            </div>
          </div>
          <div className='flex flex-col justify-between items-stretch w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 p-1 sm:p-2'>
            <h2 className='text-blue text-lg'>Brand Social Handle </h2>
            <div>
              <input
                type='search'
                className='w-full outline-none border border-gray-400 rounded-md p-3'
              />
            </div>
          </div>
          <div className='flex flex-col justify-between items-stretch w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 p-1 sm:p-2'>
            <h2 className='text-blue text-lg'>Logo for Light Background</h2>
            <div>
              <label
                htmlFor='upload-light'
                className='w-full outline-none border border-gray-400 rounded-md p-3 flex justify-between items-center'
              >
                <p className='flex justify-between items-center gap-2'>
                  <span className='bg-secondary/25 p-2 rounded-md'>
                    <UploadLogoIcon className='w-6 h-6' />
                  </span>
                  <span> Upload</span>
                </p>
                <button>
                  <CancelIcon className='w-6 h-6 bg-secondary rounded-full p-0.5 font-bold text-white stroke-2' />
                </button>
              </label>
              <input id='upload-light' type='file' className='hidden' />
            </div>
          </div>
          <div className='flex flex-col justify-between items-stretch w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 p-1 sm:p-2'>
            <h2 className='text-blue text-lg'>Logo for Dark Background</h2>
            <div>
              <label
                htmlFor='upload-dark'
                className='w-full outline-none border border-gray-400 rounded-md p-3 flex justify-between items-center'
              >
                <p className='flex justify-between items-center gap-2'>
                  <span className='bg-secondary/25 p-2 rounded-md'>
                    <UploadLogoIcon className='w-6 h-6' />
                  </span>
                  <span> Upload</span>
                </p>
                <button>
                  <CancelIcon className='w-6 h-6 bg-secondary rounded-full p-0.5 font-bold text-white stroke-2' />
                </button>
              </label>
              <input id='upload-dark' type='file' className='hidden' />
            </div>
          </div>
          <div className='flex flex-col justify-between items-stretch w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 p-2'>
            <h2 className='text-blue text-lg'>Brand Industry</h2>
            <div>
              <input
                type='search'
                className='w-full outline-none border border-gray-400 rounded-md p-3'
              />
            </div>
          </div>
        </main>

        <div className='w-full flex justify-end items-center'>
          <button
            type='submit'
            className='bg-blue px-4 py-2 sm:py-5 sm:w-1/3 text-lg sm:text-xl rounded-2xl text-white font-semibold'
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBrand;
