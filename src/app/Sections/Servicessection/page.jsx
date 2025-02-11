"use client";

import React, { useEffect } from 'react';
import { MdMiscellaneousServices, MdOutlineElectricalServices, MdOutlineMedicalServices } from "react-icons/md";
import { SiAmazonwebservices } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Servicessection = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id='services' className='sections p-[5%] w-full flex flex-col items-center gap-7'>
      <h2 className='sub_heading flex gap-2' data-aos="fade-up">Our Services</h2>
      <span className='text-green-900 text-lg font-bold max-[770px]:text-center' data-aos="fade-up" data-aos-delay="200">
        Global Supply of High-Quality Chemicals and Dyes
      </span>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
        <div className='flex flex-col justify-center items-center service_card p-6 gap-5 green' data-aos="zoom-in" data-aos-delay="300">
          <MdMiscellaneousServices className='size-14' />
          <span className='text_color text-2xl font-bold'>Quality</span>
          <p className='text-center para text-base'>We provide the best quality control and assurance.</p>
        </div>
        <div className='flex flex-col justify-center items-center service_card p-5 gap-5 green' data-aos="zoom-in" data-aos-delay="400">
          <SiAmazonwebservices className='size-14' />
          <span className='text_color text-2xl font-bold'>Sampling</span>
          <p className='text-center para text-base'>Allowing customers to test color samples Sustainability</p>
        </div>
        <div className='flex flex-col justify-center items-center service_card p-5 gap-5 green' data-aos="zoom-in" data-aos-delay="500">
          <MdOutlineElectricalServices className='size-14' />
          <span className='text_color text-2xl font-bold'>Order</span>
          <p className='text-center para text-base'>Allowing customers to place small or large orders</p>
        </div>
        <div className='flex flex-col justify-center items-center service_card p-5 gap-5 green' data-aos="zoom-in" data-aos-delay="600">
          <MdOutlineMedicalServices className='size-14' />
          <span className='text_color text-2xl font-bold'>Trusted Supplier</span>
          <p className='text-center para text-base'>All content is a dummy content for demo</p>
        </div>
      </div>
    </div>
  );
};

export default Servicessection;
