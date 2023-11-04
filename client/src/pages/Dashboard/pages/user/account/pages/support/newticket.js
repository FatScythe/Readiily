import { PlusIcon } from "../../../../../../../assets/icons";

const NewTicket = () => {
  return (
    <div>
      <form className='py-5'>
        <div>
          <label htmlFor='subject' className='text-lg sm:text-xl'>
            Subject
          </label>
          <input
            id='subject'
            type='text'
            className='block outline-none border border-black rounded-md px-2 py-3 sm:text-lg bg-transparent w-full'
          />
        </div>
        <div className='pt-6'>
          <label htmlFor='message' className='text-lg sm:text-xl my-1'>
            Message
          </label>

          <textarea
            id='message'
            rows={20}
            className='block outline-none border border-black rounded-md px-2 py-3 sm:text-lg bg-transparent w-full resize-y'
          ></textarea>
        </div>

        <div>
          <h3 className='text-lg sm:text-xl py-3'>Attachment</h3>
          <label
            htmlFor='attachment'
            className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2'
          >
            <div className='border border-black rounded-md basis-full w-full sm:basis-4/5 p-0.5 sm:p-3'>
              <span className='font-semibold text-sm sm:text-xl p-4'>
                Select File
              </span>
              <span className='border border-l-black border-transparent rounded-md text-sm sm:text-xl p-1 sm:p-4'>
                No files selected
              </span>
            </div>
            <button className='bg-blue text-white text-sm sm:text-xl px-4 py-3 rounded-md flex justify-start items-center gap-2 sm:basis-1/5'>
              <PlusIcon className='w-6 h-6' />
              <span>Add More</span>
            </button>
          </label>
          <input
            type='file'
            name='attachment'
            id='attachment'
            className='hidden'
          />

          <p className='sm:text-xl my-5'>
            Allowed File Extensions: .jpg, .gif, .png, .pdf, (Max file size:
            10MB)
          </p>

          <div className='flex justify-start items-center gap-3 my-6'>
            <button
              type='submit'
              className='bg-blue text-white px-6 py-2 text-lg sm:text-xl'
            >
              Submit
            </button>
            <button
              type='reset'
              className='bg-transparent border border-black px-6 py-2 text-lg sm:text-xl font-semibold'
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTicket;
