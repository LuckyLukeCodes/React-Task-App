import React from "react";
import HistoryList from "./HistoryList";

const data = [
  { distance: 13 },
  {
    distance: 20,
  },
  {
    distance: 16,
  },
  {
    distance: 30,
  },
  {
    distance: 22,
  },
];

const Chart = () => {
  return (
    <div className="h-40rem pb-2">
      <h1 className="flex justify-center pb-4 pt-10 text-3xl font-semibold">
        You're Killing It!
      </h1>
      <div className="flex flex-col items-center justify-center px-14">
        <div className="mx-12 flex h-10 w-full items-center justify-around gap-5 rounded-md border-2 border-slate-100 bg-[var(--secondary-color)]">
          <div className="flex h-10 w-1/3 items-center justify-center rounded-md border-[3px] border-transparent hover:border-[var(--hover-color)] hover:text-[var(--hover-color)]">
            Day
          </div>
          <div className="flex h-10 w-1/3 items-center justify-center rounded-md border-[3px] border-transparent hover:border-[var(--hover-color)] hover:text-[var(--hover-color)]">
            Week
          </div>
          <div className="flex h-10 w-1/3 items-center justify-center rounded-md border-[3px] border-transparent hover:border-[var(--hover-color)] hover:text-[var(--hover-color)]">
            Month
          </div>
        </div>
      </div>

      {/* bar graph */}
      <div className="mx-auto mt-14 flex h-[200px] max-w-[500px] flex-col justify-end">
        <div className="flex justify-evenly">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-end">
              <span className="text-center text-[1rem] text-purple-400">
                {item.distance}
              </span>
              <div
                style={{ height: `${item.distance / 2}vh` }}
                className={`mt-[10px] w-[30px] rounded-tl-full rounded-tr-full bg-gradient-to-b from-[#FF61D2] to-[#FE9090] hover:opacity-50`}
              ></div>
            </div>
          ))}
        </div>
        <div className="h-[5px] w-full bg-slate-400"></div>
      </div>

      <HistoryList listTitle="History" />
    </div>
  );
};

export default Chart;
