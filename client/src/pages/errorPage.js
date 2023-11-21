import { Link, useRouteError } from "react-router-dom";
import { RefreshIcon } from "../assets/icons";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className='h-screen flex flex-col justify-center items-stretch'
    >
      <div className='flex flex-col justify-center items-start sm:items-center gap-5'>
        <h1 className='text-3xl sm:text-6xl'>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <code>{error.statusText || error.message}</code>
        </p>
        <div className='flex justify-between items-center w-full sm:w-1/2 mx-auto'>
          <button
            className='flex gap-2 w-fit items-center bg-black text-white border-2 hover:border-black hover:bg-transparent hover:text-black rounded-3xl py-2 px-4 transition-all duration-500 ease-in-out'
            onClick={() => window.location.reload(true)}
          >
            <RefreshIcon className='w-4 h-4' /> Refresh
          </button>
          <Link to='/' className='py-2 px-4 rounded-3xl border border-black'>
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
