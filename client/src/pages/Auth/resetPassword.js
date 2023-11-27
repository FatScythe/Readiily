import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Toastify
import { toast } from "react-toastify";
// Utils
import url from "../../utils/url";
// Hook
import useTitle from "../../hooks/useTitle";

const ResetPwd = () => {
  useTitle("Reset Password");
  const queryParameters = new URLSearchParams(window.location.search);
  const passwordToken = queryParameters.get("token");
  const email = queryParameters.get("email");

  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const changePassword = async (e) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      toast.error("Please input a valid password");
      return;
    }

    try {
      const response = await fetch(url + "/api/v1/auth/reset-password", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, passwordToken, newPassword }),
      });
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.msg);
        return;
      }

      toast.success(data.msg);
      navigate("/auth");
    } catch (error) {
      toast.error(error);
      console.error(error);
    }
  };

  return (
    <div className='grid place-items-center bg-primary h-screen'>
      <main className='bg-white rounded-xl py-5 px-8 shadow-lg w-11/12  sm:w-2/3 md:w-1/2'>
        <h2 className='text-center capitalize text-3xl sm:font-semibold my-2'>
          reset password
        </h2>
        <p className='text-sm font-semibold italic my-5'>Email: {email}</p>
        <form onSubmit={(e) => changePassword(e)}>
          <div className='relative'>
            <input
              type='password'
              placeholder='New Password'
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              className='peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none'
            />
            <label
              htmlFor='Password'
              className='top-0 pointer-events-none absolute left-0 origin-left -translate-y-1/2 transform text-secondary opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-normal peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'
            >
              New Password
            </label>
          </div>

          <button
            type='submit'
            className='mt-6 w-full rounded-md bg-blue px-3 py-4 text-white focus:bg-gray-600 focus:outline-none first-letter:uppercase'
          >
            new password
          </button>
        </form>
      </main>
    </div>
  );
};

export default ResetPwd;
