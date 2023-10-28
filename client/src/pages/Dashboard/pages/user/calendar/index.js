import { useState } from "react";
// Components
import Post from "./post";
import Date from "./date";
// Hook
import useTitle from "../../../../../hooks/useTitle";
import dayjs from "dayjs";
// Util
import { generateDate, days, months } from "../../../../../utils/calendar";
import { ArrowIcon } from "../../../../../assets/icons";

const Calendar = () => {
  useTitle("Calendar");
  const [currentGrid, setCurrentGrid] = useState(null);
  const [isPostOpen, setIsPostOpen] = useState(false);
  const currentDate = dayjs();
  const [day, setDay] = useState(currentDate);

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

        {isPostOpen && <Post setIsPostOpen={setIsPostOpen} />}

        {generateDate(day.month(), day.year()).map(
          ({ date, isCurrentMonth, today }, index) => {
            return (
              <Date
                date={date}
                isCurrentMonth={isCurrentMonth}
                today={today}
                currentGrid={currentGrid}
                setCurrentGrid={setCurrentGrid}
                index={index}
                key={index}
                setIsPostOpen={setIsPostOpen}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default Calendar;
