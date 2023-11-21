import { useState } from "react";
// Components
import { Card, Referral } from "./walletComp";
import FundModal from "./fundModal";
import Loader from "../../../../../../../components/loader";
import Error1 from "../../../../../../../components/error";
// Hook
import useSWR from "swr";
import useTitle from "../../../../../../../hooks/useTitle";
// Utils
import url from "../../../../../../../utils/url";

const Wallet = () => {
  useTitle("My Wallet");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url + "/api/v1/wallet", fetcher);
  const [modal, setModal] = useState({ open: false, isFund: true });

  if (isLoading) {
    return (
      <div className='h-half grid place-items-center'>
        <Loader className='w-20 h-20' />
      </div>
    );
  }

  if ((data && data.msg) || error) {
    return (
      <div className='h-half grid place-items-center'>
        <Error1 msg={data || error} />
      </div>
    );
  }

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
      <Card modal={modal} setModal={setModal} data={data} />
      <Referral modal={modal} setModal={setModal} />
    </section>
  );
};

export default Wallet;

const ReferralModal = () => {
  return <div>Claim Referral</div>;
};
