import { useEffect, useState } from "react";
// Components
import Loader from "../../../../../../../components/loader";
import Error1 from "../../../../../../../components/error";
// Utils
import url from "../../../../../../../utils/url";
import { ArrowIcon, Confetti } from "../../../../../../../assets/icons";

const ReferralModal = ({ setModal }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchReferralBonus = async () => {
    try {
      const res = await fetch(url + "/api/v1/wallet/referral", {
        method: "PATCH",
      });
      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        setError(data || { msg: "Cannot get referral claim" });
        return;
      }
      setLoading(false);
      setData(data);
    } catch (error) {
      setError(error || { msg: "Cannot get referral claim" });
    }
  };

  useEffect(() => {
    fetchReferralBonus();
  }, []);

  if (loading) {
    return (
      <div className='h-half grid place-items-center'>
        <Loader className='w-10 h-10 sm:w-20 sm:h-20' />
      </div>
    );
  }

  if (error) {
    return (
      <div className='h-half grid place-items-center'>
        <Error1 error={error} />
      </div>
    );
  }

  return (
    <div className='p-3 flex flex-col items-center justify-between gap-10'>
      {data && data.status === "fail" ? (
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-20 h-20 mx-auto'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
            />
          </svg>
          <h1 className='text-center text-xl sm:text-2xl my-6'>{data.msg}</h1>
        </div>
      ) : (
        <div>
          <Confetti className='w-20 h-20 mx-auto' />
          <h1 className='text-center text-xl sm:text-2xl my-6'>{data.msg}</h1>
        </div>
      )}

      <div className='flex justify-end items-center w-full'>
        <button
          className='bg-blue text-white px-3 py-2 rounded-2xl flex justify-between items-center gap-2 mr-5'
          onClick={() => setModal({ open: false, isFund: true })}
        >
          Okay <ArrowIcon className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
};

export default ReferralModal;
