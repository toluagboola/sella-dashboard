import React from "react";
import { useParams } from "react-router-dom";
import { productData, ordersData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

function Product() {
  const { id } = useParams();
  const { products, currentColor } = useStateContext();
  const product = products.filter((item) => item.id == id)[0];
  const orders = ordersData.filter((item) => item.id == id);

  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-6 md:p-10 md:pb-20 flex flex-col md:flex-row justify-center md:justify-start border-b-1">
        <img
          src={product.image}
          alt=""
          className="rounded-2xl w-52 h-48 mb-6 md:mb-0 md:w-96 md:h-96"
        />

        <div className="flex flex-col md:pl-10">
          <p className="font-extrabold md:text-4xl text-3xl pb-4 text-slate-900 dark:text-gray-200">
            {product.name}
          </p>
          <p className="uppercase font-bold">
            <span className="text-gray-400">By</span>
            <span className="pl-1" style={{ color: currentColor }}>
              Sella
            </span>
          </p>
          <p className="text-gray-400 py-8">{product.description}</p>
          <p>
            <span className="text-3xl font-semibold text-slate-700 dark:text-gray-200">
              {product.price}
            </span>
            <span className="pl-4 text-gray-500">Inclusive of all Taxes</span>
          </p>
        </div>
      </div>

      <div className="m-2 md:m-10 p-6 flex flex-col">
        <p className="font-bold text-2xl pb-4 pl-1.5 text-slate-900 dark:text-gray-200">
          Product Orders
        </p>
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border dark:border-gray-500 rounded-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-500">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-s font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-s font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Customer name
                  </th>
                  <th className="px-6 py-3 text-left text-s font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Total Amount
                  </th>
                  <th className="px-6 py-3 text-left text-s font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-s font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-500">
                {orders.length > 0 ? (
                  orders.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-900 dark:text-gray-200">
                        {item.OrderID}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-900 dark:text-gray-200">
                        {item.CustomerName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-900 dark:text-gray-200">
                        ${item.TotalAmount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className="text-white py-1 px-2 capitalize rounded-2xl text-s"
                          style={{ background: item.StatusBg }}
                        >
                          {item.Status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-900 dark:text-gray-200">
                        {item.Location}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-slate-900 dark:text-gray-200 text-center py-6"
                    >
                      No orders yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
