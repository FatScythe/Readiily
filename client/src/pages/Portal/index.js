import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
// Image
import Rlogo from "../../assets/images/Rlogo.png";
import RIcon from "../../assets/images/R-light.png";
// Icons
import { ArrowIcon, EyeCloseIcon, EyeOpenIcon } from "../../assets/icons";
// Toastify
import { toast } from "react-toastify";
// Hooks
import useTitle from "../../hooks/useTitle";
// Redux
import { useDispatch } from "react-redux";
import { saveAccount } from "../../features/auth/authSlice";
// Util
import url from "../../utils/url";

const Portal = () => {
  useTitle("Portal");
  let [searchParams, setSearchParams] = useSearchParams({ admin: false });
  const [showPwd, setShowPwd] = useState(false);
  const admin = searchParams.get("admin") === "true";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    token: "",
  });

  const handleAuth = async (e) => {
    try {
      e.preventDefault();
      const { email, password, token } = form;
      if (!email) {
        toast.info("Please provide email");
        return;
      }

      if (admin && !password) {
        toast.info("Provide your password");
        return;
      }
      if (!admin && !token) {
        toast.info("Provide token");
        return;
      }

      const res = await fetch(
        url + `/api/v1/auth/login/${admin ? "admin" : "designer"}`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, password, token }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(
          data?.msg || "Something went wrong, Check your internet connection"
        );
        return;
      }

      console.log(data);
      dispatch(saveAccount(data));

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id='auth' className='bg-white/75 h-screen'>
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
          <button
            onClick={(e) => {
              setSearchParams((prev) => {
                prev.set("admin", admin ? false : true);
                return prev;
              });
            }}
            className='text-orange underline underline-offset-4 mx-2'
          >
            {admin ? "Designer" : "Admin"}
          </button>
        </div>
      </nav>
      <main className='h-full pt-5 text-blue'>
        <header className='text-center text-lg sm:text-2xl md:text-3xl font-bold'>
          Readiily In-house Sign in
        </header>
        <div className='w-11/12 sm:w-3/4 md:w-3/6 mx-auto rounded-md mt-5 px-4 py-3 border-2 border-blue'>
          <form
            className='w-full sm:w-4/5 mt-3 mx-auto pt-2'
            onSubmit={handleAuth}
          >
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
            {admin ? (
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
                    className='peer block border border-black outline-none p-2 w-full rounded-lg my-4 placeholder:font-normal placeholder:tracking-normal font-extrabold tracking-widest text-yellow-500 focus:border-sky-600 focus:border-2'
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
            ) : (
              <div>
                <label className='font-semibold'>Token</label>
                <div className='relative'>
                  <input
                    type={showPwd ? "text" : "password"}
                    placeholder='Enter your token'
                    value={form.token}
                    onChange={(e) =>
                      setForm({ ...form, token: e.target.value })
                    }
                    className='peer block border border-black outline-none p-2 w-full rounded-lg my-4 placeholder:font-normal placeholder:tracking-normal font-extrabold tracking-widest text-yellow-500 focus:border-sky-600 focus:border-2'
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
                  Please provide token.
                </p>
              </div>
            )}

            <div className='w-full flex justify-end items-center'>
              <button
                type='submit'
                className='bg-blue px-2 py-3 rounded-md text-white flex justify-between items-center gap-2'
              >
                <span>Sign in</span>
                <span>
                  <ArrowIcon className='w-6 h-6' />
                </span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Portal;
