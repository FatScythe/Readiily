import { RefreshIcon } from "../../assets/icons";
const Error1 = ({ error }) => {
  return (
    <section
      id='error1'
      className='flex flex-col justify-center items-center gap-2'
    >
      <h3 className='text-xl sm:text-2xl text-orange font-bold'>
        <span>Error </span>
        <span className='text-3xl sm:text-4xl text-orange font-normal'>:(</span>
      </h3>
      <p className='text-lg sm:text-xl'>
        {error ? error.msg : "Something went wrong"}
      </p>
      <button
        className='flex gap-2 w-fit items-center my-5 bg-black text-white border-2 hover:border-black hover:bg-transparent hover:text-black rounded-3xl p-4  transition-all duration-500 ease-in-out'
        onClick={() => window.location.reload(true)}
      >
        <RefreshIcon className='w-4 h-4' /> Reload Page
      </button>
    </section>
  );
};

export default Error1;
