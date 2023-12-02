import { useOutletContext, useNavigate, Link } from "react-router-dom";
// Icons
import { TrashIcon } from "../../../../../../../assets/icons";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  deleteBrand,
  getBrands,
} from "../../../../../../../features/brand/brandSlice";
// Utils
import { socials } from "./create/utils";

const BrandManage = () => {
  const { brands } = useSelector((store) => store.brand);
  const navigate = useNavigate();
  const [form, setForm] = useOutletContext();

  return (
    <div className='p-3 h-screen'>
      <header className='relative'>
        <h1 className='text-lg sm:text-3xl text-blue flex justify-start items-center gap-3'>
          <span>Your brands</span>
          <span className='text-black'>{brands ? brands.brands.nb : 0}</span>
          <button
            className='bg-blue text-white sm:text-lg capitalize sm:uppercase rounded-3xl px-2 sm:px-4 py-1 sm:py-2'
            onClick={() => {
              setForm({
                ...form,
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
              navigate("/dashboard/account/brand/create");
            }}
          >
            ADD NEW BRAND
          </button>
        </h1>
        <div className='absolute -bottom-4 w-full h-1 bg-gradient-to-r from-red-500 to-green-500 mt-5'>
          <div className='grid grid-cols-12 gap-4 my-5 w-full sm:w-10/12 text-gray-500 font-semibold text-lg sm:text-xl md:text-2xl p-5 border-2 border-transparent border-b-gray-600'>
            <p className='col-span-4'>Brand(s)</p>
            <p className='col-span-4'>Email</p>
            <p className='col-span-4'>Status</p>
          </div>
          <div className='h-72 overflow-scroll overflow-x-hidden pb-11'>
            {brands && brands.nb > 0 ? (
              brands.brands.map((brand) => (
                <SingleBrand key={brand._id} {...brand} />
              ))
            ) : (
              <div className='text-center text-xl'>You have no brands yet</div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

const SingleBrand = ({ name, email, _id }) => {
  const dispatch = useDispatch();
  return (
    <div className='group h-20 w-full mb-5 flex justify-between items-center'>
      <main className='grid grid-cols-12 gap-4 basis-full sm:basis-10/12 my-5 text-gray-300 text-xs sm:text-base md:text-lg p-5 border border-transparent border-b-gray-600'>
        <p className='flex flex-col justify-start items-start gap-2 col-span-4'>
          <span>{name}</span>
          <Link
            to={"/dashboard/request/brand/" + _id}
            className='text-blue underline underline-offset-4 text-left'
          >
            View brand
          </Link>
        </p>
        <p className='w-20 text-ellipsis sm:w-fit overflow-hidden col-span-4'>
          {email}
        </p>
        <p className='w-16 text-ellipsis sm:w-fit overflow-hidden col-span-4'>
          Active
        </p>
      </main>
      <button
        className='basis-1/6 group-hover:flex hidden sm:flex justify-center items-center rounded-full p-2 hover:bg-black'
        onClick={() => {
          dispatch(deleteBrand(_id));
          dispatch(getBrands());
        }}
      >
        <TrashIcon className='w-6 h-6 sm:w-8 sm:h-8 fill-red-500 stroke-red-100' />
      </button>
    </div>
  );
};

export default BrandManage;
