const Email = ({ form, setForm }) => {
  return (
    <div className='flex flex-col justify-between items-stretch w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-4 p-1 sm:p-2'>
      <h2 className='text-blue text-lg'>Brand Email </h2>
      <div>
        <input
          type='email'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className='w-full outline-none border border-gray-400 rounded-md p-3'
        />
      </div>
    </div>
  );
};

export default Email;
