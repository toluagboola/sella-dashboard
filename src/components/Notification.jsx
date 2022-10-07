import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { Button } from ".";
import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Notification = () => {
  const { closePopup } = useStateContext();

  return (
    <div className="absolute top-16 right-5 md:right-40 p-6 drop-shadow-xl bg-white dark:bg-[#42464D] rounded-2xl w-96 max-h-80 overflow-auto">
      <div className="flex items-center justify-between pb-2 border-b-1">
        <p className="font-extrabold text-xl text-gray-600 dark:text-gray-200">
          Notifications
        </p>
        <button
          type="button"
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="p-3 hover:drop-shadow-xl hover:bg-light-gray dark:hover:bg-light-gray bg-white dark:bg-[#42464D]"
          onClick={() => closePopup("notification")}
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div className="mt-4">
        {chatData.map((item, index) => (
          <div className="p-4 flex justify-between">
            <div className="flex justify-start items-center">
              <img
                src={item.image}
                alt="Person"
                className="w-10 h-10 rounded-full"
              />
              <div className="pl-4">
                <p className="font-extrabold text-gray-800 dark:text-gray-200">
                  {item.message}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>

            <button type="button" className="pl-6 dark:text-white">
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
