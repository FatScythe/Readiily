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
            className='bg-blue px-4 sm:px-8 py-3 text-white rounded-md sm:text-lg sm:font-semibold'
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
