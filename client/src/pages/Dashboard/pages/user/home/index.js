// Hook
import useTitle from "../../../../../hooks/useTitle";

const UserHome = () => {
  useTitle("Overview");
  return (
    <section className='mb-20'>
      <div className='p-2 sm:p-3 md:p-4 w-full sm:w-11/12 mx-auto flex flex-col justify-start gap-4 items-center'>
        <h2 className='text-blue text-xl sm:text-3xl md:text-4xl font-semibold md:font-bold text-center'>
          Welcome, Ayomide
        </h2>
        <div className='w-full h-80 bg-slate-300 mx-auto rounded-md'></div>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-6 w-full'>
          <div className='bg-white/90 w-full sm:w-3/4 gap-1 sm:gap-3 shadow-md hover:shadow-lg text-blue py-10 px-8 h-full rounded-md text-xl flex flex-col justify-between items-center'>
            <span>1</span> <span>Brands</span>
          </div>
          <div className='bg-white/90 w-full sm:w-3/4 gap-1 sm:gap-3 shadow-md hover:shadow-lg text-blue py-10 px-8 h-full rounded-md text-xl flex flex-col justify-between items-center'>
            <span>My</span> <span>Subscription</span>
          </div>
          <div className='bg-white/90 w-full sm:w-3/4 gap-1 sm:gap-3 shadow-md hover:shadow-lg text-blue py-10 px-8 h-full rounded-md text-xl flex flex-col justify-between items-center'>
            <span>0</span>
            <span>Comments</span>
          </div>
          <div className='bg-white/90 w-full sm:w-3/4 gap-1 sm:gap-3 shadow-md hover:shadow-lg text-blue py-10 px-8 h-full rounded-md text-xl flex flex-col justify-between items-center'>
            <span>2</span>
            <span>Tickets</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserHome;
