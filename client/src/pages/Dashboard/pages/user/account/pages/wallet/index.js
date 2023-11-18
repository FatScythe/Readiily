import { useState } from "react";
// Components
import { Card, Referral } from "./walletComp";
import { ArrowIcon } from "../../../../../../../assets/icons";

const Wallet = () => {
  const [modal, setModal] = useState({ open: false, isFund: true });
  return (
    <section className='m-3 relative'>
      {modal.open && (
        <div className=''>
          <div
            className='fixed top-0 bottom-0 right-0 left-0 bg-black/20'
            onClick={() => setModal({ open: false, isFund: true })}
          ></div>
          <div className='bg-white fixed z-10 top-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-full sm:w-3/4 md:w-1/2 rounded-xl'>
            {modal.isFund ? <FundModal /> : <ReferralModal />}
          </div>
        </div>
      )}
      <Card modal={modal} setModal={setModal} />
      <Referral modal={modal} setModal={setModal} />
    </section>
  );
};

export default Wallet;

const FundModal = () => {
  const handleFund = (e) => {
    e.preventDefault();
  };
  return (
    <div className='py-4 px-8'>
      <h1 className='text-xl border border-transparent border-b-black pb-3'>
        Fund Wallet
      </h1>
      <form className='my-3' onSubmit={handleFund}>
        <div className='flex flex-col justify-between items-start gap-3'>
          <label className='text-lg font-semibold'>Amount</label>
          <input
            type='number'
            placeholder='00.00'
            className='w-full bg-transparent border border-black outline-none rounded-sm p-2'
          />
        </div>

        <div className='flex justify-end items-center mt-6'>
          <button className='bg-sky-500 rounded-md px-4 py-2 text-sm sm:text-base text-white flex justify-between items-center gap-2'>
            <span>Proceed to payment</span> <ArrowIcon className='w-6 h-6' />
          </button>
        </div>
      </form>
    </div>
  );
};
const ReferralModal = () => {
  return <div>Claim Referral</div>;
};
