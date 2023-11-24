// Icons
import { BulbIcon, CheckIcon, RibbonIcon, WindIcon } from "../../assets/icons";
// Images
import feat1 from "../../assets/images/features1.png";
import feat2 from "../../assets/images/features2.png";
import cta1 from "../../assets/images/cta1.png";
import cta2 from "../../assets/images/cta2.png";
import cta3 from "../../assets/images/cta3.png";
import Carousel from "./carousel";

const Features = () => {
  return (
    <section id='features' className='mt-5'>
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
    <section className='grid grid-cols-12 gap-5 mb-10 p-2 container place-items-center'>
      <div className='col-span-12 sm:col-span-6 gap-2'>
        <div className='flex justify-start items-start gap-2'>
          <div className='basis-1/12'>
            <BulbIcon className='w-8 h-8 hover:w-10 hover:h-10 transition-all duration-200' />
          </div>
          <div className='basis-11/12 text-blue'>
            <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'>
              Fill your branding
            </h1>
            <p className='mt-5 md:mt-10 text-lg md:text-3xl w-3/4 sm:w-11/12'>
              We leverage your pre-design brand input in generating a little to
              no customisable design
            </p>
          </div>
        </div>
      </div>

      <div className='col-span-12 sm:col-span-6 w-full flex justify-center items-center'>
        <img src={feat1} alt='Section' />
      </div>
    </section>
  );
};

const Features2 = () => {
  return (
    <section className='grid grid-cols-12 gap-5 mb-10 p-2 container place-items-center'>
      <div className='col-span-12 sm:col-span-6 gap-2 sm:order-1'>
        <div className='flex justify-start items-start gap-2'>
          <div className='basis-11/12 text-blue'>
            <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'>
              Your assets are covered
            </h1>
            <p className='mt-5 md:mt-10 text-lg md:text-3xl w-3/4 sm:w-11/12'>
              We utilize premium assets that perfectly align with your brand’s
              identity to enhance your brand’s identity for your audience
            </p>
          </div>
          <div className='basis-1/12'>
            <RibbonIcon className='w-8 h-8 hover:w-10 hover:h-10 transition-all duration-200' />
          </div>
        </div>
      </div>

      <div className='col-span-12 sm:col-span-6 w-full flex justify-center items-center bg-grayish border border-secondary rounded-xl'>
        <img src={feat2} alt='Assets' />
      </div>
    </section>
  );
};

const Features3 = () => {
  return (
    <section className='grid grid-cols-12 gap-5 mb-2 sm:mb-5 p-2 container place-items-center'>
      <div className='col-span-12 sm:col-span-6 gap-2'>
        <div className='flex justify-start items-start gap-2'>
          <div className='basis-1/12'>
            <CheckIcon className='w-8 h-8 hover:w-10 hover:h-10 transition-all duration-200' />
          </div>
          <div className='basis-11/12 text-blue'>
            <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'>
              Generate crazy design
            </h1>
            <p className='mt-5 md:mt-10 text-lg md:text-3xl w-3/4 sm:w-11/12'>
              Get tailored captivating brand designs with prompt in sync with
              your audience needs.
            </p>
          </div>
        </div>
      </div>

      <div className='col-span-12 sm:col-span-6 w-full flex justify-center items-center'>
        <Carousel />
      </div>
    </section>
  );
};

const Features4 = () => {
  return (
    <section className='bg-primary text-center sm:mt-10 pb-16 relative'>
      <WindIcon className='w-8 h-8 absolute -top-4 left-16 hover:w-10 hover:h-10 transition-all duration-200' />
      <h2 className='text-xl md:text-4xl font-bold w-4/5 md:w-1/2 py-20 mx-auto'>
        Experience brand <span className='text-secondary'>designs </span>
        seamlessly sync with your
        <span className='text-secondary'> content strategy</span>
      </h2>

      <div className='grid grid-cols-8 gap-6 md:gap-2'>
        <div className='col-span-8 md:col-span-2'>
          <h4 className='text-lg font-bold mb-4'>Pre-filled brandings</h4>
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
          <h4 className='text-lg font-bold mb-4'>Content Prompts</h4>
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

        <div className='col-span-8 md:col-span-2 relative'>
          <h4 className='text-lg font-bold mb-4'>Crazy Engaging Designs</h4>
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
