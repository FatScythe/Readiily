import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
// Image
import Rlogo from "../../assets/images/Rlogo.png";
import RIcon from "../../assets/images/R-light.png";
// Icons
import { ArrowIcon, GoogleIcon } from "../../assets/icons";
// Toastify
import { toast } from "react-toastify";
// Hooks
import useTitle from "../../hooks/useTitle";
// Utils
import url from "../../utils/url";

const Auth = () => {
  let [searchParams, setSearchParams] = useSearchParams({ signup: false });
  const signup = searchParams.get("signup") === "true";
  // const navigate = useNavigate();

  useTitle(signup ? "Sign-up" : "Login");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleGoogleAuth = () => {
    window.open("http://localhost:5000/api/v1/auth/login/google", "_self");
  };

  const handleAuth = async (e) => {
    try {
      e.preventDefault();
      const { name, email, password, cpassword } = form;
      if (!email || !password) {
        toast.info("Please provide email and password!");
        return;
      }

      if (signup && cpassword !== password) {
        toast.info("Passwords do not match");
      }

      const response = await fetch(url + "/api/v1/auth/login/password", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, username: email, password }),
      });

      const data = await response.json();

      console.log(response);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id='auth'
      className={`${signup ? "h-full" : "h-screen"} bg-white/75`}
    >
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
                return prev;
              });
            }}
            className='text-orange mx-2'
          >
            {signup ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </nav>
      <main className='h-full pt-5 text-blue'>
        <header className='text-center text-3xl font-bold'>
          {signup ? "Sign in to Readiily" : "Start designing with Readiily"}
        </header>
        <div className='w-11/12 sm:w-3/4 md:w-3/6 mx-auto rounded-md mt-5 px-4 py-10 border-2 border-blue'>
          <button
            onClick={handleGoogleAuth}
            className='flex justify-center items-center gap-3 w-full sm:w-4/5 mx-auto px-3 py-2 border border-black shadow-md hover:shadow-xl rounded-md'
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
                  className='block border border-black outline-none p-2 w-full rounded-lg my-4'
                />
              </div>
            )}
            <div>
              <label className='font-semibold'>Email</label>
              <input
                type='text'
                placeholder='Enter your email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className='block border border-black outline-none p-2 w-full rounded-lg my-4'
              />
            </div>
            <div>
              <label className='font-semibold'>Password</label>
              <input
                type='password'
                placeholder='Enter your password'
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className='block border border-black outline-none p-2 w-full rounded-lg my-4 placeholder:font-normal placeholder:tracking-normal font-extrabold tracking-widest text-yellow-500'
              />
            </div>

            {signup && (
              <div>
                <label className='font-semibold'>Confirm Password</label>
                <input
                  type='password'
                  placeholder='Confirm your password'
                  value={form.cpassword}
                  onChange={(e) =>
                    setForm({ ...form, cpassword: e.target.value })
                  }
                  className='block border border-black outline-none p-2 w-full rounded-lg my-4 placeholder:font-normal placeholder:tracking-normal font-extrabold tracking-widest text-green-600'
                />
              </div>
            )}

            <div className='w-full flex justify-end items-center'>
              <button className='bg-blue px-2 py-3 rounded-md text-white flex justify-between items-center gap-2'>
                <span>{signup ? "Sign up" : "Sign in"}</span>
                <span>
                  <ArrowIcon className='w-6 h-6' />
                </span>
              </button>
            </div>
          </form>
        </div>
        <footer className='gap-2 mt-2 flex justify-center items-center pb-20'>
          <h4>
            {signup ? "Already have an account?" : "Forgotten your password?"}
          </h4>
          <Link to={signup ? "/auth" : "/"} className='text-orange'>
            {signup ? "Sign in" : "Reset it"}
          </Link>
        </footer>
      </main>
    </section>
  );
};

export default Auth;
