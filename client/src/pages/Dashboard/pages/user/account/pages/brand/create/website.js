const Website = ({ form, setForm }) => {
  return (
    <div className='flex flex-col justify-between items-stretch w-full h-full rounded-lg shadow-lg bg-white col-span-12 sm:col-span-6 md:col-span-3 p-1 sm:p-2'>
      <h2 className='text-lg'>Brand Website </h2>
      <div>
        <input
          type='search'
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
          className='w-full outline-none border border-gray-400 rounded-md p-3'
        />
      </div>
    </div>
  );
};

export default Website;
