"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { GoArrowUpRight } from "react-icons/go";

const Herosection = () => {
  const pathname = usePathname();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = -70; // Adjust this value as needed
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="home"
      className="sec w-full h-[110vh] bg-[url(./../../public/landing1.png)] bg-no-repeat bg-cover relative"
    >
      <div className="bds w-full h-[110vh] grid grid-cols-1 md:grid-cols-2 p-[5%]">
        <div className="alishaimpex_cont flex gap-8 flex-col justify-center items-center md:items-start md:pl-[2%]">
          <h1 className="main_heading md:!text-6xl !text-3xl text-center md:text-left">
            Global Excellence in Special Chemicals
          </h1>
          <p className="text-lg para text-center md:text-left">
            Committed to Delivering High-Quality, Sustainable Chemical Solutions
            Tailored to Local Market Needs, Ensuring Global Reach, Timely
            Supply, and Consistent Excellence Since 2005
          </p>
          <div className="flex w-full justify-center md:justify-start mt-3">
            <button
              onClick={() => scrollToSection("products")}
              className="web_btn"
            >
              <span>Explore more</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;