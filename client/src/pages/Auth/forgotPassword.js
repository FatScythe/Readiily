import { useState } from "react";
// Toastify
import { toast } from "react-toastify";
// Utils
import url from "../../utils/url";
// Hook
import useTitle from "../../hooks/useTitle";

const ForgotPwd = () => {
  useTitle("Forgot Password");
  const [email, setEmail] = useState("");

  async function handleForgotPwd(e) {
    e.preventDefault();
    if (!email) {
      toast.error("Please input a valid email");
      return;
    }

    try {
      const response = await fetch(url + "/api/v1/auth/forgot-password", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.msg);
        return;
      }
      setEmail("");
      toast.success(data.msg);
    } catch (error) {
      toast.error(error);
      console.error(error);
    }
  }
  return (
    <section className='grid place-items-center bg-primary h-screen'>
      <main className='bg-white rounded-xl py-5 px-8 shadow-lg w-11/12 sm:w-2/3 md:w-1/2'>
        <h1 className='text-center capitalize text-3xl  sm:font-semibold'>
          forgot password
        </h1>
        <form onSubmit={(e) => handleForgotPwd(e)}>
          <div className='relative mt-6'>
            <input
              type='text'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none'
            />
            <label
              htmlFor='Email'
              className='top-0 pointer-events-none absolute left-0 origin-left -translate-y-1/2 transform text-secondary opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-normal peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'
            >
              Email
            </label>
          </div>

          <button
            type='submit'
            className='mt-6 w-full rounded-md bg-blue px-3 py-4 text-white focus:bg-gray-600 focus:outline-none first-letter:uppercase'
          >
            get reset password link
          </button>
        </form>
      </main>
    </section>
  );
};

export default ForgotPwd;
