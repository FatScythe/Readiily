import { useState } from "react";
// Toastify
import { toast } from "react-toastify";
// Icon
import { CancelIcon, UploadLogoIcon } from "../../../../../assets/icons";
// Utils
import url from "../../../../../utils/url";
import { downloadCloudinary } from "../../../../../utils/downloadFile";
// Component
import Comment from "../../../../../components/dashboard/comment";

const UploadResponse = ({ view, setView }) => {
  const [file, setFile] = useState(null);
  const [inputKey, setInputKey] = useState("");
  const [loading, setLoading] = useState(false);
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!file) {
        setLoading(false);
        toast.error("Select a file to upload");
        return;
      }

      const formData = new FormData();

      formData.append("requestId", view.request._id);
      formData.append("designFile", file);

      const res = await fetch(url + "/api/v1/request/response", {
        method: "PATCH",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        toast.error(data.msg || "Unable to upload, Something went wrong");
        return;
      }

      setLoading(false);
      toast.success(data.msg);
      setFile(null);
      setView({ open: false, request: null });
    } catch (error) {
      setLoading(false);
      toast.error(error?.msg || "Unable to upload, Something went wrong");
      console.error(error);
    }
  };

  const handleFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    if (file.size > 3145728) {
      toast.error("Image size must not be more than 3MB");
      return;
    }
    setFile(file);
  };

  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 bg-black/5'>
      <div className='absolute h-full top-1/2 sm:top-3/4 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-1/2 md::w-1/3 bg-grayish p-2 rounded-xl'>
        <header className='w-full flex justify-between items-center my-3'>
          <button
            className='underline underline-offset-2'
            onClick={() => setView({ ...view, comment: !view.comment })}
          >
            {view.comment ? "Request" : "Comment"}
          </button>
          <button
            onClick={() => setView({ ...view, open: false, request: null })}
          >
            <CancelIcon className='w-6 h-6 bg-red-500 rounded-full stroke-white stroke-2' />
          </button>
        </header>

        {view.comment ? (
          <Comment id={view.request._id} />
        ) : (
          <div className='w-5/6 sm:w-3/4 mx-auto'>
            <p className='border-2 border-black rounded-lg h-32 overflow-x-hidden overflow-y-scroll'>
              {view.request.desc}
            </p>
            <h2 className='text-lg sm:text-xl '>Preferred brand image</h2>

            {view.request.image ? (
              <a href={downloadCloudinary(view.request.image)} download>
                download
              </a>
            ) : (
              <p>No preferred image</p>
            )}
            <form className='w-full my-5'>
              <div className='flex justify-between items-center outline-none border border-gray-400 rounded-md p-3 '>
                <label
                  htmlFor='upload'
                  className='flex justify-between items-center'
                >
                  <p className='flex justify-start items-center gap-1'>
                    <span className='bg-secondary/25 p-2 rounded-md'>
                      <UploadLogoIcon className='w-6 h-6' />
                    </span>
                    <span className='overflow-hidden text-ellipsis'>
                      {(file && file.name.slice(0, 10)) || "Upload"}
                      <span className='font-semibold text-blue ml-2'>
                        {file && (file.size / (1024 * 1024)).toFixed(2) + "MB"}
                      </span>
                    </span>
                  </p>
                </label>
                <input
                  id='upload'
                  key={inputKey}
                  onChange={handleFile}
                  type='file'
                  accept='image/*'
                  className='hidden'
                />
                <div>
                  {file && (
                    <button
                      type='button'
                      onClick={(e) => {
                        let randomString = Math.random().toString(36);
                        setInputKey(randomString);
                        setFile(null);
                      }}
                    >
                      <CancelIcon className='w-6 h-6 bg-secondary rounded-full p-0.5 font-bold text-white stroke-2' />
                    </button>
                  )}
                </div>
              </div>

              <div className='mt-3'>
                <button
                  onClick={handleUpload}
                  type='submit'
                  className='bg-sky-500 rounded-lg w-full py-4 text-white text-center disabled:bg-sky-200'
                  disabled={loading}
                >
                  {loading ? "Uploading" : " Upload design"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadResponse;
