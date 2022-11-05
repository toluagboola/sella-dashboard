import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";

const Footer = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="p-10 mt-8 flex flex-col items-center justify-center">
      <p className="mb-2 text-lg dark:text-gray-400">
        Built by{" "}
        <a
          href="https://toluagboola.github.io/s"
          className="font-semibold hover:underline"
          style={{ color: currentColor }}
        >
          Toluwanimi Isaiah
        </a>
      </p>

      <div className="flex justify-between">
        <a
          href="https://github.com/toluagboola"
          title="GitHub"
          className="text-2xl rounded-full p-3 hover:bg-gray-200 dark:hover:bg-gray-300 dark:hover:text-gray-600 dark:text-gray-500 mx-1"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/toluwanimi-agboola-025568204/"
          title="LinkedIn"
          className="text-2xl rounded-full p-3 hover:bg-gray-200 dark:hover:bg-gray-300 dark:hover:text-gray-600 dark:text-gray-500 mx-1"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://twitter.com/thetoluisaiah"
          title="Twitter"
          className="text-2xl rounded-full p-3 hover:bg-gray-200 dark:hover:bg-gray-300 dark:hover:text-gray-600 dark:text-gray-500 mx-1"
        >
          <FaTwitterSquare />
        </a>
      </div>
    </div>
  );
};

export default Footer;
