const Name = ({ form, setForm }) => {
  return (
    <div className='flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3 pl-2'>
      <span className='text-2xl text-blue'>Set your brand's name</span>
      <input
        type='text'
        placeholder='My Brand'
        className='border border-blue rounded-md text-lg p-2 w-full sm:w-1/3 outline-black'
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
    </div>
  );
};

export default Name;
