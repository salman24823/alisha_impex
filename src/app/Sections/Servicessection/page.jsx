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
        Supply of high quality dyes and chemicals 
      </span>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full '>
        <div className='relative' data-aos="zoom-in" data-aos-delay="300">
          <div className='service_card duration-500 flex flex-col justify-center items-center p-6 gap-5 green' >
            <MdMiscellaneousServices className='size-14' />
            <span className='text_color text-2xl font-bold'>Quality</span>
            <p className='text-center para text-base'>We provide the best quality control and assurance.</p>
          </div>
        </div>
        <div className='relative' data-aos="zoom-in" data-aos-delay="400">
          <div className='flex flex-col justify-center items-center service_card p-5 gap-5 green'>
            <SiAmazonwebservices className='size-14' />
            <span className='text_color text-2xl font-bold'>Sampling</span>
            <p className='text-center para text-base'>Allowing customers to test color samples Sustainability</p>
          </div>
        </div>
        <div className='relative' data-aos="zoom-in" data-aos-delay="500">
          <div className='flex flex-col justify-center items-center service_card p-5 gap-5 green' >
            <MdOutlineElectricalServices className='size-14' />
            <span className='text_color text-2xl font-bold'>Flexible Quantity</span>
            <p className='text-center para text-base'>Allowing customers to place small or large orders</p>
          </div>
        </div>
        <div className='relative'  data-aos="zoom-in" data-aos-delay="600">
          <div className='flex flex-col justify-center items-center service_card p-5 gap-5 green'>
            <MdOutlineMedicalServices className='size-14' />
            <span className='text_color text-2xl font-bold'>Trusted Supplier</span>
            <p className='text-center para text-base'>We have an efficient supply-chain management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicessection;
