import { useEffect, useState } from "react";
// Components
import Loader from "../../../../../components/loader";
import Post from "./post";
import EachDate from "./date";
// Hook
import useTitle from "../../../../../hooks/useTitle";
import dayjs from "dayjs";
// Util
import { generateDate, days, months } from "../../../../../utils/calendar";
import { ArrowIcon, InfoIcon } from "../../../../../assets/icons";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getRequests } from "../../../../../features/request/requestSlice";

const Calendar = () => {
  useTitle("Calendar");
  const dispatch = useDispatch();
  const { currentBrand } = useSelector((store) => store.brand);
  const { loading, requests } = useSelector((store) => store.request);
  const [currentGrid, setCurrentGrid] = useState(null);
  const [isPostOpen, setIsPostOpen] = useState(false);
  const currentDate = dayjs();
  const [day, setDay] = useState(currentDate);
  // Post Request
  const [form, setForm] = useState({
    desc: "",
    imageFile: null,
    date: "",
    myRequest: null,
    loading: false,
  });

  useEffect(() => {
    if (currentBrand) {
      dispatch(getRequests(currentBrand?.id));
    }
  }, [currentBrand, dispatch]);

  if (loading) {
    return (
      <div className='h-half grid place-items-center'>
        <Loader className='w-20 h-20' />
      </div>
    );
  }

  if (!currentBrand) {
    return (
      <div className='h-screen grid place-items-center'>
        <h1 className='text-xl sm:text-3xl font-semibold flex flex-col justify-start items-center'>
          <span> Please select a brand to schedule request</span>
          <code className='text-base sm:text-lg flex justify-start items-start sm:items-center gap-2 mt-5'>
            <InfoIcon className='w-8 sm:w-10 h-8 sm:h-10' />
            <span>
              You can do that at the top right hand corner of the dashboard
              homepage
            </span>
          </code>
        </h1>
      </div>
    );
  }

  if (!loading && !requests) {
    return <div>Error...</div>;
  }

  return (
    <section id='calendar' className='bg-primary/60'>
      <h1 className='font-bold text-xl sm:text-2xl text-blue capitalize flex justify-between items-center'>
        <span>
          {months[day.month()]} {day.year()}
        </span>
        <span className='invisible flex justify-between items-center gap-5'>
          <button onClick={() => setDay(day.month(day.month() - 1))}>
            <ArrowIcon className='w-6 h-6 stroke-black fill-black rotate-180' />
          </button>
          <button
            className='text-black text-sm'
            onClick={() => setDay(currentDate)}
          >
            Today
          </button>
          <button onClick={() => setDay(day.month(day.month() + 1))}>
            <ArrowIcon className='w-6 h-6 stroke-black fill-black mr-5' />
          </button>
        </span>
      </h1>
      <div className='grid grid-cols-7 relative bg-white shadow-md rounded-md md:p-2'>
        {days.map((day, index) => {
          return (
            <h2
              className='h-14 flex justify-center items-center w-full text-sm text-secondary font-semibold'
              key={day + index.toString()}
            >
              <span className='uppercase'>{day.substring(0, 1)}</span>
              <span className='hidden md:inline'>{day.substring(1)}</span>
            </h2>
          );
        })}

        {isPostOpen && (
          <Post
            setIsPostOpen={setIsPostOpen}
            form={form}
            setForm={setForm}
            myRequest={form.myRequest}
          />
        )}

        {generateDate(day.month(), day.year(), requests.requests).map(
          ({ date, isCurrentMonth, today, isAfter, myRequest }, index) => {
            return (
              <EachDate
                date={date}
                isCurrentMonth={isCurrentMonth}
                today={today}
                currentGrid={currentGrid}
                setCurrentGrid={setCurrentGrid}
                index={index}
                key={index}
                setIsPostOpen={setIsPostOpen}
                isAfter={isAfter}
                myRequest={myRequest}
                form={form}
                setForm={setForm}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default Calendar;
