import { useDispatch } from "react-redux";
import { taskActions } from "../store/features/taskSlice";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TaskCard = ({ id, task, category, date, isComplete }) => {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    var formattedDate = new Date(date);
    var day = formattedDate.toLocaleString("default", { weekday: "short" });

    dispatch(
      taskActions.taskComplete({
        id,
        task,
        category,
        date,
        isComplete,
      }),
    );

    dispatch(taskActions.incrementDaysTotal());
  };

  let taskColor = "";

  switch (category) {
    case "personal":
      taskColor = "text-[#662D8C]";
      break;
    case "business":
      taskColor = "text-[#D4145A]";
      break;
    default:
      taskColor = "text-[#FF61D2]";
  }

  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className="flex h-14 w-full items-center justify-start gap-5 rounded-md border-2 border-slate-100 bg-[var(--secondary-color)]">
        <button
          onClick={handleClick}
          disabled={isComplete}
          className={`${taskColor} ml-4 w-4 rounded-full text-[1.5rem] font-bold`}
        >
          {isComplete ? <FaRegCheckCircle /> : <FaRegCircle />}
        </button>
        <h4
          className={`${isComplete && "text-slate-400 line-through"} text-[1rem]`}
        >
          {task}
        </h4>
      </div>
    </div>
  );
};

export default TaskCard;
