import React from 'react';
import { MdMiscellaneousServices, MdOutlineElectricalServices, MdOutlineMedicalServices } from "react-icons/md";
import { SiAmazonwebservices } from "react-icons/si";

const Servicessection = () => {
  return (
    <div id='services' className='sections p-[5%] w-full flex flex-col items-center gap-7'>
      <h2 className='sub_heading flex gap-2'>Our Services</h2>
      <span className='text-green-900 text-lg font-bold max-[770px]:text-center'>Global Supply of High-Quality Chemicals</span>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
        <div className='flex flex-col justify-center items-center service_card p-6 gap-5 green'>
          <MdMiscellaneousServices className='size-14' />
          <span className='text_color text-2xl font-bold'>Quality</span>
          <p className='text-center para text-base'>We provide the best quality control and assurance.</p>
        </div>
        <div className='flex flex-col justify-center items-center service_card p-5 gap-5 green'>
          <SiAmazonwebservices className='size-14' />
          <span className='text_color text-2xl font-bold'>Sampling</span>
          <p className='text-center para text-base'>Allowing customers to test color samples Sustainability</p>
        </div>
        <div className='flex flex-col justify-center items-center service_card p-5 gap-5 green'>
          <MdOutlineElectricalServices className='size-14' />
          <span className='text_color text-2xl font-bold'>Order</span>
          <p className='text-center para text-base'>Allowing customers to place small or large orders</p>
        </div>
        <div className='flex flex-col justify-center items-center service_card p-5 gap-5 green'>
          <MdOutlineMedicalServices className='size-14' />
          <span className='text_color text-2xl font-bold'>Trusted Supplier</span>
          <p className='text-center para text-base'>All content is a dummy content for demo</p>
        </div>
      </div>
    </div>
  );
};

export default Servicessection;