// Icons
import {
  BulbIcon,
  CheckIcon,
  LoudIcon,
  RibbonIcon,
  WindIcon,
} from "../../assets/icons";

const Features = () => {
  return (
    <section id='features' className='my-48'>
      <Features1 />
      <Features2 />
      <Features3 />
      <Features4 />
    </section>
  );
};

export default Features;

const Features1 = () => {
  return (
    <section className='grid grid-cols-12 gap-5 mb-28 p-2 container'>
      <div className='col-span-12 sm:col-span-6'>
        <h2 className='flex justify-start items-center gap-5 md:gap-10'>
          <span className='font-semibold text-lg md:text-xl'>Section</span>
          <span>
            <BulbIcon className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' />
          </span>
        </h2>
        <h1 className='text-xl md:text-2xl font-bold mt-3'>
          Fill pre-designed sections for building cohesive design layout
        </h1>
        <p className='mt-5 md:mt-10'>
          We leverage your pre-design input to streamline your brand’s design
          content and layout
        </p>
      </div>

      <div className='col-span-12 sm:col-span-6 relative w-full'>
        <div className='bg-secondary mx-auto w-2/3 sm:w-5/6 h-64 rounded-md'></div>
        <div className='bg-secondary mx-auto w-2/4 sm:w-5/6 h-52 rounded-md absolute top-2/4 right-10 sm:left-16 shadow-2xl border border-black'></div>
      </div>
    </section>
  );
};

const Features2 = () => {
  return (
    <section className='grid grid-cols-12 gap-5 mb-28 p-2 container'>
      <div className='col-span-12 sm:col-span-6 order-2 sm:order-1'>
        <div className='col-span-12 sm:col-span-6 relative w-full'>
          <div className='bg-secondary mx-auto w-2/3 sm:w-5/6 h-64 rounded-md'></div>
          <div className='bg-secondary mx-auto w-2/4 sm:w-5/6 h-52 rounded-md absolute top-2/4 right-10 sm:left-16 shadow-2xl border border-black'></div>
        </div>
      </div>

      <div className='col-span-12 sm:col-span-6 order-1 sm:order-2'>
        <h2 className='flex justify-start items-center gap-5 md:gap-10'>
          <span className='font-semibold text-lg md:text-xl'>Assets</span>
          <span>
            <RibbonIcon className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' />
          </span>
        </h2>
        <h1 className='text-xl md:text-2xl font-bold mt-3'>
          Your brand stock images, icons, graphics, and other essential assets
          are covered by us
        </h1>
        <p className='mt-5 md:mt-10'>
          We utilize premium assets that perfectly align with your brand’s
          identity and guidelines to enhance your brand’s recognition among your
          audience
        </p>
      </div>
    </section>
  );
};

const Features3 = () => {
  return (
    <section className='grid grid-cols-12 gap-5 p-2 container'>
      <div className='col-span-12 sm:col-span-6'>
        <h2 className='flex justify-start items-center gap-5 md:gap-10'>
          <span className='font-semibold text-lg md:text-xl'>Bespoke</span>
          <span>
            <CheckIcon className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-secondary' />
          </span>
        </h2>
        <h1 className='text-xl md:text-2xl font-bold mt-3'>
          Design tailored to your brand identity and content strategy
        </h1>
        <p className='mt-5 md:mt-10'>
          We design tailored captivating brand designs within time and in sync
          with your content strategy and brand’s visual language
        </p>
      </div>

      <div className='col-span-12 sm:col-span-6 relative w-full'>
        <div className='bg-secondary mx-auto w-2/3 sm:w-5/6 h-64 rounded-md'></div>
        <div className='absolute top-2/4 w-1/2 left-[40%]'>
          <div className='bg-secondary mx-auto w-full h-52 rounded-md shadow-2xl border border-black'></div>
          <LoudIcon className='w-6 h-6 absolute -bottom-4 -right-4' />
        </div>
      </div>
    </section>
  );
};

const Features4 = () => {
  return (
    <section className='bg-primary text-center my-32 pb-36 relative'>
      <WindIcon className='w-8 h-8 absolute -top-4 left-16' />
      <h2 className='text-xl md:text-4xl font-bold w-4/5 md:w-1/2 py-20 mx-auto'>
        Experience brand <span className='text-secondary'>designs </span>
        seamlessly sync with your
        <span className='text-secondary'> content strategy</span>
      </h2>

      <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-12 sm:col-span-6 md:col-span-4'>
          <h4 className='font-semibold'>Fill pre-designed sections</h4>
          <div className='bg-secondary h-52 w-2/3 mt-2 mx-auto rounded-md'></div>
        </div>
        <div className='col-span-12 sm:col-span-6 md:col-span-4'>
          <h4 className='font-semibold'>Get your brand’s assets</h4>
          <div className='bg-secondary h-52 w-2/3 mt-2 mx-auto rounded-md'></div>
        </div>
        <div className='col-span-12 sm:col-span-6 md:col-span-4'>
          <h4 className='font-semibold'>Get your tailored designs</h4>
          <div className='bg-secondary h-52 w-2/3 mt-2 mx-auto rounded-md'></div>
        </div>
      </div>
    </section>
  );
};
