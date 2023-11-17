import { useState } from "react";

const Social = ({ form, setForm }) => {
  const [currSocial, setCurrSocial] = useState("Twitter");
  const currMedia = form.socials.filter((item) => item.media === currSocial);
  const OtherMedia = form.socials.filter((item) => item.media !== currSocial);

  return (
    <div className='flex flex-col justify-between items-stretch w-full h-full rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-3 p-1 sm:p-2'>
      <h2 className='text-lg'>Brand Social Handle </h2>
      <div className='flex justify-between items-center gap-2'>
        <div>
          <select
            className='border border-gray-400 text-lg w-full p-3 rounded-md outline-none'
            onChange={(e) => {
              setCurrSocial(e.target.value);
            }}
          >
            <option defaultValue>Twitter</option>
            <option>Instagram</option>
            <option>Facebook</option>
            <option>LinkedIn</option>
          </select>
        </div>

        <div>
          <input
            type='search'
            value={currMedia[0].handle}
            placeholder='@....'
            onChange={(e) => {
              setForm({
                ...form,
                socials: [
                  ...OtherMedia,
                  {
                    media: currSocial,
                    handle: e.target.value,
                  },
                ],
              });
            }}
            className='w-full outline-none border border-gray-400 rounded-md p-3'
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
