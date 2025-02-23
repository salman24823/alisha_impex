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
      className="abt sections gap-10 overflow-hidden p-[5%] max-[770px]:text-center w-full min-h-[110vh] bg-[url(./../../public/about.png)] bg-cover bg-no-repeat  grid grid-cols-1 md:grid-cols-2  md:gap-32"
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center gap-5 md:gap-4 md:col-span-2" data-aos="fade-right">
        
        <h2 className="sub_heading" data-aos="fade-up">ABOUT US</h2>
        <span className="text-green-900 text-lg font-bold" data-aos="fade-up" data-aos-delay="200">
          We provide a massive range of Dyes and chemical products conforming to
          the purest grade on cost-effective and competitive terms
        </span>
        <p className="text-base text-gray-600 text-center" data-aos="fade-up" data-aos-delay="300">
          Alisha Impex, founded in 2005 by Khurram Shahzad, has grown into an active group with a presence all over Pakistan.  Khurrum Shehzad is the CEO of Alisha Impex, a prominent trading company based in Pakistan. With a strong background in the trading industry, he has played a key role in the company's growth and success, focusing on delivering high-quality products and services to clients. Under his leadership, Alisha Impex has established itself as a trusted name in the market. Additionally, Alisha Impex is an <span className="font-bold text-black">"EFS license holder"</span> and operates in both stock and import sectors, offering EFS facilities to enhance its services.
        </p>

        <div className="flex w-full md:justify-start justify-center mt-3">
          {/* <button onClick={() => scrollToSection("contact")} className="web_btn" data-aos="zoom-in" data-aos-delay="400">
            <span>Contact us</span>
          </button> */}
        </div>

      </div>

      <div className="flex flex-col items-center gap-3 md:col-span-1"  data-aos="fade-right" data-aos-delay="400">
        <h2 className="sub_heading">Our Vision</h2>
        <p className="md:w-[70%]  ">
        We aim to revolutionize the dye and chemicals industry by providing high-quality, sustainable dyes to factories. As importers, we focus on using innovative technology and environmentally responsible methods to ensure our products support creativity and sustainability. Our goal is to transform how companies acquire and utilize dyes, driving the industry toward a future where every color represents limitless potential and responsible practices.  </p>
      </div>
      <div className="flex flex-col items-center gap-3 md:col-span-1" data-aos="fade-left" data-aos-delay="400">
      <h2 className="sub_heading">Our Mission</h2>
        <p className="md:w-[70%] ">Our mission is to become a leading supplier of high-quality imported dyes to factories, offering a diverse range of products tailored to meet specific industrial needs. We are dedicated to providing reliable service with prompt delivery and expert assistance. By maintaining a strong commitment to quality and sustainability, we ensure that our dyes meet the highest standards, contributing to a more vibrant and eco-conscious future. Through our work, we help factories bring their production processes to life with the perfect dye solutions.</p>
      </div>
    </div>
  );
};

export default Aboutsection;
