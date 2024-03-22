import { IoChevronForwardSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { menuActions } from "../store/features/menuSlice";

const HistoryCard = ({ date, numberOfTaskCompleted }) => {
  const dailyTotal = useSelector((state) => state.task.dailyTotal);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(menuActions.handleListBtnClicked());
  };
  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className="flex h-14 w-full items-center justify-between gap-5 rounded-md border-2 border-slate-100 bg-[var(--secondary-color)] px-6">
        <h3 className="text-lg text-[var(--hover-color)]">{date}</h3>
        <h5>
          {date === "Fri" ? dailyTotal : numberOfTaskCompleted} Tasks Completed
        </h5>
        <button onClick={handleClick} disabled={date !== "Fri"}>
          <IoChevronForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default HistoryCard;
