const Name = ({ form, setForm }) => {
  return (
    <div className='flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3'>
      <span className='text-lg'>Set your brand's name</span>
      <input
        type='text'
        placeholder='My Brand'
        className='border border-blue rounded-md p-2 w-full sm:w-1/2 outline-black'
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
    </div>
  );
};

export default Name;
