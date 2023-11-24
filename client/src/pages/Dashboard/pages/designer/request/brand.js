import { useParams } from "react-router-dom";
// Hook
import useTitle from "../../../../../hooks/useTitle";
import useSWR from "swr";
// Icon
import { DownloadIcon } from "../../../../../assets/icons";
// Utils
import url from "../../../../../utils/url";
// Component
import Loader from "../../../../../components/loader";
import Error1 from "../../../../../components/error";

const BrandInfo = () => {
  const { id } = useParams();
  useTitle("Brand Info");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    url + "/api/v1/brand/" + id,
    fetcher
  );

  if (isLoading) {
    return (
      <div className='h-half sm:h-screen grid place-items-center'>
        <Loader className='w-20 h-20' />
      </div>
    );
  }

  if ((data && data.msg) || error) {
    return (
      <div className='h-half grid place-items-center'>
        <Error1 error={data || error} />
      </div>
    );
  }

  const {
    name,
    colors,
    font,
    fontUrl,
    website,
    socials,
    industry,
    logoLight,
    logoDark,
  } = data;
  return (
    <section>
      <main className='bg-white/80 sm:m-2 shadow-xl sm:p-2'>
        <header>
          <div className='text-blue font-bold text-lg sm:text-xl py-4'>
            {name} Brandings
          </div>
        </header>

        <div className='grid grid-cols-12 my-4 gap-3'>
          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>Brand Color</h2>
            <main className='flex justify-start items-center gap-4'>
              <div className='flex justify-start items-center gap-2'>
                {colors.length > 0 ? (
                  colors.map((color, index) => (
                    <div
                      className='flex flex-col justify-between items-center gap-2'
                      key={index}
                    >
                      <span
                        style={{ backgroundColor: color }}
                        className='h-10 w-10 rounded-full'
                      ></span>
                      <span>{color}</span>
                    </div>
                  ))
                ) : (
                  <div>No brand colors</div>
                )}
              </div>
            </main>
          </div>

          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>Font</h2>
            <main className='flex justify-start items-center gap-4 w-full'>
              <div className='border border-black rounded-md p-2 w-full flex justify-between items-center'>
                <span>{font}</span>
                {fontUrl && <DownloadIcon className='w-6 h-6' />}
              </div>
            </main>
          </div>

          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>Brand Social Handle</h2>
            <main className='grid grid-cols-12 gap-2 w-full'>
              {socials.map((social, index) => {
                if (!social.handle) {
                  return <div key={index}></div>;
                }
                return (
                  <div
                    key={index}
                    className='col-span-6 flex justify-start items-center gap-2 bg-sky-500 text-white rounded-md p-1'
                  >
                    <span className=''>{social.media.slice(0, 3)}</span>
                    <span>{social.handle}</span>
                  </div>
                );
              })}
            </main>
          </div>

          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>Brand Website</h2>
            <main className='flex justify-start items-center gap-4 w-full'>
              <div className='border border-black rounded-md p-2 w-full'>
                {website ? website : "No website"}
              </div>
            </main>
          </div>
          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>
              Logo for Light Background
            </h2>
            <main className='flex justify-start items-center gap-4 w-full'>
              <div className='border border-black rounded-md p-2 w-full flex justify-between items-center'>
                {logoLight ? (
                  <>
                    <img
                      src={logoLight}
                      alt='logo'
                      className='w-10 h-10 rounded-md'
                    />
                    <DownloadIcon className='w-6 h-6' />
                  </>
                ) : (
                  <h2>No light logo</h2>
                )}
              </div>
            </main>
          </div>

          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>Brand Color</h2>
            <main className='flex justify-start items-center gap-4 w-full'>
              <div className='border border-black rounded-md p-2 w-full flex justify-between items-center'>
                {logoDark ? (
                  <>
                    <img
                      src={logoDark}
                      alt='logo'
                      className='w-10 h-10 rounded-md'
                    />
                    <DownloadIcon className='w-6 h-6' />
                  </>
                ) : (
                  <h2>No dark logo</h2>
                )}
              </div>
            </main>
          </div>

          <div className='w-full h-40 rounded-lg shadow-lg bg-white col-span-12 sm:col-span-4 md:col-span-3 p-1 sm:p-2 flex flex-col justify-between items-start'>
            <h2 className='text-secondary text-lg'>Brand Industry</h2>
            <main className='grid grid-cols-12 gap-2 w-full'>
              {industry.length > 0 ? (
                industry.map((item, index) => (
                  <div
                    className='col-span-6 bg-gray-400 text-white rounded-md p-1'
                    key={index}
                  >
                    <span>{item}</span>
                  </div>
                ))
              ) : (
                <h2>No Industry</h2>
              )}
            </main>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BrandInfo;
