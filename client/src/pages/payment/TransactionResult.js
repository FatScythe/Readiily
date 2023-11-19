import "./payment.css";
import { Link } from "react-router-dom";
//Images
import done from "../../assets/images/done.png";
import failed from "../../assets/images/failed.svg";
// Redux
import { useSelector } from "react-redux";
// Icon
import { Confetti, ErrorIcon } from "../../assets/icons";

const Transaction = ({ type }) => {
  const { account } = useSelector((store) => store.auth);
  return (
    <section className='transaction container grid place-items-center h-screen bg-no-repeat bg-left-top'>
      <img
        src={type === "error" ? failed : done}
        alt='Done'
        className='h-96 object-contain'
      />
      <h2 className='text-base md:text-xl font-medium leading-10 flex flex-col-reverse sm:flex-row justify-center items-center gap-2'>
        <span>
          Hey {account?.name || ""},
          {type === "error" ? " we could not complete" : " thank you for"} your
          payment.
        </span>
        {type === "error" ? (
          <ErrorIcon className='w-10 h-10' />
        ) : (
          <Confetti className='w-10 h-10' />
        )}
      </h2>
      <Link
        to='/dashboard'
        className='underline underline-offset-2 text-xl text-blue'
      >
        Go back
      </Link>
      <p className='sm:text-base font-bold first-letter:text-xs sm:first-letter:text-normal '>
        <sup>&copy;</sup> READIILY
      </p>
    </section>
  );
};

export default Transaction;
