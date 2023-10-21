// Icon
import { GoogleIcon, TrophyIcon, StarIcon } from "../../assets/icons";

const Hero = () => {
  return (
    <section id='hero' className='relative w-full'>
      <h2 className='text-xl sm:text-2xl md:text-3xl font-bold w-4/5 mx-auto text-center mt-20'>
        Get tailored <span className='text-secondary'>designs</span> that
        resonates with your brand's identity, audience, and presence
      </h2>
      <h4 className='sm:text-base md:text-lg w-3/4 sm:w-2/3 mx-auto text-center mt-5 font-semibold'>
        Readiily helps your brand create captivating brand tailored designs,
        without the need of an in-house designer
      </h4>
      <StarIcon className='absolute top-20 left-1 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 stroke-secondary' />
      <TrophyIcon className='absolute top-[35%] rotate-45 right-1 sm:right-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 stroke-secondary' />
      <div className='flex flex-col md:flex-row justify-center items-center pb-72 gap-6 mt-10'>
        <button className='flex justify-center items-center gap-1 pr-2 border border-black rounded-md bg-white text-black font-semibold'>
          <span className='border border-black p-2 border-t-0 border-b-0 border-l-0'>
            <GoogleIcon className='w-6 h-6' />
          </span>
          <span>Start free with Google</span>
        </button>
        <button className='px-9 md:px-4 py-2 border border-primary2 rounded-md font-semibold text-primary2'>
          Start free with email
        </button>
      </div>

      <div className='absolute rounded-lg w-11/12 sm:w-3/4 h-80 bg-gray-400 mt-2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2'></div>
    </section>
  );
};

export default Hero;
