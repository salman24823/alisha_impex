"use client";

import React, { useEffect, useState } from "react";
import Productsidebar from "../Components/Productsidebar/page";
import Form from "../Sections/Form/page";
import { usePathname } from "next/navigation";
import Image from "next/image";
import COLOR from "@/../../public/color-wheel.png";
import Carousel from "../Components/Carousel/page";

const layout = ({ children }) => {
  const pathname = usePathname();
  const [heading, setHeading] = useState("Reactive Dyes");

  useEffect(() => {
    if (pathname.includes("/Products/DisperseDyes")) {
      setHeading("Disperse Dyes");
    } else if (pathname.includes("/Products/AcrylicDyes")) {
      setHeading("Acrylic Dyes");
    } else if (pathname.includes("/Products/DirectDyes")) {
      setHeading("Direct Dyes");
    } else if (pathname.includes("/Products/SulphurDyes")) {
      setHeading("Sulphur Dyes");
    } else if (pathname.includes("/Products/HPMC")) {
      setHeading("HPMC Dyes");
    } else if (pathname.includes("/Products")) {
      setHeading("Reactive Dyes");
    }
  }, [pathname]); // Runs when pathname changes

  return (
    <div className="relative overflow-hidden top-[65px] mb-[65px]">
      
      {/* top banner */}

      <Carousel />
      {/* <section className="relative h-[60vh] md:h-[80vh] w-full bg-[url(./../../public/product-reactive.png)] bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-transparent" />
        <div className="absolute inset-0 flex items-start justify-start p-6 md:p-12">
          <div className="text-left space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500">
                Reactive Dyes
              </span>
            </h1>
            <p className="text-lg md:text-xl font-light text-emerald-200/90 max-w-[500px] animate-fade-in [animation-delay:0.3s]">
              Precision in Every Hue | Sustainable Color Solutions
            </p>
          </div>
        </div>
      </section> */}

      {/* content */}
      
      <div className="flex my-10 p-5 gap-10">
        <Productsidebar />

        <div className="flex-1">
          {/* heading */}
          <div className="flex gap-2">
            <Image
              className="w-8 h-8"
              src={COLOR}
              style={{
                animation: "spin 10s linear infinite",
              }}
            />
            <h2 className="text-3xl font-semibold mb-10 border-b-2 w-full border-green-800 pb-1">
              {heading}
            </h2>
          </div>

          {children}
        </div>

      </div>

      {/* form */}
      <Form />
    </div>
  );
};

export default layout;
