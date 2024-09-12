import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: 'https://wallpapers.com/images/hd/destiny-the-taken-king-4k-gaming-y31a8hm3p7kpqjzt.jpg',
    },
    {
      url: 'https://www.pixel4k.com/wp-content/uploads/2018/10/uncharted-4k-game_1538941181.jpg',
    },
    {
      url: 'https://hdfon.ru/wp-content/uploads/hdfon.ru-607210542.jpg',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const newIndex = currentIndex === 0 ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const newIndex = currentIndex === sliders.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Automatically change the slide after 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = currentIndex === sliders.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000); // 3000 milliseconds = 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex, sliders.length]);

  return (
    <div className=' max-w-[1520px] h-[600px] w-full py-4 px-4 relative group'>
      <div
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%]  left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlider} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%]  right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlider} />
      </div>
      <div className='flex top-4 justify-center py-2 '>
        {sliders.map((sliderItems, slideIndex) => (
          <div
            onClick={() => moveToNextSlide(slideIndex)}
            key={slideIndex}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
