// Icons
import {
  UploadLogoIcon,
  CancelIcon,
} from "../../../../../../../../assets/icons";
// Toastify
import { toast } from "react-toastify";

export const LightBackground = ({ form, setForm }) => {
  const handleBkg = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    if (file.size > 3145728) {
      toast.error("Image size must not be more than 3MB");
      return;
    }
    setForm({ ...form, light: file });
  };
  return (
    <div className='flex flex-col justify-between items-stretch w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 p-1 sm:p-2'>
      <h2 className='text-blue text-lg'>Logo for Light Background</h2>
      <div className='flex justify-between items-center outline-none border border-gray-400 rounded-md p-3 '>
        <div className='basis-11/12 '>
          <label
            htmlFor='upload-light'
            className='flex justify-between items-center'
          >
            <p className='flex justify-between items-center gap-2'>
              <span className='bg-secondary/25 p-2 rounded-md'>
                <UploadLogoIcon className='w-6 h-6' />
              </span>
              <span className='overflow-hidden text-ellipsis'>
                {form.light?.name || "Upload"}
                <span className='font-semibold text-blue ml-2'>
                  {form.light &&
                    (form.light?.size / (1024 * 1024)).toFixed(2) + "MB"}
                </span>
              </span>
            </p>
          </label>
          <input
            id='upload-light'
            onChange={handleBkg}
            type='file'
            accept='image/*'
            className='hidden'
          />
        </div>

        <div>
          {form.light && (
            <button
              type='button'
              onClick={() => setForm({ ...form, light: null })}
            >
              <CancelIcon className='w-6 h-6 bg-secondary rounded-full p-0.5 font-bold text-white stroke-2' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const DarkBackground = ({ form, setForm }) => {
  const handleBkg = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    if (file.size > 3145728) {
      toast.error("Image size must not be more than 3MB");
      return;
    }
    setForm({ ...form, dark: file });
  };
  return (
    <div className='flex flex-col justify-between items-stretch w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 p-1 sm:p-2'>
      <h2 className='text-blue text-lg'>Logo for Dark Background</h2>
      <div className='flex justify-between items-center outline-none border border-gray-400 rounded-md p-3 '>
        <div className='basis-11/12 '>
          <label
            htmlFor='upload-dark'
            className='flex justify-between items-center'
          >
            <p className='flex justify-between items-center gap-2'>
              <span className='bg-secondary/25 p-2 rounded-md'>
                <UploadLogoIcon className='w-6 h-6' />
              </span>
              <span className='overflow-hidden text-ellipsis'>
                {form.dark?.name || "Upload"}
                <span className='font-semibold text-blue ml-2'>
                  {form.dark &&
                    (form.dark?.size / (1024 * 1024)).toFixed(2) + "MB"}
                </span>
              </span>
            </p>
          </label>
          <input
            id='upload-dark'
            onChange={handleBkg}
            type='file'
            accept='image/*'
            className='hidden'
          />
        </div>

        <div>
          {form.dark && (
            <button
              type='button'
              onClick={() => setForm({ ...form, dark: null })}
            >
              <CancelIcon className='w-6 h-6 bg-secondary rounded-full p-0.5 font-bold text-white stroke-2' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
