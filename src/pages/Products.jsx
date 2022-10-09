import React from "react";
import { useLocation } from "react-router-dom";
import { productData } from "../data/dummy";
import { ChartsHeader } from "../components";

function Products() {
  const { pathname } = useLocation();
  return (
    <div className="m-2 md:m-10 mt-24 p-6 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Page" title="Products" />
      <div className="flex flex-wrap justify-center md:justify-between">
        {productData.map(
          (item, index) =>
            index <= 24 && (
              <a href={`${window.location.href}/${item.id}`}>
                <div
                  key={index}
                  className="shadow-lg rounded-2xl flex flex-col p-4 m-4 w-48 md:w-38 dark:bg-[#464950] hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <img
                    src={item.image}
                    alt="Person"
                    className="rounded-2xl w-40 h-40 md:w-38 md:h-38"
                  />
                  <p className="font-bold mt-2 pb-1 text-gray-800 dark:text-gray-200">
                    {item.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.price}
                  </p>
                </div>
              </a>
            )
        )}
      </div>
    </div>
  );
}

export default Products;
