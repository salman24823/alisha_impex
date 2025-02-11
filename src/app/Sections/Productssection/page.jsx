import Link from "next/link";
import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const Productsection = () => {
  return (
    <div id="products" className="sections p-[5%] flex items-center flex-col gap-6">
      <h2 className="sub_heading" data-aos="fade-up">Our Products</h2>
      <span className="text-green-900 max-[770px]:text-center text-lg font-bold" data-aos="fade-up" data-aos-delay="100">
        Supply of high quality dyes and chemicals
      </span>
      <hr className="w-[100%]" data-aos="fade-up" data-aos-delay="200" />
      <div className="product_section grid md:grid-cols-3 grid-cols-1 gap-10">
        <div className="product_card card1 h-[430px] w-[19rem] bg-[url(./../../public/reactive.png)] bg-cover bg-no-repeat rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="300">
          <div className="card_content w-[100%] h-[100%] flex flex-col p-3 card_back text-white font-bold justify-between relative top-[88%]">
            <span className="text-2xl">Reactive dyes</span>
            <div className="card_icon flex flex-col items-center p-4 gap-4 ">
              <IoIosArrowDropright className="size-20" />
              <Link
                href={"/Products"}
                className="card_btn self-center py-2 px-6 text-[1.2rem] rounded-xl border-white border-2 hover:bg-white hover:text-[#32673B]"
              >
                Explore more
              </Link>
              <p className="text-center">
                It's commonly used in textile industries for dying purpose.
              </p>
            </div>
          </div>
        </div>
        <div className="product_card card1 h-[430px] w-[19rem] bg-[url(./../../public/arcylic.png)] bg-cover bg-no-repeat rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="400">
          <div className="card_content w-[100%] h-[100%] flex flex-col p-3 card_back text-white font-bold justify-between relative top-[88%]">
            <span className="text-2xl">Acrylic dyes</span>
            <div className="card_icon flex flex-col items-center p-4 gap-4 ">
              <IoIosArrowDropright className="size-20" />
              <Link
                href={"/Products/AcrylicDyes"}
                className="card_btn self-center py-2 px-6 text-[1.2rem] rounded-xl border-white border-2 hover:bg-white hover:text-[#32673B]"
              >
                Explore more
              </Link>
              <p className="text-center">
                Specially designed to colour synthetic fiber like acrylic and nylon
              </p>
            </div>
          </div>
        </div>
        <div className="product_card card1 h-[430px] w-[19rem] bg-[url(./../../public/sulphur.png)] bg-cover bg-no-repeat rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="500">
          <div className="card_content w-[100%] h-[100%] flex flex-col p-3 card_back text-white font-bold justify-between relative top-[88%]">
            <span className="text-2xl">Sulphur dyes</span>
            <div className="card_icon flex flex-col items-center p-4 gap-4 ">
              <IoIosArrowDropright className="size-20" />
              <Link
                href={"/Products/SulphurDyes"}
                className="card_btn self-center py-2 px-6 text-[1.2rem] rounded-xl border-white border-2 hover:bg-white hover:text-[#32673B]"
              >
                Explore more
              </Link>
              <p className="text-center">
                Commonly used for cotton and other cellulose fibers.
              </p>
            </div>
          </div>
        </div>
        <div className="product_card card1 h-[430px] w-[19rem] bg-[url(./../../public/disperse.png)] bg-cover bg-no-repeat rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="600">
          <div className="card_content w-[100%] h-[100%] flex flex-col p-3 card_back text-white font-bold justify-between relative top-[88%]">
            <span className="text-2xl">Disperse dyes</span>
            <div className="card_icon flex flex-col items-center p-4 gap-4 ">
              <IoIosArrowDropright className="size-20" />
              <Link
                href={"/Products/DisperseDyes"}
                className="card_btn self-center py-2 px-6 text-[1.2rem] rounded-xl border-white border-2 hover:bg-white hover:text-[#32673B]"
              >
                Explore more
              </Link>
              <p className="text-center">
                Primary used for coloring synthetic fiber such as polyester and nylon.
              </p>
            </div>
          </div>
        </div>
        <div className="product_card card1 h-[430px] w-[19rem] bg-[url(./../../public/hpmc.png)] bg-cover bg-no-repeat rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="700">
          <div className="card_content w-[100%] h-[100%] flex flex-col p-3 card_back text-white font-bold justify-between relative top-[88%]">
            <span className="text-2xl">HPMC</span>
            <div className="card_icon flex flex-col items-center p-4 gap-4 ">
              <IoIosArrowDropright className="size-20" />
              <Link
                href={"/Products/HPMC"}
                className="card_btn self-center py-2 px-6 text-[1.2rem] rounded-xl border-white border-2 hover:bg-white hover:text-[#32673B]"
              >
                Explore more
              </Link>
              <p className="text-center">
                Widely used as a thickening, binding, and stabilizing agent in industries
              </p>
            </div>
          </div>
        </div>
        <div className="product_card card1 h-[430px] w-[19rem] bg-[url(./../../public/direct.png)] bg-cover bg-no-repeat rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay="800">
          <div className="card_content w-[100%] h-[100%] flex flex-col p-3 card_back text-white font-bold justify-between relative top-[88%]">
            <span className="text-2xl">Direct dyes</span>
            <div className="card_icon flex flex-col items-center p-4 gap-4 ">
              <IoIosArrowDropright className="size-20" />
              <Link
                href={"/Products/DirectDyes"}
                className="card_btn self-center py-2 px-6 text-[1.2rem] rounded-xl border-white border-2 hover:bg-white hover:text-[#32673B]"
              >
                Explore more
              </Link>
              <p className="text-center">
               Water soluble colorants that want directly to fiber or primary cotton.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productsection;