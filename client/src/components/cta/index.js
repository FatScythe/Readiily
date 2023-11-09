import { Link } from "react-router-dom";
// Images
import calendar from "../../assets/images/calendar.png";
import idea from "../../assets/images/idea.png";
// Redux
import { useSelector } from "react-redux";
const Cta = () => {
  const { account } = useSelector((store) => store.auth);

  return (
    <section id='cta' className='container p-2'>
      <main className='grid grid-cols-12 sm:gap-3'>
        <div className='col-span-12 sm:col-span-4 flex flex-col justify-start items-start gap-2 sm:gap-4 mt-4 mb-5 sm:mb-20'>
          <h3 className='text-blue text-xl sm:text-2xl md:text-4xl font-bold'>
            Try our test solution if it’ll meet your brand need
          </h3>
          <Link
            to={account ? "/dashboard" : "/auth?signup=true"}
            className='bg-blue px-4 py-3 text-white rounded-md'
          >
            Try for free
          </Link>
        </div>
        <div className='col-span-12 sm:col-span-8 flex justify-start items-center'>
          <div
            style={{
              maskImage:
                "linear-gradient(to bottom left,black, black, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom left,black, black, transparent)",
            }}
          >
            <img src={calendar} alt='calendar' />
          </div>
          <div
            style={{
              maskImage:
                "linear-gradient(to bottom left,black, black, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom left,black, black, transparent)",
            }}
          >
            <img src={idea} alt='idea' />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Cta;

// Icon
// import { LoveIcon } from "../../assets/icons";

//  <section id='cta' className='container p-2'>
//    <h2 className='flex justify-start items-center gap-5'>
//      <span className='w-9/12 sm:w-full md:w-1/3 text-xl sm:text-2xl md:text-3xl font-bold'>
//        The best SMEs are already using Readiily.
//      </span>
//      <span className='md:mb-6'>
//        <LoveIcon className='w-8 h-8 hover:w-10 hover:h-10 transition-all duration-200' />
//      </span>
//    </h2>

//    <div className='grid grid-cols-2 md:grid-cols-4 grid-rows-[9] md:grid-rows-2 h-96 md:h-72 gap-5 mt-10 mb-20'>
//      <div className='border border-secondary rounded-lg col-start-1 col-end-3 row-start-1 row-end-3 md:col-span-1 md:row-start-1 md:row-end-3 h-full'></div>
//      <div className='border border-secondary rounded-lg col-start-1 col-end-2 row-start-3 row-end-6 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3'></div>
//      <div className='border border-secondary rounded-lg row-start-3 row-end-6 col-start-2 col-end-3 md:row-start-2 md:row-end-3'></div>
//      <div className='border border-secondary rounded-lg col-start-1 col-end-2 row-start-6 row-end-[10] md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3'></div>
//      <div className='border border-secondary rounded-lg col-start-2 col-end-3 row-start-6 row-end-[10] md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3'></div>
//    </div>
//  </section>;
