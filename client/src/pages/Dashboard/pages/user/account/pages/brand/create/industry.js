// Toastify
import { toast } from "react-toastify";
// Util
import { industries } from "./utils";
// Icon
import { CancelIcon } from "../../../../../../../../assets/icons";

const Industry = ({ form, setForm }) => {
  return (
    <div className='flex flex-col justify-between items-stretch w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 p-2'>
      <h2 className='text-blue text-lg'>Brand Industry</h2>

      <div className='flex flex-col justify-between items-stretch gap-2'>
        <div className='flex justify-start items-start gap-2'>
          {form.industry.map((item, index) => (
            <p key={index} className='flex justify-between items-center'>
              <span className='w-12 h-16 overflow-hidden text-ellipsis '>
                {item}
              </span>
              <button
                type='button'
                onClick={() => {
                  setForm({
                    ...form,
                    industry: form.industry.filter((ind) => ind !== item),
                  });
                }}
              >
                <CancelIcon className='w-5 h-5' />
              </button>
            </p>
          ))}
        </div>
        <div>
          <select
            className='border border-gray-400 text-lg w-full p-3 rounded-md outline-none'
            onChange={(e) => {
              if (form.industry.includes(e.target.value)) return;
              if (form.industry.length > 3) {
                toast.info("Cannot be more than 4 industries");
                return;
              }
              setForm({
                ...form,
                industry: [...form.industry, e.target.value],
              });
            }}
          >
            <option defaultValue>Select an industry</option>
            {industries.map((industry, index) => (
              <option key={index}>{industry}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Industry;
