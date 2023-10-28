const CreateBrand = () => {
  return (
    <div className='p-3'>
      <div>
        <div className='flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3'>
          <span className='text-lg'>Set your brand's name</span>
          <input
            type='text'
            placeholder='My Brand'
            className='border border-blue rounded-md p-2 w-full sm:w-1/2'
          />
        </div>
        <main className='grid grid-cols-12 my-4 gap-3'>
          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4'></div>
          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4'></div>
          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4'></div>
          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4'></div>
          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4'></div>
          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4'></div>
        </main>
      </div>
    </div>
  );
};

export default CreateBrand;
