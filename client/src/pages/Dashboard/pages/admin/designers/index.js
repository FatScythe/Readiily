import { useState } from "react";
// Hook
import useTitle from "../../../../../hooks/useTitle";
import useSWR from "swr";
// Icon
import { ClipBoardIcon, TrashIcon } from "../../../../../assets/icons";
// Toastify
import { toast } from "react-toastify";
// Utils
import url from "../../../../../utils/url";

const CreateDesigners = () => {
  useTitle("Create Designers");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    url + "/api/v1/account/designers",
    fetcher,
    { refreshInterval: 2000 }
  );
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    token: Math.random().toString(35).slice(2).toUpperCase(),
    edit: false,
  });

  const createDesigner = async (e) => {
    e.preventDefault();
    try {
      const { name, email, token } = form;
      if (!name || !email) {
        toast.info("Please fill all field");
        return;
      }

      const res = await fetch(url + "/api/v1/account/designers", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, name, token }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.msg || "Something went wrong");
        return;
      }

      toast.success(data.msg);
      setForm({
        ...form,
        name: "",
        email: "",
        token: Math.random().toString(35).slice(2).toUpperCase(),
        edit: false,
      });
    } catch (error) {
      toast.error(error?.msg || "Something went wrong");
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, token } = form;
      if (!name || !email) {
        toast.info("Please fill all field");
        return;
      }

      const res = await fetch(url + "/api/v1/account/designers/" + form.id, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, name, token }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.msg || "Something went wrong");
        return;
      }

      toast.success(data.msg);
      setForm({
        ...form,
        name: "",
        email: "",
        token: Math.random().toString(35).slice(2).toUpperCase(),
        edit: false,
      });
    } catch (error) {
      toast.error(error?.msg || "Something went wrong");
    }
  };

  return (
    <section className='h-full overflow-y-scroll mb-28 sm:mb-10'>
      <h1 className='text-xl font-semibold underline underline-offset-4'>
        Create designers
      </h1>

      <form
        className='w-full mt-2 px-4 pt-2'
        onSubmit={form.edit ? handleEdit : createDesigner}
      >
        <div>
          <label className='text-sm sm:text-base font-semibold'>
            Designer Name
          </label>
          <input
            type='text'
            placeholder='Set designer name'
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className='peer block border border-black outline-none p-2 w-11/12 sm:w-1/2 rounded-lg my-2 focus:border-sky-600 focus:border-2'
            required
          />
          <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-xs sm:text-sm'>
            Please provide designer name.
          </p>
        </div>
        <div>
          <label className='text-sm sm:text-base font-semibold'>
            Designer Email
          </label>
          <input
            type='email'
            placeholder='Set designer email'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className='peer block border border-black outline-none p-2 w-11/12 sm:w-1/2 rounded-lg my-2 focus:border-sky-600 focus:border-2'
            required
          />
          <p className='mt-2 invisible peer-invalid:visible text-pink-600 text-xs sm:text-sm'>
            Please provide a valid email address.
          </p>
        </div>
        <div>
          <label className='text-sm sm:text-base font-semibold'>
            Designer Token
          </label>
          <input
            type='text'
            readOnly
            value={form.token}
            className='block border border-black outline-none p-2 w-11/12 sm:w-1/2 rounded-lg my-2 focus:border-sky-600 focus:border-2'
            required
          />
        </div>

        <div className='flex justify-end sm:justify-center items-center'>
          <button type='submit' className='bg-blue p-2 rounded-md text-white'>
            {form.edit ? "Edit" : "Create"}
          </button>
        </div>
      </form>

      <h2 className='text-xl font-semibold underline underline-offset-4 my-5 '>
        Designers
      </h2>

      {isLoading && <div>Loading...</div>}
      {(data && data.msg) || error ? (
        <div>Failed to load....</div>
      ) : data && data.length > 1 ? (
        <div className='grid grid-cols-12 gap-3'>
          {data.map((designer) => (
            <Designer
              key={designer._id}
              designer={designer}
              form={form}
              setForm={setForm}
            />
          ))}
        </div>
      ) : (
        <h2>No designers yet</h2>
      )}
    </section>
  );
};

export default CreateDesigners;

const Designer = ({ designer, form, setForm }) => {
  const handleDelete = async () => {
    try {
      const res = await fetch(
        url + "/api/v1/account/designers/" + designer._id,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.msg || "Something went wrong");
        return;
      }

      toast.success(data.msg);
    } catch (error) {
      toast.error(error?.msg || "Something went wrong");
      console.error(error);
    }
  };

  const handleRefresh = async () => {
    try {
      const res = await fetch(
        url + "/api/v1/account/designers/" + designer._id,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            email: designer.email,
            name: designer.name,
            token: Math.random().toString(35).slice(2).toUpperCase(),
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.msg || "Something went wrong");
        return;
      }

      toast.success("Token refreshed");
    } catch (error) {
      toast.error(error?.msg || "Something went wrong");
    }
  };

  return (
    <div className='bg-white p-2 rounded-md col-span-12 sm:col-span-6 md:col-span-4 w-full'>
      <div className='flex justify-between items-center'>
        <div>
          <button
            className='bg-blue p-1 rounded-md text-sm text-white'
            onClick={handleRefresh}
          >
            Refresh token
          </button>
        </div>
        <div>
          <button
            className='bg-secondary p-1 rounded-md text-sm text-white'
            onClick={() => {
              setForm({
                ...form,
                id: designer._id,
                name: designer.name,
                email: designer.email,
                token: designer.designerToken,
                edit: true,
              });
              window.scrollTo(0, 0);
            }}
          >
            Edit
          </button>
        </div>
      </div>
      <div className='text-sm flex flex-col justify-between items-start gap-2'>
        <h1>Name: {designer.name}</h1>
        <h2>Email: {designer.email}</h2>
        <h3>Token: {designer.designerToken}</h3>
        <div className='flex justify-between items-center w-full'>
          <button
            className='bg-sky-400 p-1 rounded-full text-sm text-white'
            onClick={() => {
              navigator.clipboard.writeText(
                `name: ${designer.name} \nemail: ${designer.email} \ntoken: ${designer.designerToken}`
              );
              toast.info("Copied to clipboard!");
            }}
          >
            <ClipBoardIcon className='w-6 h-6' />
          </button>
          <button
            className='bg-orange p-1 rounded-full text-sm text-white'
            onClick={handleDelete}
          >
            <TrashIcon className='w-6 h-6' />
          </button>
        </div>
      </div>
    </div>
  );
};
