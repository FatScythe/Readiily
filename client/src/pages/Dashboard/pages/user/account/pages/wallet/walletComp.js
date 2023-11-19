// Icons
import {
  ArrowUpIcon,
  ChainLinkIcon,
  WalletIcon,
} from "../../../../../../../assets/icons";

export const Card = ({ modal, setModal, data }) => {
  const { walletId, walletBalance, income, expense } = data;

  return (
    <main className='h-64 rounded-lg shadow-md p-3 text-white bg-gradient-to-r from-secondary to-blue'>
      <div className='flex justify-between items-stretch h-full p-3'>
        <div className='flex flex-col justify-between items-start'>
          <h3 className='text-gray-300 sm:font-semibold'>My wallet</h3>
          <h3 className='text-sm sm:text-xl md:text-3xl sm:tracking-wide uppercase'>
            **** **** **** {walletId.slice(-4)}
          </h3>
          <section className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5'>
            <div className='flex justify-start items-center gap-4'>
              <h3 className='bg-cyan-100 p-1 sm:p-3 rounded-md'>
                <ArrowUpIcon className='w-6 h-6 rotate-180 stroke-2 stroke-sky-700' />
              </h3>
              <h3 className='flex flex-col justify-between items-start'>
                <span className='text-lg sm:text-xl font-bold'>
                  <span>{income}</span>
                  <span>$</span>
                </span>
                <span className='text-sm'>Income</span>
              </h3>
            </div>
            <div className='flex justify-start items-center gap-4'>
              <h3 className='bg-red-200 p-1 sm:p-3 rounded-md'>
                <ArrowUpIcon className='w-6 h-6 stroke-2 stroke-red-600' />
              </h3>
              <h3 className='flex flex-col justify-between items-start'>
                <span className='text-lg sm:text-xl font-bold'>
                  <span>{expense}</span>
                  <span>$</span>
                </span>
                <span className='text-sm'>Expense</span>
              </h3>
            </div>
          </section>
        </div>

        <div className='flex flex-col justify-between items-end'>
          <h3 className='text-gray-300 sm:font-semibold'>Available funds</h3>

          <h1 className='text-lg sm:text-2xl md:text-4xl font-semibold'>
            <span>{walletBalance}</span>
            <span className='text-gray-300 ml-2'>$</span>
          </h1>

          <button
            className='bg-sky-400 text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-gray-100'
            onClick={() => setModal({ ...modal, open: true, isFund: true })}
          >
            Fund Wallet
          </button>
        </div>
      </div>
    </main>
  );
};

export const Referral = ({ modal, setModal }) => {
  return (
    <section className='my-4'>
      <h1 className='text-xl font-semibold sm:text-3xl'>
        Earn money join our Referral Program
      </h1>
      <p className='text-lg sm:text-xl my-2'>
        Start referring to help brands increase visibility, engagement, and
        create consistent captivating brand designs with prompts
      </p>

      <p className='sm:text-lg my-2'>
        Two referrals for a redeemable $1 for design 🎊
      </p>

      <div className='flex flex-col sm:flex-row justify-start items-start gap-4 my-4'>
        <button className='bg-sky-500 px-3 py-2 rounded-md text-white flex justify-between items-center gap-2'>
          <ChainLinkIcon className='w-6 h-6' />
          <span>Get your referral link</span>
        </button>
        <button
          className='bg-purple-500 px-3 py-2 rounded-md text-white flex justify-between items-center gap-2'
          onClick={() => setModal({ ...modal, open: true, isFund: false })}
        >
          <WalletIcon className='w-6 h-6' />
          <span>Claim referral bonus</span>
        </button>
      </div>
    </section>
  );
};
