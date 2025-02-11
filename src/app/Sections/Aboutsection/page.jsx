"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";  // Import AOS styles
import { usePathname } from "next/navigation";
import Image from "next/image";
import CEO from "@/../../public/CEO.png"

const Aboutsection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);
  
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
      id="about"
      className="abt sections overflow-hidden max-[770px]:text-center w-full min-h-[100vh] bg-[url(./../../public/about.png)] bg-cover bg-no-repeat gap-3 grid grid-cols-1 md:grid-cols-2 p-[5%]"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-5 md:justify-between" data-aos="fade-right">
        
        <h2 className="sub_heading" data-aos="fade-up">ABOUT US</h2>
        <span className="text-green-900 text-lg font-bold" data-aos="fade-up" data-aos-delay="200">
          We provide a massive range of Dyes and chemical products conforming to
          the purest grade on cost-effective and competitive terms
        </span>
        <p className="text-base text-gray-600" data-aos="fade-up" data-aos-delay="300">
          Alishaimpex, founded in 2005 by Khurram Shahzad, has grown into a
          globally active group with a presence on all continents. The company
          is committed to long-term independence and growth, ensuring that
          customers worldwide can procure products directly from local markets.
          Alishaimpex's international logistics concept guarantees the timely
          supply of high-quality special chemicals and textile dyes, all produced in accordance
          with strict environmental and efficiency standards. With production
          plants in Germany and other locations, the company ensures consistent
          quality and specialized formulations tailored to local market needs.
        </p>

        <div className="flex w-full md:justify-start justify-center mt-3">
          <button onClick={() => scrollToSection("products")} className="web_btn" data-aos="zoom-in" data-aos-delay="400">
            <span>Explore more</span>
          </button>
        </div>

      </div>

      <div className="sin flex justify-center items-center mt-5 md:mt-0" data-aos="fade-left">
        <div className="text-transparent flex justify-center">
          <Image className="w-[80%]" src={CEO} />
          </div>
      </div>
    </div>
  );
};

export default Aboutsection;
