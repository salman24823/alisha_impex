import Link from "next/link";
import React from "react";

const Productsidebar = () => {

  const relatedProducts = [
    { name: "Reactive Dyes", link: "/Products" },
    { name: "Disperse Dyes", link: "/Products/DisperseDyes" },
    { name: "Acrylic Dyes", link: "/Products/AcrylicDyes" },
    { name: "Direct Dyes", link: "/Products/DirectDyes" },
    { name: "Sulphur Dyes", link: "/Products/SulphurDyes" },
    { name: "HPMC", link: "/Products/HPMC" },
  ];

  return (
    <div className="sidebar max-[770px]:hidden w-[25%] p-[5%] pr-[0] rounded-r-2xl bg-gray-100">
      {/* Sticky container */}
      <div className="sticky top-28 flex flex-col gap-8">
        {/* Map through the relatedProducts array to render dynamic links */}
        <span className="text-2xl font-bold">Related Products</span>
        {relatedProducts.map((product, index) => (
          <Link
            key={index}
            className=" fade_right hover:text-[#32673B] font-bold w-[100%]"
            href={product.link || "/"} // Use the product's link or fallback to "/"
          >
            {product.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Productsidebar;
