import { Link } from "react-router-dom";
// Images
import bg from "../assets/images/404-bg.png";
import plug from "../assets/images/plug.png";

const NotFound = () => {
  return (
    <section className='h-screen lg:px-24 lg:py-16 md:py-5 md:px-20 px-4 py-20 items-center flex justify-center flex-col-reverse lg:flex-row gap-10'>
      <div className='xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0'>
        <div className='relative'>
          <div className='absolute -top-36 sm:-top-1/2'>
            <div>
              <h1 className='my-2 font-semibold text-2xl text-orange'>
                <span className='text-5xl break-keep font-normal'> :( </span>
                Page Not Found
              </h1>
              <h1 className='my-2 text-gray-800 font-bold text-xl'>
                Looks like you've found the doorway to the great nothing
              </h1>
              <p className='my-2 text-gray-800 mb-4'>
                Sorry about that! Please visit our homepage to get where you
                need to go.
              </p>
              <Link
                to='/'
                className='sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-blue text-white hover:bg-blue/60 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50'
              >
                Take me there!
              </Link>
            </div>
          </div>
          <div>
            <img src={bg} alt='404' />
          </div>
        </div>
      </div>
      <div>
        <img src={plug} alt='Disconnect' />
      </div>
    </section>
  );
};

export default NotFound;
