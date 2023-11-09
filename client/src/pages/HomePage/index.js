import { useState, useEffect } from "react";
// Components
import Header from "../../components/header";
import Features from "../../components/features";
import Cta from "../../components/cta";
import Footer from "../../components/footer";
import { ChevronUp } from "../../assets/icons";
// Hooks
import useTitle from "../../hooks/useTitle";

const Homepage = () => {
  const [show, setShow] = useState(false);
  useTitle("Readiily");

  const scrollTop = () => {
    window.scrollY > 350 ? setShow(true) : setShow(false);
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
        } right-4 bg-black transition-all duration-500 text-white rounded-full p-4 sm:p-6`}
        href='#hero'
      >
        <ChevronUp className='w-6 h-6 sm:w-8 sm:h-8 stroke-white stroke-[4]' />
      </a>
    </main>
  );
};

export default Homepage;
