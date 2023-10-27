import { useState } from "react";
// Icons
import {
  DoneIcon,
  DownloadIcon,
  DownloadPopUpIcon,
  MailIcon,
  PostIcon,
} from "../../../../../assets/icons";

const Date = ({
  date,
  isCurrentMonth,
  today,
  currentGrid,
  setCurrentGrid,
  index,
  setIsPostOpen,
}) => {
  const [isDone, setIsDone] = useState(false);
  const [isComment, setIsComment] = useState(false);
  return (
    <div
      onMouseEnter={() => setCurrentGrid(index)}
      onMouseLeave={() => {
        setCurrentGrid(null);
        setIsDone(false);
      }}
      className={`relative group ${
        !isCurrentMonth ? "opacity-40" : "opacity-100"
      } h-14 sm:h-24 ${
        today ? "bg-red-400 text-black sm:bg-black sm:text-white" : ""
      } sm:hover:bg-red-400 sm:hover:text-white cursor-pointer transition-all ease-in flex flex-col justify-center sm:justify-between items-center sm:items-stretch border border-t-0 border-r-0 border-[#E2E8F0] sm:p-2`}
      title={`${date.day()}, ${date.month() + 1}, ${date.year()}`}
    >
      <h4 className='font-bold sm:text-base sm:font-semibold md:font-normal'>
        {date.date()}
      </h4>
      {isDone && currentGrid === index && (
        <Options
          isComment={isComment}
          setIsComment={setIsComment}
          setIsDone={setIsDone}
        />
      )}
      <div className='scale-0 flex flex-col absolute top-0 bottom-0 right-0 left-0 sm:static sm:flex-row group-hover:scale-100 transition-all duration-500 justify-between items-center'>
        <button
          className='bg-green-200 opacity-90 sm:bg-transparent w-full h-full flex justify-center items-center sm:inline-block'
          onClick={() => setIsPostOpen(true)}
        >
          <PostIcon className='w-6 h-6 stroke-blue' />
        </button>
        <button
          onClick={() => setIsDone(!isDone)}
          className='bg-amber-300 w-full h-full sm:w-fit opacity-90 sm:bg-transparent flex justify-center items-center sm:inline-block'
        >
          <DoneIcon className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
};

export default Date;

const Options = ({ isComment, setIsComment, setIsDone }) => {
  return (
    <div>
      {isComment ? (
        <div className='absolute -left-12 sm:left-0 bg-lightpink sm:bg-white/80 sm:text-black bottom-0 sm:bottom-2 z-20 h-32 w-20 sm:w-full flex flex-col justify-between items-center sm:items-start overflow-hidden'>
          <textarea
            rows='10'
            className='w-full'
            placeholder='Comment'
          ></textarea>
          <div className='w-full mt-2 flex justify-end items-center'>
            <button
              className='bg-sky-300 text-sm px-2 py-1 rounded-xl'
              onClick={() => {
                setIsComment(false);
                setIsDone(false);
              }}
            >
              Post
            </button>
          </div>
        </div>
      ) : (
        <div className='absolute bg-lightpink sm:bg-white/80 sm:text-black bottom-0 sm:bottom-2 z-20 h-32 w-full flex flex-col justify-between items-center sm:items-start overflow-hidden'>
          <button
            className='flex justify-between items-center'
            onClick={() => setIsComment(true)}
          >
            <PostIcon className='w-6 h-6 stroke-blue' />
            <span className='text-sm hidden sm:block'>Comment</span>
          </button>
          <button className='flex justify-between items-center'>
            <MailIcon className='w-6 h-6 stroke-blue fill-blue' />
            <span className='text-sm hidden sm:block'>Send to mail</span>
          </button>
          <button className='flex justify-between items-center'>
            <DownloadIcon className='w-8 h-10' />
            <DownloadPopUpIcon className='w-8 h-10 hidden sm:block' />
          </button>
        </div>
      )}
    </div>
  );
};
