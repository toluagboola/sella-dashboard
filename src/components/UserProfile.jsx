import React from "react";
import avatar2 from "../data/avatar2.jpg";
import Button from "./Button";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";

const UserProfile = () => {
  const { closePopup, currentColor } = useStateContext();

  return (
    <div className="nav-item absolute top-16 right-5 md:right-0 p-8 drop-shadow-xl bg-white dark:bg-[#42464D] rounded-2xl md:w-400 w-80 max-h-80 overflow-auto">
      <div className="flex items-center justify-between pb-2 border-b-1">
        <p className="font-extrabold text-xl text-gray-600 dark:text-gray-200">
          My Profile
        </p>
        <button
          type="button"
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="p-3 hover:drop-shadow-xl hover:bg-light-gray dark:hover:bg-light-gray bg-white dark:bg-[#42464D]"
          onClick={() => closePopup("userProfile")}
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar2}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            Mrs. Toluwanimi Isaiah
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            CEO, Sella Inc.
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            info@sella.com
          </p>
        </div>
      </div>

      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default UserProfile;
