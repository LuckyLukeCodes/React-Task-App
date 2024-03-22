import CategoryList from "./CategoryList";
import { useSelector } from "react-redux";
import CardList from "./CardList";

const Lists = () => {
  const incompleteTask = useSelector((state) => state.task.incompleteTask);
  const completeTask = useSelector((state) => state.task.completeTask);

  return (
    <div className="h-40rem pb-2">
      <h1 className="flex justify-center pb-4 pt-10 text-3xl font-semibold tracking-wide">
        Today
      </h1>
      <CategoryList listTitle="Lists" />
      <div className="no-scrollbar h-[38rem] overflow-y-scroll">
        <CardList listTitle="Task Incomplete" tasks={incompleteTask} />
        <CardList listTitle="Task Complete" tasks={completeTask} />
      </div>
    </div>
  );
};

export default Lists;
