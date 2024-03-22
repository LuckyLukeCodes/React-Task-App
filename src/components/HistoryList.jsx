import HistoryCard from "./HistoryCard";
import { history } from "../data/history";

const HistoryList = ({ listTitle }) => {
  return (
    <>
      <div className=" no-scrollbar h-[21.5rem] overflow-y-scroll">
        <div className="mt-3">
          <h6 className="px-6 pb-4 text-base font-semibold tracking-wide">
            {listTitle}
          </h6>
          <div className="flex flex-col gap-2">
            {history.map((item, index) => (
              <HistoryCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryList;
