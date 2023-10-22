// Icon
import { LoveIcon } from "../../../assets/icons";

const Cta = () => {
  return (
    <section id='cta' className='container p-2'>
      <h2 className='flex justify-start items-center gap-5'>
        <span className='w-9/12 sm:w-full md:w-1/3 text-xl sm:text-2xl md:text-3xl font-bold'>
          The best SMEs are already using Readiily.
        </span>
        <span className='md:mb-6'>
          <LoveIcon className='w-8 h-8 hover:w-10 hover:h-10 transition-all duration-200' />
        </span>
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-4 grid-rows-[9] md:grid-rows-2 h-96 md:h-72 gap-5 mt-10 mb-20'>
        <div className='border border-secondary rounded-lg col-start-1 col-end-3 row-start-1 row-end-3 md:col-span-1 md:row-start-1 md:row-end-3 h-full'></div>
        <div className='border border-secondary rounded-lg col-start-1 col-end-2 row-start-3 row-end-6 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3'></div>
        <div className='border border-secondary rounded-lg row-start-3 row-end-6 col-start-2 col-end-3 md:row-start-2 md:row-end-3'></div>
        <div className='border border-secondary rounded-lg col-start-1 col-end-2 row-start-6 row-end-[10] md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3'></div>
        <div className='border border-secondary rounded-lg col-start-2 col-end-3 row-start-6 row-end-[10] md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3'></div>
      </div>
    </section>
  );
};

export default Cta;
