import { useState, useEffect } from "react";
// Components
import Header from "../../components/header";
import Features from "../../components/features";
import Cta from "../../components/cta";
import Footer from "../../components/footer";
import { ArrowUpIcon } from "../../assets/icons";

const Homepage = () => {
  const [show, setShow] = useState(false);

  const scrollTop = () => {
    window.scrollY > 250 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollTop);

    return () => window.removeEventListener("scroll", scrollTop);
  }, []);
  return (
    <main className='relative'>
      <Header />
      <Features />
      <Cta />
      <Footer />

      <a
        className={`fixed ${
          show ? "bottom-10" : "-bottom-20"
        } right-4 bg-black transition-all duration-500 text-white rounded-full p-4`}
        href='#hero'
      >
        <ArrowUpIcon className='w-6 h-6 stroke-white' />
      </a>
    </main>
  );
};

export default Homepage;
