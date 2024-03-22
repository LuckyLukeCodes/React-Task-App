import React from "react";
import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";

const CategoryList = ({ listTitle }) => {
  const totals = useSelector((state) => state.task.totals);
  return (
    <>
      <h6 className="px-6 py-3 text-base">{listTitle}</h6>
      <div className="no-scrollbar overflow-x-auto">
        <div className="no-scrollbar flex h-28 w-[300%] max-w-screen-md gap-4 overflow-scroll overflow-x-auto px-6">
          <CategoryCard
            title="business"
            color1="from-[#D4145A]"
            color2="to-[#FBB03B]"
            shadow="shadow-[#D4145A]"
            numberOfTaskLeft={totals.totalBusiness}
          />
          <CategoryCard
            title="personal"
            color1="from-[#662D8C]"
            color2="to-[#ED1E79]"
            shadow="shadow-[#662D8C]"
            numberOfTaskLeft={totals.totalPersonal}
          />
          <CategoryCard
            title="other"
            color1="from-[#FF61D2]"
            color2="to-[#FE9090]"
            shadow="shadow-[#FF61D2]"
            numberOfTaskLeft={totals.totalOther}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryList;
