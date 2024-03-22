import { useSelector } from "react-redux";
import { history } from "../data/history";

const TaskBarGraph = () => {
  const dailyTotal = useSelector((state) => state.task.dailyTotal);

  return (
    <div className="mx-auto mb-4 mt-8 flex h-[200px] max-w-[500px] flex-col justify-end">
      <div className="flex justify-evenly">
        {history.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-end">
            <span className="text-center text-[1rem] text-purple-400">
              {item.date === "Fri" ? dailyTotal : item.numberOfTaskCompleted}
            </span>
            <div
              style={{
                height: `${(item.date === "Fri" ? dailyTotal : item.numberOfTaskCompleted) / 2}vh`,
              }}
              className={`mt-[10px] w-[30px] cursor-pointer rounded-tl-full rounded-tr-full bg-gradient-to-b from-[#D2B1FC] to-[#C0B3FC] hover:opacity-50`}
            ></div>
            <span className="mt-2 text-center text-[0.8rem]">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBarGraph;
