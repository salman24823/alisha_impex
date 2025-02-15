"use client"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import REACTIVE from "@/../../public/product-reactive.png";
import DISPERSE from "@/../../public/product-disperse.png";
import ACRYLIC from "@/../../public/product-arcylic.png";
import SULPHUR from "@/../../public/product-sulphur.png";
import DIRECT from "@/../../public/product-direct.png";
import HPMC from "@/../../public/product_hpmc.png";
import Image from "next/image";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Optional: Enable autoplay
    autoplaySpeed: 3000, // Optional: Set autoplay speed in milliseconds
  };

  return (
    <Slider {...settings}>
      <div className="relative max-[770px]:!flex flex-col-reverse">
        <div className="slider_cont max-[770px]:!w-full img_cont p-[5%] w-[30%] h-[500px] absolute max-[770px]:static z-10 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white">REACTIVE DYES</h1>
          <p className="text-lg text-white ">Reactive dyes explore more: Reactive dyes are a type of dye that chemically bond with fibers, especially cellulose and protein fibers, during the dyeing process. This strong bond ensures vibrant, long-lasting colors that are resistant to fading and washing. They are commonly used in textile industries for dyeing fabrics like cotton and wool.</p>
        </div>
        <Image src={REACTIVE} className="w-full h-[100%] z--1" />
      </div>
      <div className="relative max-[770px]:!flex flex-col-reverse">
      <div className="slider_cont max-[770px]:!w-full img_cont p-[5%] w-[30%] h-[500px] absolute max-[770px]:static z-10 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white">ACRYLIC DYES</h1>
          <p className="text-lg text-white ">Acrylic dyes are specially designed to color synthetic fibers like acrylic and nylon, providing vibrant and durable results. They are known for their excellent colorfastness and ease of use in various applications.</p>
        </div>
      <Image src={ACRYLIC} className="w-full h-[100%]" />
      </div>
      <div className="relative max-[770px]:!flex flex-col-reverse">
      <div className="slider_cont max-[770px]:!w-full img_cont p-[5%] w-[30%] h-[500px] absolute max-[770px]:static z-10 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white">SULPHUR DYES</h1>
          <p className="text-lg text-white ">Sulphur dyes are a class of dyeing agents commonly used for cotton and other cellulose fibers. They are known for their deep, dark shades, excellent colorfastness, and cost-effectiveness, often applied in a two-step process involving reduction and oxidation.</p>
        </div>
      <Image src={SULPHUR} className="w-full h-[100%]" />
      </div>
      <div className="relative max-[770px]:!flex flex-col-reverse">
      <div className="slider_cont max-[770px]:!w-full img_cont p-[5%] w-[30%] h-[500px] absolute max-[770px]:static z-10 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white">DISPERSE DYES</h1>
          <p className="text-lg text-white ">Disperse dyes explore more: Disperse dyes are water-insoluble dyes primarily used for coloring synthetic fibers, such as polyester and nylon. They are finely ground and applied in a dispersed form, offering vibrant colors and good wash fastness.</p>
        </div>
      <Image src={DIRECT} className="w-full h-[100%]" />
      </div>
      <div className="relative max-[770px]:!flex flex-col-reverse">
      <div className="slider_cont max-[770px]:!w-full img_cont p-[5%] w-[30%] h-[500px] absolute max-[770px]:static z-10 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white">DIRECT DYES</h1>
          <p className="text-lg text-white ">Direct dyes are water-soluble colorants that bond directly to fibers, primarily cotton, without the need for a mordant. Known for their ease of application and vibrant hues, they offer a cost-effective solution for textile dyeing, though they may have lower wash fastness compared to other dye types.</p>
        </div>
      <Image src={DISPERSE} className="w-full h-[100%]" />
      </div>
      <div className="relative max-[770px]:!flex flex-col-reverse">
      <div className="slider_cont max-[770px]:!w-full img_cont p-[5%] w-[30%] h-[500px] absolute max-[770px]:static z-10 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white">HPMC</h1>
          <p className="text-lg text-white ">Hydroxypropyl Methylcellulose (HPMC) is a versatile, high-performance cellulose derivative that offers exceptional qualities for a wide range of applications in the trading industry. Known for its excellent thickening, binding, and film-forming abilities, HPMC enhances the quality of products by improving texture, stability, and performance. In industries such as construction, paints, adhesives, and personal care, HPMC provides unmatched benefits.</p>
        </div>
      <Image src={HPMC} className="w-full h-[100%]" />
      </div>
    </Slider>
  );
}