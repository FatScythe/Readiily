import { useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
// Hook
import useTitle from "../../../../../hooks/useTitle";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../../../../features/comment/commentSlice";
// Image
import heroGif from "../../../../../assets/images/hero.gif";

const UserHome = () => {
  useTitle("Overview");
  const [openBanner, setOpenBanner] = useOutletContext();
  const dispatch = useDispatch();
  const { account } = useSelector((store) => store.auth);
  const { brands } = useSelector((store) => store.brand);
  const { tickets } = useSelector((store) => store.ticket);
  const { currentBrand } = useSelector((store) => store.brand);
  const { comments } = useSelector((store) => store.comment);

  useEffect(() => {
    if (currentBrand) {
      dispatch(getComments(currentBrand.id));
    }
  }, [dispatch, currentBrand]);

  return (
    <section className='mb-20'>
      <div className='p-2 sm:p-3 md:p-4 w-full sm:w-11/12 mx-auto flex flex-col justify-start gap-4 items-center'>
        <h2 className='text-blue text-xl sm:text-3xl md:text-4xl font-semibold md:font-bold text-center'>
          Welcome, {account?.name.split(" ")[0] || "User"}
        </h2>
        {openBanner ? (
          <div className='w-full h-80 bg-slate-300 mx-auto rounded-md relative group overflow-hidden'>
            <button
              onClick={() => setOpenBanner(!openBanner)}
              className='px-5 py-3 bg-red-500 text-white hover:bg-black font-semibold absolute top-1 right-1 sm:-top-5 sm:-right-20 sm:group-hover:top-3 sm:group-hover:right-3 rounded-3xl transition-all duration-300'
            >
              Hide
            </button>
            <img
              src={heroGif}
              className='w-full h-full object-cover'
              alt='Hero'
            />
          </div>
        ) : (
          <div>
            <button
              onClick={() => setOpenBanner(!openBanner)}
              className='px-5 py-3 bg-black text-white hover:bg-black/60 font-semibold rounded-3xl transition-all duration-300'
            >
              Show Banner
            </button>
          </div>
        )}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-6 w-full'>
          <Link
            to='/dashboard/account/brand/create'
            className='bg-white/90 w-full sm:w-3/4 gap-1 sm:gap-3 shadow-md hover:shadow-lg text-blue py-10 px-8 h-full rounded-md text-xl flex flex-col justify-between items-center'
          >
            {brands ? (
              <>
                <span>{brands.nb}</span> <span>Brands</span>
              </>
            ) : (
              <>
                <span>...</span> <span>Brands</span>
              </>
            )}
          </Link>
          <Link
            to='/dashboard/account/wallet'
            className='bg-white/90 w-full sm:w-3/4 gap-1 sm:gap-3 shadow-md hover:shadow-lg text-blue py-10 px-8 h-full rounded-md text-xl flex flex-col justify-between items-center'
          >
            <span>My</span> <span>Wallet</span>
          </Link>
          <Link
            to='/dashboard/calendar'
            className='bg-white/90 w-full sm:w-3/4 gap-1 sm:gap-3 shadow-md hover:shadow-lg text-blue py-10 px-8 h-full rounded-md text-xl flex flex-col justify-between items-center'
          >
            <span>{comments ? comments.nb : 0}</span>
            <span>Comments</span>
          </Link>
          <Link
            to='/dashboard/account/ticket/tickets'
            className='bg-white/90 w-full sm:w-3/4 gap-1 sm:gap-3 shadow-md hover:shadow-lg text-blue py-10 px-8 h-full rounded-md text-xl flex flex-col justify-between items-center'
          >
            <span>{tickets ? tickets.nb : "..."}</span>
            <span>Tickets</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UserHome;
