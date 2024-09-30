

import Image from "next/image";

export default function Hero() {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src='/hero.webp' // Replace with the correct path
          alt='Background'
          fill
          priority
          className='object-cover'
        />
      </div>

      {/* Overlay for background image to darken it */}
      <div className='absolute inset-0 bg-black/50'></div>

      {/* Hero Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4'>
        {/* Heading */}
        <h1 className='text-4xl sm:text-6xl font-bold mb-4'>
          World Human Right and Aids Foundation
        </h1>
        {/* Description */}
        <p className='text-lg sm:text-2xl max-w-2xl'>
          Against Economic Crisis, Child Protection & HIV/AIDS Treatment,
          Prostitution, Sex Worker
        </p>
      </div>
    </div>
  );
}
