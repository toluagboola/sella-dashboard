import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { useStateContext } from "../contexts/ContextProvider";

const Footer = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="p-10 mt-8 flex flex-col items-center justify-center">
      <p className="mb-2 text-lg">
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
          className="text-2xl rounded-full p-3 hover:bg-gray-200 mx-1"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/toluwanimi-agboola-025568204/"
          className="text-2xl rounded-full p-3 hover:bg-gray-200 mx-1"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://twitter.com/thetoluisaiah"
          className="text-2xl rounded-full p-3 hover:bg-gray-200 mx-1"
        >
          <FaTwitterSquare />
        </a>
      </div>
    </div>
  );
};

export default Footer;
