// Icons
import {
  BulbIcon,
  CheckIcon,
  LoudIcon,
  RibbonIcon,
  WindIcon,
} from "../../assets/icons";
// Images
import feat1 from "../../assets/images/features1.png";
import feat2 from "../../assets/images/features2.png";
import cta1 from "../../assets/images/cta1.png";
import cta2 from "../../assets/images/cta2.png";
import cta3 from "../../assets/images/cta3.png";

const Features = () => {
  return (
    <section id='features' className='mt-48 sm:mt-44 md:mt-48 mb-2'>
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
    <section className='grid grid-cols-12 gap-5 mb-10 p-2 container'>
      <div className='col-span-12 sm:col-span-6 gap-2'>
        <h2 className='flex justify-start items-center gap-5 md:gap-10'>
          <span className='text-xl md:text-2xl'>Section</span>
          <span>
            <BulbIcon className='w-8 h-8 hover:w-10 hover:h-10 transition-all duration-200 sm:w-10 sm:h-10 md:w-12 md:h-12 sm:hover:w-14 sm:hover:h-14' />
          </span>
        </h2>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold mt-3'>
          Fill pre-designed sections for building cohesive design layout
        </h1>
        <p className='mt-5 md:mt-10 text-xl sm:text-4xl'>
          We leverage your pre-design input to streamline your brand’s design
          content and layout
        </p>
      </div>

      <div className='col-span-12 sm:col-span-6 w-full flex justify-center items-center'>
        <img src={feat1} alt='Section' />
      </div>
    </section>
  );
};

const Features2 = () => {
  return (
    <section className='grid grid-cols-12 gap-5 mb-10 p-2 container'>
      <div className='col-span-12 sm:col-span-6 order-2 sm:order-1 gap-2'>
        <div className='col-span-12 sm:col-span-6 w-full border border-secondary rounded-lg flex justify-center items-center bg-secondary/5'>
          <img src={feat2} alt='Section' />
        </div>
      </div>

      <div className='col-span-12 sm:col-span-6 order-1 sm:order-2'>
        <h2 className='flex justify-start items-center gap-5 md:gap-10'>
          <span className='text-xl md:text-2xl'>Assets</span>
          <span>
            <RibbonIcon className='w-8 h-8 hover:w-10 hover:h-10 transition-all duration-200 sm:w-10 sm:h-10 md:w-12 md:h-12 sm:hover:w-14 sm:hover:h-14' />
          </span>
        </h2>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold mt-3'>
          Your brand stock images, icons, graphics, and other essential assets
          are covered by us
        </h1>
        <p className='mt-5 md:mt-10 text-lg sm:text-xl md:text-2xl'>
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
      <div className='col-span-12 sm:col-span-6 gap-2'>
        <h2 className='flex justify-start items-center gap-5 md:gap-10'>
          <span className='text-xl md:text-2xl'>Bespoke</span>
          <span>
            <CheckIcon className='w-8 h-8 hover:w-10 hover:h-10 transition-all duration-200 sm:w-10 sm:h-10 md:w-12 md:h-12 sm:hover:w-14 sm:hover:h-14 stroke-secondary' />
          </span>
        </h2>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold mt-3'>
          Design tailored to your brand identity and content strategy
        </h1>
        <p className='mt-5 md:mt-10 text-lg sm:text-xl md:text-2xl'>
          We design tailored captivating brand designs within time and in sync
          with your content strategy and brand’s visual language
        </p>
      </div>

      <div className='col-span-12 sm:col-span-6 relative w-full'>
        <div className='bg-secondary mx-auto w-2/3 sm:w-2/3 h-80 rounded-md'></div>
        <LoudIcon className='w-6 h-6 hover:w-8 hover:h-8 transition-all duration-200 absolute -bottom-6 right-5' />
      </div>
    </section>
  );
};

const Features4 = () => {
  return (
    <section className='bg-primary text-center mt-32 pb-16 relative'>
      <WindIcon className='w-8 h-8 absolute -top-4 left-16 hover:w-10 hover:h-10 transition-all duration-200' />
      <h2 className='text-xl md:text-4xl font-bold w-4/5 md:w-1/2 py-20 mx-auto'>
        Experience brand <span className='text-secondary'>designs </span>
        seamlessly sync with your
        <span className='text-secondary'> content strategy</span>
      </h2>

      <div className='grid grid-cols-8 gap-6 md:gap-2'>
        <div className='col-span-8 md:col-span-2'>
          <h4 className='font-semibold mb-4'>Pre-filled brand sections</h4>
          <div className='flex justify-center items-center mt-3'>
            <img
              src={cta1}
              alt='Pre-filled brand sections'
              className='h-52 rounded-lg'
            />
          </div>
        </div>

        <div className='col-span-8 md:col-span-1 flex justify-center items-center'>
          <span className='text-secondary text-4xl font-bold'>+</span>
        </div>

        <div className='col-span-8 md:col-span-2'>
          <h4 className='font-semibold mb-4'>Content Prompts</h4>
          <div className='flex justify-center items-center mt-3'>
            <img
              src={cta2}
              alt='Content Prompts'
              className='h-52 bg-white border border-secondary rounded-lg '
            />
          </div>
        </div>

        <div className='col-span-8 md:col-span-1 flex justify-center items-center'>
          <span className='text-secondary text-4xl font-semibold'>=</span>
        </div>

        <div className='col-span-8 md:col-span-2'>
          <h4 className='font-semibold mb-4'>Crazy Engaging Designs</h4>
          <div className='flex justify-center items-center mt-3'>
            <img
              src={cta3}
              alt='Crazy Engaging Designs'
              className='h-52 rounded-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
