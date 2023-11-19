import { useState } from "react";
// Toastify
import { toast } from "react-toastify";
// Icon
import { ArrowIcon } from "../../../../../../../assets/icons";
// Redux
import { useSelector } from "react-redux";
// Util
import url from "../../../../../../../utils/url";

const FundModal = () => {
  const { account } = useSelector((store) => store.auth);
  const [form, setForm] = useState({ amount: 0, link: "" });
  const [loading, setLoading] = useState(false);
  const handleFund = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (!form.amount && typeof form.amount !== "number") {
        setLoading(false);
        toast.info("Provide a valid amount");
        return;
      }

      const res = await fetch(url + "/api/v1/transaction", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          amount: form.amount,
          detail: `Fund wallet`,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        toast.error(
          data?.msg || "Something went wrong cannot complete payment"
        );
        return;
      }

      toast.success(data.msg);

      payWithFlutter(data.transaction);
      setLoading(false);
    } catch (error) {}
  };

  const payWithFlutter = async (transaction) => {
    const { amount, _id } = transaction;
    const { name, email } = account;
    const res = await fetch(url + "/api/v1/payment/flutterwave/acceptPayment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email,
        amount,
        ref: _id,
        name,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.msg);
      return;
    }

    setForm({ ...form, link: data.data.link });
    console.log(data);
    window.open(data.data.link, "_self");
  };
  return (
    <div className='py-4 px-8'>
      <h1 className='text-xl border border-transparent border-b-black pb-3'>
        Fund Wallet
      </h1>
      <form className='my-3' onSubmit={handleFund}>
        <div className='flex flex-col justify-between items-start gap-3'>
          <label className='text-lg font-semibold'>Amount(USD)</label>
          <input
            type='number'
            placeholder='$00.00'
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className='w-full bg-transparent border border-black outline-none rounded-sm p-2'
          />
        </div>

        <div className='flex justify-end items-center mt-6'>
          <button
            disabled={loading}
            className='bg-sky-500 rounded-md px-4 py-2 text-sm sm:text-base text-white flex justify-between items-center gap-2 disabled:bg-sky-200'
          >
            <span>Proceed to payment</span>
            <ArrowIcon className='w-6 h-6' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FundModal;
