// components/Carousel.tsx

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const imgs = [
  { img: "/hero/1.webp" },
  { img: "/hero/2.webp" },
  { img: "/hero/3.webp" },
  { img: "/hero/4.webp" },
  { img: "/hero/5.webp" },
  { img: "/hero/6.webp" },
  { img: "/hero/7.webp" },
  { img: "/hero/8.webp" },
  { img: "/hero/9.webp" },
  { img: "/hero/10.webp" },
  
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideInterval = 5000; // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imgs.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [imgs.length]);

  return (
    <div className='relative w-full h-[calc(100vh-7rem)]  aspect-video overflow-hidden'>
      {imgs.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-full scale-110"
          }`}>
          <Image
            src={img.img}
            alt={`Slide ${index + 1}`}
            fill
            priority={index === 0}
            className='object-cover w-full h-full'
          />
        </div>
      ))}
      {/* Static Content */}
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4'>
        <h2
          className={`  font-bold text-4xl sm:text-5xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200`}>
          World Human Rights and Aids Foundation (WHRAF)
        </h2>
        <p className='text-lg text-center font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 mt-1 mb-6 max-w-5xl mx-auto'>
          WHRAF tackles critical humanitarian issues including economic crises,
          child protection, HIV/AIDS treatment, prostitution, and the rights of
          sex workers. Our mission also extends to youth empowerment and
          addressing the impacts of climate change.
        </p>
      </div>
    </div>
  );
};

export default Carousel;
