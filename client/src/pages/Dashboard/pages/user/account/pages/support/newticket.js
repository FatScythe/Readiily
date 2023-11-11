import { useState } from "react";
// Icon
import { PlusIcon } from "../../../../../../../assets/icons";
// Toastify
import { toast } from "react-toastify";
// Redux
import { useSelector } from "react-redux";

const NewTicket = () => {
  const { currentBrand } = useSelector((store) => store.brand);
  const [form, setForm] = useState({
    subject: "",
    message: "",
    files: [],
  });

  const reset = () => {
    setForm({
      subject: "",
      message: "",
      files: [],
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { subject, message, files } = form;
    if (!subject) {
      toast.info("Provide a subject");
      return;
    }
    if (!message || message.length < 10) {
      toast.info("Provide a message of at least 10 characters");
      return;
    }

    if (!currentBrand) {
      toast.error("No brand selected");
      return;
    }

    const formData = new FormData();

    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("brand", currentBrand.id);
    for (let i = 0; i < files.length; i++) {
      formData.append("attachments", files[i]);
    }

    const res = await fetch("/api/v1/ticket", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data?.msg || "Something went wrong");
      return;
    }

    toast.success(data.msg);
    reset();
  };

  const handleAttachment = async (e) => {
    const file = e.target.files[0];

    if (!file) return;
    if (form.files.length > 4) {
      toast.info("Maximum of 5 files");
      return;
    }
    if (file.size > 3145728) {
      toast.error("Font size must not be more than 3MB");
      return;
    }
    setForm({ ...form, files: [...form.files, file] });
  };

  return (
    <div>
      <form className='py-5' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='subject' className='text-lg sm:text-xl'>
            Subject
          </label>
          <input
            id='subject'
            type='text'
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className='block outline-none border border-black rounded-md px-2 py-3 sm:text-lg bg-transparent w-full'
          />
        </div>
        <div className='pt-6'>
          <label htmlFor='message' className='text-lg sm:text-xl my-1'>
            Message
          </label>

          <textarea
            id='message'
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
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
              {form.files.length <= 0 && (
                <span className='font-semibold text-sm sm:text-xl p-4'>
                  Select File
                </span>
              )}
              <span className='border border-l-black border-transparent rounded-md text-sm sm:text-xl p-1 sm:p-4 overflow-hidden text-ellipsis'>
                {form.files.length > 0
                  ? form.files.map((file) => file.name.slice(0, 10)).join(", ")
                  : " No files selected"}
              </span>
            </div>
            <p className='bg-blue text-white text-sm sm:text-xl px-4 py-3 rounded-md flex justify-start items-center gap-2 sm:basis-1/5'>
              <PlusIcon className='w-6 h-6' />
              <span>Add More</span>
            </p>
          </label>
          <input
            type='file'
            name='attachment'
            id='attachment'
            accept='.jpg, .gif, .png, .pdf'
            onChange={handleAttachment}
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
              onClick={reset}
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
