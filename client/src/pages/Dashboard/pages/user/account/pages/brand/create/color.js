import { useState } from "react";
// Icons
import { AddIcon, CancelIcon } from "../../../../../../../../assets/icons";
// Toastify
import { toast } from "react-toastify";

const Color = ({ form, setForm }) => {
  const [currColor, setCurrColor] = useState(null);
  return (
    <div className='sm:w-11/12 h-fit rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-3 p-1 sm:p-2'>
      <h2 className='text-lg'>Brand Colors</h2>
      <main className='flex flex-col justify-between items-stretch gap-5'>
        <div className='h-1/2 flex justify-start items-center gap-5'>
          {form.colors.map((color, index) => {
            return (
              <div className='relative group' key={index}>
                <button
                  type='button'
                  onClick={() => {
                    let colors = form.colors.filter((item) => item !== color);
                    setForm({ ...form, colors });
                    setCurrColor("");
                  }}
                  className='absolute hidden group-hover:block'
                >
                  <CancelIcon className='w-full h-full bg-red-500 stroke-white stroke-2 rounded-full' />
                </button>
                <p
                  className='h-6 w-6 rounded-full'
                  style={{ backgroundColor: color }}
                ></p>
              </div>
            );
          })}
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <label htmlFor='color' className=''>
              <AddIcon className='w-10 sm:w-12 h-10 sm:h-12' />
            </label>
            <input
              id='color'
              type='color'
              onChange={(e) => setCurrColor(e.target.value)}
              className='hidden'
            />
          </div>
          {currColor && form.colors.length < 6 && (
            <button
              type='button'
              className='bg-sky-500 px-2 py-1 rounded-md text-white'
              onClick={() => {
                if (form.colors.includes(currColor) || !currColor) return;
                if (form.colors.length > 5) {
                  toast.info("Colors cannot be more than 6");
                  return;
                }
                setForm({ ...form, colors: [...form.colors, currColor] });
              }}
            >
              Add
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Color;
