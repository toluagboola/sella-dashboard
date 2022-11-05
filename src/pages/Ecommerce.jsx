import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, LineChart, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  customersData,
  ordersData,
  productData,
  recentTransactions,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$16,479.09</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl shadow-lg"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-6 lg:gap-6 md:gap-x-0 md:gap-y-6 m-6">
        {/* Sales Overview */}
        <div className="col-span-2 bg-white dark:bg-secondary-dark-bg rounded-2xl p-6 w-full md:w-auto inline-block align-middle shadow-lg">
          <p className="font-bold text-2xl pb-4 pl-1.5 text-slate-900 dark:text-gray-200">
            Sales Overview
          </p>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl p-6 shadow-lg">
          <p className="font-bold text-2xl pb-4 pl-1.5 text-slate-900 dark:text-gray-200">
            Recent Transactions
          </p>

          <div className="flex flex-col">
            {recentTransactions.map((item, index) => (
              <div className="flex justify-between items-center" key={index}>
                <div className="p-2 flex justify-start items-center">
                  <button
                    style={{ color: item.iconColor, background: item.iconBg }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>
                  <div className="pl-4">
                    <p className="font-extrabold text-gray-800 dark:text-gray-200">
                      {item.title}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <p className={`${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-6 lg:gap-6 md:gap-x-0 md:gap-y-6 m-6">
        {/* Top Customers */}
        <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl p-6 shadow-lg">
          <p className="font-bold text-2xl pb-4 pl-1.5 text-slate-900 dark:text-gray-200">
            Top Customers
          </p>

          <div className="flex flex-col">
            {customersData.map(
              (item, index) =>
                index <= 6 && (
                  <div
                    className="p-2 flex justify-start items-center"
                    key={index}
                  >
                    <img
                      src={item.CustomerImage}
                      alt="Person"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="pl-4">
                      <p className="font-extrabold text-gray-800 dark:text-gray-200">
                        {item.CustomerName}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {item.CustomerEmail}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>

        {/* Revenue Updates */}
        <div className="col-span-2 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl md:w-full shadow-lg">
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>

              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>

              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>

            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-6 lg:gap-6 md:gap-x-0 md:gap-y-6 m-6">
        {/* Recent Orders */}
        <div className="col-span-2 bg-white dark:bg-secondary-dark-bg rounded-2xl p-6 w-full md:w-auto inline-block align-middle shadow-lg">
          <p className="font-bold text-2xl pb-4 pl-1.5 text-slate-900 dark:text-gray-200">
            Recent Orders
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
                  {ordersData.map(
                    (item, index) =>
                      index <= 6 && (
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
                      )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl p-6 shadow-lg">
          <p className="font-bold text-2xl pb-4 pl-1.5 text-slate-900 dark:text-gray-200">
            Top Products
          </p>

          <div className="flex flex-col">
            {productData.map(
              (item, index) =>
                index <= 7 && (
                  <a
                    href={`${window.location.origin}/products/${item.id}`}
                    key={index}
                    className="rounded-xl dark:hover:bg-[#464950] hover:shadow-lg"
                  >
                    <div className="p-2 flex justify-start items-center">
                      <img
                        src={item.image}
                        alt="Person"
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="pl-4">
                        <p className="font-extrabold text-gray-800 dark:text-gray-200">
                          {item.name}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </a>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
