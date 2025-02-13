"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Partnersection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full sections p-[5%]" data-aos="fade-up">
      <h2 className="text-3xl md:text-5xl text-center md:text-start leading-tight font-bold text-gray-800">
        Partners who work's <br className="hidden md:block" /> with Alishaimpex
      </h2>
      <div className="company_icons justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-[5%]">
        <div className="flex items-center justify-center">
          <Link href={"http://www.runtuchem.com/"} target="blank"><img
            className="h-auto"
            src="./../../../../partners-1.png"
            alt="Partner 1"
            data-aos="fade-up"
          /></Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href={"http://en.jihuadyes.com/pbl/1.html"} target="blank"><img
            className="h-auto"
            src="./../../../../partners-2.png"
            alt="Partner 2"
            data-aos="fade-up"
            data-aos-delay="100"
          /></Link>
        </div>
        <div className="flex items-center justify-center">
        <Link href={"https://en.shanyu.com/"} target="blank"><img
            className="h-36"
            src="./../../../../partners-3.png"
            alt="Partner 3"
            data-aos="fade-up"
            data-aos-delay="200"
            /></Link>
            </div>
        <div className="flex items-center justify-center">
          <Link href={"https://www.longsheng.com/en/"} target="blank"><img
            className="h-auto"
            src="./../../../../partners-4.png"
            alt="Partner 4"
            data-aos="fade-up"
            data-aos-delay="300"
          /></Link>
        </div>
      </div>
    </div>
  );
};

export default Partnersection;
