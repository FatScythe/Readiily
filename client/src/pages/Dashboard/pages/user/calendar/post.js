import { useState } from "react";
// Icons
import { CancelIcon, InfoIcon, UploadIcon } from "../../../../../assets/icons";
// Toastify
import { toast } from "react-toastify";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { createRequest } from "../../../../../features/request/requestSlice";

const Post = ({ setIsPostOpen, form, setForm, myRequest }) => {
  const { brands, currentBrand } = useSelector((store) => store.brand);
  const [inputKey, setInputKey] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    setForm({ ...form, loading: true });
    e.preventDefault();
    const { desc, date } = form;

    if (!desc) {
      toast.info("Please provide a description");
      setForm({ ...form, loading: false });
      return;
    }
    if (!date) {
      toast.error("Please provide a schedule date");
      setForm({ ...form, loading: false });
      return;
    }
    if (brands && brands.nb < 1) {
      toast.info("Please create a brand");
      setForm({ ...form, loading: false });
      return;
    }
    if (!currentBrand) {
      toast.error("No Brand selected");
      setForm({ ...form, loading: false });
      return;
    }

    dispatch(createRequest({ ...form, brand: currentBrand.id }));
    setIsPostOpen(false);
    setForm({ desc: "", imageFile: null, date: "", loading: false });
  };

  const handleFont = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    if (file.size > 3145728) {
      toast.error("Image size must not be more than 3MB");
      return;
    }
    setForm({ ...form, imageFile: file });
  };

  const isToday =
    new Date(form.date).setHours(0, 0, 0, 0) ===
    new Date().setHours(0, 0, 0, 0);

  return (
    <div className='fixed bg-slate-200 z-40 -top-24 left-1/2 right-1/2 -translate-x-1/2 translate-y-1/2 w-full sm:w-3/4 md:w-1/2 h-4/5 border border-black'>
      <h3
        className='flex justify-end items-center w-full'
        onClick={() => {
          setIsPostOpen(false);
          setForm({ ...form, myRequest: null });
        }}
      >
        <CancelIcon className='w-6 h-6 bg-red-400 rounded-full p-1 m-2' />
      </h3>
      {myRequest ? (
        <div className='p-3'>
          <p className='bg-sky-500 p-2 text-white border border-transparent border-l-red-400 border-l-4 flex justify-start items-center gap-1'>
            <InfoIcon className='w-6 h-6' />
            <span>
              {currentBrand && currentBrand.name} already requested for this
              date
            </span>
          </p>
          <p>Description: {myRequest.desc}</p>
          {myRequest.image && (
            <a href={myRequest.image} target='_blank' download>
              <img src={myRequest.image} className='w-40 h-40' />
            </a>
          )}
        </div>
      ) : (
        <form className='p-1 sm:p-2' onSubmit={handleSubmit}>
          {isToday && (
            <p className='bg-sky-500 p-2 text-white border border-transparent border-l-red-400 border-l-4 flex justify-start items-center gap-1'>
              <InfoIcon className='w-6 h-6' />
              <span className='font-bold'>NB:</span> Design will be ready only
              after 24hrs
            </p>
          )}
          <h1 className='text-lg font-semibold sm:text-xl sm:my-2'>
            What to you intend to post today?
          </h1>
          <textarea
            className='w-11/12 mb-4 resize-y bg-transparent border border-black rounded-md outline-none p-2'
            rows={4}
            placeholder='Description'
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            value={form.desc}
          ></textarea>

          <h2 className='text-base sm:text-lg underline underline-offset-4'>
            Additional Information
          </h2>
          <div>
            <div className='w-32 h-32 rounded-md bg-transparent border border-black cursor-pointer'>
              <input
                type='file'
                key={inputKey}
                onChange={handleFont}
                className='hidden'
                accept='image/*'
                id='addimage'
              />
              <label htmlFor='addimage' className='w-full text-center'>
                {form.imageFile ? (
                  <>
                    <span className='overflow-hidden text-ellipsis flex flex-col justify-center items-center mt-2'>
                      <span>
                        {form.imageFile.name.slice(0, 10) ||
                          "Upload font (.ttf)"}
                      </span>
                      <span className='font-semibold text-black ml-2'>
                        {form.imageFile &&
                          (form.imageFile.size / (1024 * 1024)).toFixed(2) +
                            "MB"}
                      </span>
                    </span>
                  </>
                ) : (
                  <>
                    <h2>Prefered</h2>
                    <h3>Main Image</h3>
                  </>
                )}

                <UploadIcon className='w-6 h-6 mx-auto mt-3' />
              </label>
              <div className='w-full flex justify-end items-center'>
                {form.imageFile && (
                  <button
                    type='button'
                    onClick={(e) => {
                      let randomString = Math.random().toString(36);
                      setInputKey(randomString);
                      setForm({ ...form, imageFile: null });
                    }}
                  >
                    <CancelIcon className='w-5 h-5 bg-secondary rounded-full p-0.5 font-bold text-white stroke-2' />
                  </button>
                )}
              </div>
            </div>
            <div className='w-full flex justify-end items-center'>
              <button
                className='px-3 py-2 bg-sky-500 disabled:bg-sky-300 rounded-3xl font-semibold hover:opacity-50 text-white text-sm'
                type='submit'
                disabled={form.loading}
              >
                {form.loading ? "..." : "Confirm Request"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Post;
