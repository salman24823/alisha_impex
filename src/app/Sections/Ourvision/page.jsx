import React from 'react'

const Ourvision = () => {
  return (
    <div className='Main_cnt'>
      <div className="parent_ourvision  grid grid-cols-1 md:grid-cols-2">
      <div className="greenback flex p-[10%] flex-col  gap-3 md:col-span-1"  data-aos="fade-right" data-aos-delay="400">
        <h2 className="sub_white">Our Vision</h2>
        <p className="text-white md:w-[80%]  ">
        We aim to revolutionize the dye and chemicals industry by providing high-quality, sustainable dyes to factories. As importers, we use innovative technology and environmentally responsible methods to ensure our products support creativity and sustainability. We aim to transform how companies acquire and utilize dyes, driving the industry toward a future where every color represents limitless potential and responsible practices.</p>
      </div>
      <div className=" flex flex-col p-[10%] gap-3 md:col-span-1" data-aos="fade-left" data-aos-delay="400">
      <h2 className="sub_heading">Our Mission</h2>
        <p className="para md:w-[90%] ">Our mission is to become a leading supplier of high-quality imported dyes to factories, offering a diverse range of products tailored to meet specific industrial needs. We are dedicated to providing reliable service with prompt delivery and expert assistance. By maintaining a strong commitment to quality and sustainability, we ensure that our dyes meet the highest standards, contributing to a more vibrant and eco-conscious future. Through our work, we help factories bring their production processes to life with the perfect dye solutions.</p>
      </div>
      </div>
    </div>
  )
}

export default Ourvision