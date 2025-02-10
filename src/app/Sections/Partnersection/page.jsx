import React from 'react';

const Partnersection = () => {
  return (
    <div className='w-full sections p-[5%]'>
      {/* <span className='text-red-500 p-1 font-bold'>About Alishaimpex</span> */}
      <h2 className='text-3xl md:text-5xl leading-tight font-bold text-gray-800'>
        Partners who work's <br className="hidden md:block" /> with Alishaimpex
      </h2>
      <div className="company_icons flex flex-wrap justify-center md:justify-between items-center py-[5%] gap-6 md:gap-0">
        <img
          className='w-[150px] md:w-[200px] h-auto'
          src="./../../../../partners-1.png"
          alt="Partner 1"
        />
        <img
          className='w-[150px] md:w-[200px] h-auto'
          src="./../../../../partners-2.png"
          alt="Partner 2"
        />
        <img
          className='w-[150px] md:w-[290px] h-auto'
          src="./../../../../partners-3.png"
          alt="Partner 3"
        />
        <img
          className='w-[150px] md:w-[200px] h-auto'
          src="./../../../../partners-4.png"
          alt="Partner 4"
        />
      </div>
    </div>
  );
};

export default Partnersection;