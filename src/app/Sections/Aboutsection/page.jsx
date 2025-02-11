"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";  // Import AOS styles
import { usePathname } from "next/navigation";

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
          Alisha Impex, founded in 2005 by Khurram Shahzad, has grown into an active group with a presence all over Pakistan.  Khurrum Shehzad is the CEO of Alisha Impex, a prominent trading company based in Pakistan. With a strong background in the trading industry, he has played a key role in the company's growth and success, focusing on delivering high-quality products and services to clients. Under his leadership, Alisha Impex has established itself as a trusted name in the market. Additionally, Alisha Impex is an <span className="font-bold text-black">"EFS license holder"</span> and operates in both stock and import sectors, offering EFS facilities to enhance its services.
        </p>

        <div className="flex w-full md:justify-start justify-center mt-3">
          <button onClick={() => scrollToSection("products")} className="web_btn" data-aos="zoom-in" data-aos-delay="400">
            <span>Contact us</span>
          </button>
        </div>
      </div>

      <div className="sin flex justify-center items-center mt-5 md:mt-0" data-aos="fade-left">
        <h2 className="text-transparent text-[4rem] md:text-[6rem]"></h2>
      </div>
    </div>
  );
};

export default Aboutsection;
