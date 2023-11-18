import { useEffect, useState } from "react";
import { ArrowIcon } from "../../../assets/icons";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = slides.length - 1;

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex >= 0 && currentIndex < lastIndex) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, lastIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    if (isFirstSlide) {
      setCurrentIndex(lastIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === lastIndex;
    if (isLastSlide) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className='h-full relative group'>
      <button
        className='absolute top-1/2 translate-x-0 -translate-y-1/2 -left-full group-hover:left-8 group-hover:z-20 duration-200 ease-in-out'
        onClick={goToPrevious}
      >
        <ArrowIcon className='-rotate-180 w-8 h-8 z-20 absolute left-0' />
      </button>
      <button
        className='absolute top-1/2 translate-x-0 -translate-y-1/2 group-hover:z-20 -right-full group-hover:right-8 duration-200 ease-in-out'
        onClick={goToNext}
      >
        <ArrowIcon className='w-8 h-8 z-20 absolute right-0' />
      </button>

      <div
        style={slideStyles}
        className='w-full h-full rounded-xl bg-center bg-cover transition-all duration-500 ease-in'
      ></div>
    </div>
  );
};

export default ImageSlider;
