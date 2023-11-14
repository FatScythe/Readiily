import { useState } from "react";
// Icons
import {
  DoneIcon,
  DownloadIcon,
  DownloadPopUpIcon,
  MailIcon,
  PostIcon,
} from "../../../../../assets/icons";
// Toastify
import { toast } from "react-toastify";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { createComment } from "../../../../../features/comment/commentSlice";

const EachDate = ({
  date,
  isCurrentMonth,
  today,
  currentGrid,
  setCurrentGrid,
  index,
  setIsPostOpen,
  isAfter,
  myRequest,
  form,
  setForm,
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
      title={`${date.$D}/${date.$M + 1}/${date.$y}`}
    >
      <h4 className='font-bold sm:text-base sm:font-semibold md:font-normal'>
        {date.date()}
      </h4>
      {isDone && currentGrid === index && (
        <Options
          isComment={isComment}
          setIsComment={setIsComment}
          setIsDone={setIsDone}
          today={today}
          isAfter={isAfter}
          myRequest={myRequest}
          form={form}
          index={index}
        />
      )}
      <div className='scale-0 flex flex-col absolute top-0 bottom-0 right-0 left-0 sm:static sm:flex-row group-hover:scale-100 transition-all duration-500 justify-between items-center'>
        {(myRequest.length > 0 || today || isAfter) && (
          <button
            className='bg-green-200 opacity-90 sm:bg-transparent w-full h-full flex justify-center items-center sm:inline-block'
            onClick={() => {
              setIsPostOpen(true);
              setForm({
                ...form,
                date: `${date.$y}-${date.$M + 1}-${date.$D}`,
              });
              if (myRequest.length > 0) {
                setForm({ ...form, myRequest: myRequest[0] });
              }
            }}
          >
            <PostIcon className='w-6 h-6 stroke-blue' />
          </button>
        )}
        <button
          onClick={() => {
            setIsDone(!isDone);
            setForm({
              ...form,
              date: `${date.$y}-${date.$M + 1}-${date.$D}`,
            });
          }}
          className='bg-amber-300 w-full h-full sm:w-fit opacity-90 sm:bg-transparent flex justify-center items-center sm:inline-block'
        >
          <DoneIcon className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
};

export default EachDate;

const Options = ({
  isComment,
  setIsComment,
  setIsDone,
  today,
  isAfter,
  myRequest,
  form,
  index,
}) => {
  const { currentBrand } = useSelector((store) => store.brand);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleComment = async () => {
    if (!comment) {
      toast.info("Please Provide a comment");
      setIsComment(false);
      setIsDone(false);
      return;
    }
    if (!form.date) {
      toast.error("No request date");
      return;
    }
    if (!currentBrand) {
      toast.error("No current brand");
      return;
    }
    if (!myRequest) {
      toast.error("No Request");
      return;
    }

    dispatch(
      createComment({
        comment,
        requestId: myRequest[0]._id,
        brandId: currentBrand.id,
        date: form.date,
      })
    );
    setIsComment(false);
    setIsDone(false);
    setComment("");
  };

  return (
    <div>
      {isComment ? (
        <div
          className={`absolute ${
            index % 7 === 0 ? "left-12" : "-left-28"
          } bg-lightpink sm:bg-white/80 sm:text-black bottom-0 sm:bottom-2 z-20 h-32 w-36 sm:w-full flex flex-col justify-between items-center sm:items-start overflow-hidden`}
        >
          {myRequest && myRequest.length > 0 ? (
            <>
              <textarea
                rows='10'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className='w-full'
                placeholder='Comment'
              ></textarea>
              <div className='w-full mt-2 flex justify-end items-center'>
                <button
                  className='bg-sky-300 text-sm px-2 py-1 rounded-xl'
                  onClick={handleComment}
                >
                  Post
                </button>
              </div>
            </>
          ) : (
            <div className='flex flex-col justify-between items-start gap-4'>
              <p className='text-sm sm:text-base'>Make a request to comment</p>
              <div className='flex justify-end items-center w-full'>
                <button
                  className='bg-red-300 px-3 py-2 rounded-md'
                  onClick={() => {
                    setIsComment(false);
                    setIsDone(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className={`absolute ${
            index % 7 === 0 ? "left-12" : "-left-10"
          } bg-lightpink sm:bg-white/80 sm:text-black bottom-0 sm:bottom-2 z-20 h-32 w-full flex flex-col justify-between items-center sm:items-start overflow-hidden`}
        >
          {(isAfter || today) && (
            <button
              className='flex justify-between items-center'
              onClick={() => setIsComment(true)}
            >
              <PostIcon className='w-6 h-6 stroke-blue' />
              <span className='text-sm hidden sm:block'>Comment</span>
            </button>
          )}
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
