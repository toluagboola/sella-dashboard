import React from "react";

const Button = ({
  bgColor,
  color,
  icon,
  size,
  text,
  bgHoverColor,
  borderRadius,
  width,
}) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor} w-${width}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
