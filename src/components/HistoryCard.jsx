import { IoChevronForwardSharp } from "react-icons/io5";

const HistoryCard = ({ date, numberOfTaskCompleted }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className="flex h-14 w-full items-center justify-between gap-5 rounded-md border-2 border-slate-100 bg-[var(--secondary-color)] px-6">
        <h3 className="text-lg text-[var(--hover-color)]">{date}</h3>
        <h5>{numberOfTaskCompleted} Tasks Completed</h5>
        <button>
          <IoChevronForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default HistoryCard;
