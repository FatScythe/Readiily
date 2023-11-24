// Toastify
import { toast } from "react-toastify";
// Hook
import useSWR from "swr";
// Util
import url from "../../../../../utils/url";
// Components
import Loader from "../../../../../components/loader";
import Error1 from "../../../../../components/error";

const Designers = ({ openModal, setOpenModal, requestId, setRequestId }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    url + "/api/v1/account/designers",
    fetcher
  );

  return (
    <main>
      <div
        className='fixed bg-black/5 top-0 bottom-0 left-0 right-0 z-10'
        onClick={() => setOpenModal(!openModal)}
      ></div>

      <div className='fixed p-2 z-20 bg-slate-200 top-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-full sm:w-3/4 rounded-lg overflow-x-hidden overflow-y-scroll'>
        <h2 className='text-lg sm:text-xl font-semibold'>Designers:</h2>
        {isLoading && (
          <div className='grid place-items-center'>
            <Loader className='w-20 h-20' />
          </div>
        )}
        {(data && data.msg) || error ? (
          <div className='h-half grid place-items-center'>
            <Error1 error={data || error} />
          </div>
        ) : (
          <div className='grid grid-cols-12 my-2 gap-2'>
            {data && data.length >= 1 ? (
              data.map((designer) => (
                <Designer
                  key={designer._id}
                  designer={designer}
                  requestId={requestId}
                  setRequestId={setRequestId}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))
            ) : (
              <div className='col-span-12 text-xl text-center font-semibold mt-10'>
                No designers yet
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Designers;

const Designer = ({
  designer,
  requestId,
  setRequestId,
  openModal,
  setOpenModal,
}) => {
  const { _id, name, avatar, email } = designer;
  const handleAssign = async () => {
    if (requestId.length < 1) {
      toast.info("Select request to assign");
      return;
    }
    const res = await fetch(url + "/api/v1/request/assign", {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ requestId, designerId: _id }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.msg || "Something went wrong");
      return;
    }

    toast.success(data.msg);
    setRequestId([]);
    setOpenModal(!openModal);
  };
  return (
    <button
      className='col-span-4 flex flex-col justify-center items-center gap-4 hover:bg-black/20 py-1 rounded-lg overflow-clip'
      onClick={handleAssign}
    >
      <img src={avatar} className='w-14 h-14 rounded-full' alt='designer tag' />
      <h3 className='text-sm font-semibold'>{name}</h3>
      <h3 className='text-xs sm:text-sm font-semibold w-full break-words'>
        {email}
      </h3>
    </button>
  );
};
