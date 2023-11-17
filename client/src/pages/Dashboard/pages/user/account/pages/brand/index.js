import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
// Utils
import { socials } from "./create/utils";
// Toastify
import { toast } from "react-toastify";
// Redux
import { useDispatch } from "react-redux";
import {
  createBrand,
  getBrands,
} from "../../../../../../../features/brand/brandSlice";
// Component
import Name from "./name";

const Brand = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: "",
    name: "",
    colors: [],
    font: "",
    website: "",
    email: "",
    fontFile: null,
    customFont: false,
    socials,
    light: null,
    dark: null,
    industry: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, font, email, customFont, fontFile } = form;
      if (!name) {
        toast.warning("Please provide a brand name");
        return;
      }
      if (!email) {
        toast.warning("Please provide a brand email");
        return;
      }
      if (customFont && !fontFile) {
        toast.warning("Please provide custom font file");
        return;
      }
      if (customFont && !font) {
        toast.warning("Please provide custom font name");
        return;
      }

      dispatch(createBrand(form));
      dispatch(getBrands());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section>
      <Name form={form} setForm={setForm} />
      <div className='rounded-2xl h-[75vh] sm:m-3 sm:p-2 sm:shadow-xl sm:bg-white/80'>
        <header className='px-2 py-5 m-2 sm:m-4'>
          <ul className='flex justify-start items-center text-blue gap-5 sm:gap-8'>
            <NavLink to='/dashboard/account/brand/create' className='relative'>
              <li className='text-lg sm:text-2xl text-secondary'>
                Brand Details
              </li>
              <p className='absolute -bottom-2 w-0 h-1 bg-gradient-to-r from-red-500 to-green-500'></p>
            </NavLink>

            <NavLink to='/dashboard/account/brand/manage' className='relative'>
              <li className='text-lg sm:text-2xl text-secondary'>
                Manage Brands
              </li>
              <p className='absolute -bottom-2 w-0 h-1 bg-gradient-to-r from-red-500 to-green-500'></p>
            </NavLink>
          </ul>
        </header>
        <main>
          <Outlet context={[form, setForm, handleSubmit]} />
        </main>
      </div>
    </section>
  );
};

export default Brand;
