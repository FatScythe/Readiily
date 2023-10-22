// import { useLocation } from "react-router-dom";
// Image
import Rlogo from "../../assets/images/Rlogo.png";
import RIcon from "../../assets/images/R-light.png";
// Icons
import { ArrowIcon, GoogleIcon } from "../../assets/icons";

const Auth = () => {
  // const location = useLocation();

  // console.log(location.pathname.slice(1));
  const signup = true;
  return (
    <section id='auth' className={`${signup ? "h-full" : "h-screen"}`}>
      <nav className='flex justify-start items-center gap-3 bg-white/75 border-2 border-black'>
        <div>
          <img
            src={Rlogo}
            alt='Readiily'
            className='hidden sm:block sm:w-28 sm:h-16 md:w-36 md:h-20'
          />
          <img src={RIcon} alt='Readiily' className='sm:hidden w-16 h-16' />
        </div>
        <div className='border border-transparent border-l-black px-3 py-4'>
          <span>Don’t have an account yet?</span>
          <span className='text-orange mx-2'>Sign up</span>
        </div>
      </nav>
      <main className='bg-primary h-full pt-5'>
        <header className='text-center text-3xl font-bold'>
          {signup ? "Sign in to Readiily" : "Start designing with Readiily"}
        </header>
        <div className='bg-white w-11/12 md:w-3/6 mx-auto rounded-md mt-5 p-4 border-2 border-black'>
          <button className='flex justify-center items-center gap-3 w-full sm:w-4/5 mx-auto px-3 py-2 border border-black shadow-md hover:shadow-xl rounded-md'>
            <GoogleIcon className='w-6 h-6' />
            <span>
              {signup ? "Sign in with Google" : "Sign up using Google"}
            </span>
          </button>
          <form className='w-full sm:w-4/5 mt-8 mx-auto pt-4 border-2 border-transparent border-t-gray-400'>
            {signup && (
              <div>
                <label className='font-semibold'>Full name</label>
                <input
                  type='text'
                  placeholder='Enter your full name'
                  className='block border border-black outline-none p-2 w-full rounded-lg my-4'
                />
              </div>
            )}
            <div>
              <label className='font-semibold'>Email</label>
              <input
                type='text'
                placeholder='Enter your email'
                className='block border border-black outline-none p-2 w-full rounded-lg my-4'
              />
            </div>
            <div>
              <label className='font-semibold'>Password</label>
              <input
                type='password'
                placeholder='Enter your password'
                className='block border border-black outline-none p-2 w-full rounded-lg my-4 placeholder:font-normal placeholder:tracking-normal font-extrabold tracking-widest text-yellow-500'
              />
            </div>

            {signup && (
              <div>
                <label className='font-semibold'>Confirm Password</label>
                <input
                  type='password'
                  placeholder='Confirm your password'
                  className='block border border-black outline-none p-2 w-full rounded-lg my-4 placeholder:font-normal placeholder:tracking-normal font-extrabold tracking-widest text-green-600'
                />
              </div>
            )}

            <div className='w-full flex justify-end items-center'>
              <button className='bg-primary2 px-2 py-3 rounded-md text-white flex justify-between items-center gap-2'>
                <span>{signup ? "Sign in" : "Sign up"}</span>
                <span>
                  <ArrowIcon className='w-6 h-6' />
                </span>
              </button>
            </div>
          </form>
        </div>
        <footer className='gap-2 mt-2 flex justify-center items-center pb-20'>
          <h4>
            {signup ? "Forgotten your password?" : "Already have an account?"}
          </h4>
          <h3 className='text-orange'>{true ? "Reset it" : "Sign in"}</h3>
        </footer>
      </main>
    </section>
  );
};

export default Auth;
