import { useState } from "react";
// Icons
import {
  UploadLogoIcon,
  CancelIcon,
} from "../../../../../../../../assets/icons";
// Utils
import { fonts } from "./utils";
// Toastify
import { toast } from "react-toastify";

const Font = ({ form, setForm }) => {
  const [customFont, setCustomFont] = useState(false);
  const [inputKey, setInputKey] = useState("");

  const handleFont = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    if (file.size > 3145728) {
      toast.error("Font size must not be more than 3MB");
      return;
    }
    setForm({ ...form, fontFile: file });
  };

  return (
    <div className='flex flex-col justify-between items-stretch w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 p-1 sm:p-2'>
      <h2 className='text-blue text-lg flex justify-between items-center'>
        <p>Font</p>
        <div className='flex justify-between items-center gap-2'>
          <input
            onChange={(e) => setCustomFont(e.target.checked)}
            type='checkbox'
            className='w-6 h-6'
          />
          <span
            className={`text-sm sm:text-base ${
              customFont ? "text-black" : "text-gray-300"
            }`}
          >
            Use a Custom Font
          </span>
        </div>
      </h2>
      <div>
        {customFont ? (
          <main className='flex flex-col items-stretch justify-between gap-2'>
            <input
              type='search'
              value={form.font}
              placeholder='Custom font name'
              onChange={(e) => setForm({ ...form, font: e.target.value })}
              className='w-full outline-none border border-gray-400 rounded-md p-2'
            />
            <div className='flex justify-between items-center outline-none border border-gray-400 rounded-md p-2'>
              <div className='basis-11/12 overflow-hidden'>
                <label
                  htmlFor='font'
                  className='flex justify-between items-center'
                  onChange={(e) => setForm({ ...form, font: e.target.value })}
                  placeholder='Your custom font name'
                >
                  <p className='flex justify-start items-center gap-2'>
                    <span className='bg-secondary/25 p-2 rounded-md'>
                      <UploadLogoIcon className='w-4 h-4' />
                    </span>
                    <span className='overflow-hidden text-ellipsis w-full'>
                      <span>
                        {form.fontFile?.name.slice(0, 10) ||
                          "Upload font (.ttf)"}
                      </span>
                      <span className='font-semibold text-blue ml-2'>
                        {form.fontFile &&
                          (form.fontFile?.size / (1024 * 1024)).toFixed(2) +
                            "MB"}
                      </span>
                    </span>
                  </p>
                </label>
                <input
                  id='font'
                  key={inputKey}
                  onChange={handleFont}
                  type='file'
                  accept='.ttf'
                  className='hidden'
                />
              </div>

              <div>
                {form.fontFile && (
                  <button
                    type='button'
                    onClick={(e) => {
                      let randomString = Math.random().toString(36);
                      setInputKey(randomString);
                      setForm({ ...form, fontFile: null });
                    }}
                  >
                    <CancelIcon className='w-5 h-5 bg-secondary rounded-full p-0.5 font-bold text-white stroke-2' />
                  </button>
                )}
              </div>
            </div>
          </main>
        ) : (
          <select
            onChange={(e) => {
              if (e.target.value === "Select font") {
                setForm({ ...form, font: "" });
              } else {
                setForm({ ...form, font: e.target.value });
              }
            }}
            className='border border-gray-400 text-lg w-full p-2 rounded-md outline-none'
          >
            <option defaultValue>Select font</option>
            {fonts.map((font, index) => {
              return <option key={index}>{font}</option>;
            })}
          </select>
        )}
      </div>
    </div>
  );
};
export default Font;
