import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

function Products() {
  const { products, currentColor, setProductForm } = useStateContext();

  return (
    <div className="m-2 md:m-10 mt-24 p-6 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-gray-400">Page</p>
          <p className="text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900">
            Products
          </p>
        </div>
        <button
          type="button"
          style={{ backgroundColor: currentColor }}
          className="text-white rounded-xl p-4 hover:opacity-90"
          onClick={() => setProductForm(true)}
        >
          + Add new product
        </button>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between">
        {products.map(
          (item, index) =>
            index <= 24 && (
              <a href={`${window.location.href}/${item.id}`} key={index}>
                <div className="shadow-lg rounded-2xl flex flex-col p-4 m-4 w-48 md:w-38 dark:bg-[#464950] hover:bg-gray-200 dark:hover:bg-gray-700">
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
