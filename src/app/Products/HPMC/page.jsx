"use client"

import React, { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const HPMC = () => {
  const [products, setProducts] = useState({ data: [] });
  const [loading, setLoading] = useState(true); // Initialize loading state


  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/product");
      const result = await response.json();

      console.log(result, "result");
      // Update state with the entire response
      setProducts(result);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false); // Set loading to false once data is fetched or an error occurs
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products to show only Reactive Dyes
  const reactiveDyes = products.data.filter(
    (product) => product.category === "HPMC"
  );

  return (
    <div className="variations flex flex-col gap-10">
      <div className="hpmc_detail px-[5%] flex flex-col gap-6">
        <p>Hydroxypropyl Methylcellulose (HPMC) is a versatile, high-performance cellulose derivative that offers exceptional qualities for a wide range of applications in the trading industry. Known for its excellent thickening, binding, and film-forming abilities, HPMC enhances the quality of products by improving texture, stability, and performance. In industries such as construction, paints, adhesives, and personal care, HPMC provides unmatched benefits.</p>
        <h3 className="text-2xl font-bold">Key Points</h3>
        <ul className="font-bold flex flex-col gap-4">
                      <li className="flex items-center gap-2">
                        <FaRegCheckCircle className="text-[#32673B]"/>
                        Excellent adhesion and binding properties
                      </li>
                      <li className="flex items-center gap-2">
                        <FaRegCheckCircle className="text-[#32673B]" />
                        Enhanced flowability and workability
                      </li>
                      <li className="flex items-center gap-2">
                        <FaRegCheckCircle className="text-[#32673B]" />
                        Water retention and film forming
                      </li>
                      <li className="flex items-center gap-2">
                        <FaRegCheckCircle className="text-[#32673B]" />
                        Non-toxic & safe for consumption
                      </li>
                      <li className="flex items-center gap-2">
                        <FaRegCheckCircle className="text-[#32673B]" />
                        HPMC acts as a thickener in paint formulations
                      </li>
                    </ul>
      </div>
   
      {/* loading state */}
      {/* {loading ? (
        <div className="w-full text-center text-xl">Loading...</div>
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 variations_table bg-no repeat">
          {reactiveDyes.map((value, index) => (
            <div
              style={{
                backgroundImage: `url(${value.image})`,
              }}
              className="variations_card h-[100px] flex flex-col justify-end bg-cover overflow-hidden"
              key={index}
            >
              <div className="w-full text-center py-2 bg-white">
                <span className="font-bold">{value.name}</span>
              </div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default HPMC;
