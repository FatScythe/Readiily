import { Link, useSearchParams, Navigate } from "react-router-dom";
import { useState } from "react";
// Image
import Rlogo from "../../assets/images/Rlogo.png";
import RIcon from "../../assets/images/R-light.png";
// Icons
import {
  ArrowIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  GoogleIcon,
} from "../../assets/icons";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { registerAccount, loginAccount } from "../../features/auth/authSlice";
// Toastify
import { toast } from "react-toastify";
// Hooks
import useTitle from "../../hooks/useTitle";

const Auth = () => {
  const { account } = useSelector((store) => store.auth);
  const [loading, setLoading] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams({ signup: false });
  const [showPwd, setShowPwd] = useState(false);
  const signup = searchParams.get("signup") === "true";
  const referrer = searchParams.get("referrer");
  const dispatch = useDispatch();

  useTitle(signup ? "Sign-up" : "Login");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    referrer,
  });

  const handleGoogleAuth = () => {
    window.open(
      window.location.origin +
        `/api/v1/auth/login/google?referrer=${referrer ? referrer : ""}`
        ? referrer
        : "",
      "_self"
    );
    // DEVELOPMENT
    // window.open(
    //   "http://localhost:5000" + `/api/v1/auth/login/google?referrer=${referrer ? referrer : ""}`,
    //   "_self"
    // );
  };

  const handleAuth = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const { name, email, password, cpassword } = form;
      if (!email || !password) {
        setLoading(false);
        toast.info("Please provide email and password!");
        return;
      }

      if (signup && !name) {
        setLoading(false);
        toast.info("Provide your full name");
        return;
      }
      if (signup && password.length < 8) {
        setLoading(false);
        toast.info("Password too short");
        return;
      }
      if (signup && cpassword !== password) {
        setLoading(false);
        toast.info("Passwords does not match");
        return;
      }

      if (signup) {
        dispatch(registerAccount(form));
        setLoading(false);
      } else {
        dispatch(loginAccount(form));
        setLoading(false);
      }

      if (signup) {
        setTimeout(() => {
          setSearchParams((prev) => {
            prev.set("signup", false);
            return prev;
          });
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (account) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <section id='auth' className='h-full bg-white/75'>
      <nav className='flex justify-between items-center gap-3 border-2 border-blue px-3'>
        <Link to='/'>
          <img
            src={Rlogo}
            alt='Readiily'
            className='hidden sm:block sm:w-28 sm:h-16 md:w-36 md:h-20'
          />
          <img src={RIcon} alt='Readiily' className='sm:hidden w-16 h-16' />
        </Link>
        <div>
          <span className='text-blue'>
            {signup ? "Already have an account?" : "Don’t have an account yet?"}
          </span>
          <button
            onClick={(e) => {
              setSearchParams((prev) => {
                prev.set("signup", signup ? false : true);
                if (referrer) {
                  prev.set("referrer", referrer);
                }
                return prev;
              });
            }}
            className='text-orange mx-2'
          >
            {signup ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </nav>
      <main className='h-full pt-3 text-blue'>
        <header className='text-center text-3xl font-bold'>
          {signup ? "Sign in to Readiily" : "Start designing with Readiily"}
        </header>
        <div className='w-11/12 sm:w-3/4 md:w-3/6 mx-auto rounded-md mt-3 px-4 py-5 border-2 border-blue'>
          <button
            type='button'
            onClick={handleGoogleAuth}
            className='flex justify-center items-center gap-3 w-full sm:w-4/5 mx-auto px-4 py-3 border border-black shadow-md hover:shadow-xl rounded-md'
          >
            <GoogleIcon className='w-6 h-6' />
            <span>
              {signup ? "Sign up using Google" : "Sign in with Google"}
            </span>
          </button>
          <form
            className='w-full sm:w-4/5 mt-8 mx-auto pt-4 border-2 border-transparent border-t-gray-300'
            onSubmit={handleAuth}
          >
            {signup && (
              <div>
                <label className='font-semibold'>Full name</label>
                <input
                  type='text'
                  placeholder='Enter your full name'
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className='peer block border border-black outline-none p-2 w-full rounded-lg my-4 focus:border-sky-600 focus:border-2'
                  required
                />
                <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>
                  Please provide your full name.
                </p>
              </div>
            )}
            <div>
              <label className='font-semibold'>Email</label>
              <input
                type='email'
                placeholder='Enter your email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className='peer block border border-black outline-none p-2 w-full rounded-lg my-4 focus:border-sky-600 focus:border-2'
                required
              />
              <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>
                Please provide a valid email address.
              </p>
            </div>
            <div>
              <label className='font-semibold'>Password</label>
              <div className='relative'>
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder='Enter your password'
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className='peer block border border-black outline-none p-2 w-full rounded-lg my-4 placeholder:font-normal placeholder:tracking-normal font-extrabold tracking-widest text-blue focus:border-sky-600 focus:border-2'
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowPwd(!showPwd)}
                  className='absolute right-3 top-2'
                >
                  {showPwd ? (
                    <EyeCloseIcon className='w-6 h-6' />
                  ) : (
                    <EyeOpenIcon className='w-6 h-6' />
                  )}
                </button>
              </div>
              <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>
                Please provide password.
              </p>
            </div>

            {signup && (
              <div>
                <label className='font-semibold'>Confirm Password</label>
                <div className='relative'>
                  <input
                    type={showPwd ? "text" : "password"}
                    placeholder='Confirm your password'
                    value={form.cpassword}
                    onChange={(e) =>
                      setForm({ ...form, cpassword: e.target.value })
                    }
                    className='peer block border border-black outline-none p-2 w-full rounded-lg my-4 placeholder:font-normal placeholder:tracking-normal font-extrabold tracking-widest text-green-600 focus:border-sky-600 focus:border-2'
                  />
                  <button
                    type='button'
                    onClick={() => setShowPwd(!showPwd)}
                    className='absolute right-3 top-2'
                  >
                    {showPwd ? (
                      <EyeCloseIcon className='w-6 h-6' />
                    ) : (
                      <EyeOpenIcon className='w-6 h-6' />
                    )}
                  </button>
                </div>
                <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>
                  Please confirm password.
                </p>
              </div>
            )}

            <div className='w-full flex justify-end items-center'>
              <button
                disabled={loading}
                className='bg-blue px-2 py-3 rounded-md text-white flex justify-between items-center gap-2 disabled:cursor-not-allowed disabled:bg-blue/60'
              >
                <span>{signup ? "Sign up" : "Sign in"}</span>
                <span>
                  <ArrowIcon className='w-6 h-6' />
                </span>
              </button>
            </div>
          </form>
        </div>
        <footer className='gap-2 mt-2 flex justify-center items-center pb-5'>
          <h4>
            {signup ? "Already have an account?" : "Forgotten your password?"}
          </h4>
          <Link
            to={
              signup ? (referrer ? `/auth?referrer=${referrer}` : "/auth") : "/"
            }
            className='text-orange'
          >
            {signup ? "Sign in" : "Reset it"}
          </Link>
        </footer>
      </main>
    </section>
  );
};

export default Auth;
