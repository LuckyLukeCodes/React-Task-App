import React from "react";
import { useSelector } from "react-redux";

const CategoryCard = ({ title, color1, color2, shadow, numberOfTaskLeft }) => {
  return (
    <div
      className={`flex h-24 w-[500px] flex-col justify-center gap-2 rounded-md bg-gradient-to-tr pl-5 ${color1} ${color2} ${shadow} text-[var(--text-color)] opacity-65 shadow-md`}
    >
      <h2 className="text-2xl font-semibold capitalize">{title}</h2>
      <h4 className="text-xs">{numberOfTaskLeft} task left</h4>
    </div>
  );
};

export default CategoryCard;
