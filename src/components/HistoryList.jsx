import React from "react";
import HistoryCard from "./HistoryCard";

const HistoryList = ({ listTitle }) => {
  return (
    <>
      <div className=" h-[24rem] overflow-y-scroll">
        <div className="mt-3">
          <h6 className="px-6 py-3">{listTitle}</h6>
          <div className="flex flex-col gap-2">
            <HistoryCard date="Fri" numberOfTaskCompleted="3" />
            <HistoryCard date="Thu" numberOfTaskCompleted="12" />
            <HistoryCard date="Wed" numberOfTaskCompleted="5" />
            <HistoryCard date="Tue" numberOfTaskCompleted="5" />
            <HistoryCard date="Mon" numberOfTaskCompleted="5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryList;
