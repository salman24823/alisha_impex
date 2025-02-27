"use client"

import React, { useEffect, useState } from "react";

const Products = () => {
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
    (product) => product.category === "Reactive_Dyes"
  );
  console.log(products,"products")

  return (
    <div className="variations flex flex-col gap-10">
   
      {/* loading state */}
      {loading ? (
        <div className="w-full text-center text-xl">Loading...</div>
      ) : (
        <div className="variation_grid w-full grid grid-cols-1 md:grid-cols-4 min-[1800px]:grid-cols-5 lg:grid-cols-4 gap-8 variations_table bg-no repeat">
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
      )}
    </div>
  );
};

export default Products;
