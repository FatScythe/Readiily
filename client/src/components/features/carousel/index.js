// Images
import img1 from "../../../assets/images/design.png";
import img2 from "../../../assets/images/business.jpg";
import img3 from "../../../assets/images/future.jpg";
import img4 from "../../../assets/images/earth.jpg";
import img5 from "../../../assets/images/school.jpg";
import img6 from "../../../assets/images/startup.jpg";
import ImageSlider from "./slider";

const Carousel = () => {
  const slides = [
    {
      url: img1,
      title: "design",
    },
    {
      url: img2,
      title: "business",
    },
    {
      url: img3,
      title: "future",
    },
    {
      url: img4,
      title: "earth",
    },
    {
      url: img5,
      title: "school",
    },
    {
      url: img6,
      title: "startup",
    },
  ];
  return (
    <div className='w-full h-96 mx-auto my-0 bg-grayish group'>
      <ImageSlider slides={slides} />
    </div>
  );
};

export default Carousel;
