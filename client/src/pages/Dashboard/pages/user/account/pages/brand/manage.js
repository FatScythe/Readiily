import { useOutletContext, useNavigate } from "react-router-dom";
// Icons
import { ClipBoardIcon, TrashIcon } from "../../../../../../../assets/icons";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  deleteBrand,
  getBrands,
} from "../../../../../../../features/brand/brandSlice";
// Toastify
import { toast } from "react-toastify";
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
          <div className='flex justify-between items-center my-5 w-full sm:w-10/12 text-gray-500 font-semibold text-lg sm:text-xl md:text-2xl p-5 border-2 border-transparent border-b-gray-600'>
            <p>Brand(s)</p>
            <p>Email</p>
            <p>Status</p>
          </div>
          <div className='h-96 overflow-scroll pb-11'>
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
    <div className='group h-20 w-full flex justify-between items-center mb-5'>
      <main className='basis-full sm:basis-10/12 flex justify-between items-center my-5 text-gray-300 text-xs gap-1 sm:text-base md:text-lg p-5 border border-transparent border-b-gray-600'>
        <p className='flex flex-col justify-between items-start gap-2 w-16 text-ellipsis sm:w-fit overflow-hidden'>
          <span>{name}</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(_id);
              toast.info("Copied to clipboard");
            }}
            className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2'
          >
            <span>{_id}</span>
            <ClipBoardIcon className='w-6 sm:w-8 h-6 sm:h-8 stroke-black/70' />
          </button>
        </p>
        <p className='w-20 text-ellipsis sm:w-fit overflow-hidden'>{email}</p>
        <p className='w-16 text-ellipsis sm:w-fit overflow-hidden'>Active</p>
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
