// Components
import Navbar from "../navbar";
import Hero from "./hero";

const Header = () => {
  return (
    <header id='hero' className='bg-primary md:ml-6 md:mt-3'>
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
