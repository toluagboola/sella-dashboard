import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import { chatData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar.jpg";
import avatar2 from "../data/avatar2.jpg";
import avatar3 from "../data/avatar3.png";
import avatar4 from "../data/avatar4.jpg";

const Notification = () => {
  const { closePopup } = useStateContext();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      image: avatar2,
      message: "New customer signed up!",
      desc: "Send a welcome email",
      time: "9:08 AM",
    },
    {
      id: 2,
      image: avatar3,
      message: "You have a message from Randy",
      desc: "Send a response",
      time: "11:56 AM",
    },
    {
      id: 3,
      image: avatar4,
      message: "New Payment received!",
      desc: "Check your earnings",
      time: "4:39 AM",
    },
    {
      id: 4,
      image: avatar,
      message: "Jolly completed tasks",
      desc: "Assign her new tasks",
      time: "1:12 AM",
    },
  ]);

  const deleteNotifications = (id) => {
    if (
      window.confirm(
        "Are you sure? This notification will return when you reopen this popup"
      )
    ) {
      setNotifications(notifications.filter((item) => item.id !== id));
      toast.success("Notification deleted!", {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <div className="nav-item absolute top-16 right-5 md:right-40 p-4 drop-shadow-xl bg-white dark:bg-[#42464D] rounded-2xl md:w-96 w-80 max-h-80 overflow-auto">
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
        {notifications.map((item, index) => (
          <div className="p-4 flex justify-between" key={index}>
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

            <button
              type="button"
              className="pl-6 dark:text-white"
              onClick={() => deleteNotifications(item.id)}
            >
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
