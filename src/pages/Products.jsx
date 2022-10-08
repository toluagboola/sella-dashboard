import React from "react";
import { ordersData } from "../data/dummy";
import { ChartsHeader } from "../components";

function Products() {
  return (
    <div className="m-2 md:m-10 mt-24 p-6 md:p-10 bg-white dark:bg-[#42464D] rounded-3xl">
      <ChartsHeader category="Page" title="Products" />
      <div className="flex flex-wrap justify-center md:justify-between">
        {ordersData.map((item, index) => (
          <div className="drop-shadow-xl flex flex-col p-2 m-4 w-48 md:w-32">
            <img
              src={item.ProductImage}
              alt="Person"
              className="rounded-2xl w-40 h-40 md:w-28 md:h-28"
            />
            <p className="font-bold mt-2 text-lg">{item.OrderItems}</p>
            <p>${item.TotalAmount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
