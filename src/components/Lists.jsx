import TaskCard from "./TaskCard";
import CategoryList from "./CategoryList";
import { useSelector } from "react-redux";
import { useState } from "react";

const Lists = () => {
  const incompleteTask = useSelector((state) => state.task.incompleteTask);
  const completeTask = useSelector((state) => state.task.completeTask);

  // const updateList = (id) => {
  //   console.log("Updating...." + id);
  //   setIncompleteTask(taskItems.filter((item) => item.id !== id));
  //   setCompleteTask(taskItems.filter((x) => x.isComplete === true));
  // };

  return (
    <div className="h-40rem pb-2">
      <h1 className="flex justify-center pb-4 pt-10 text-3xl font-semibold">
        Today
      </h1>
      <div className="">
        <CategoryList listTitle="Lists" />
      </div>

      <div className="h-[32rem] overflow-y-scroll">
        <div className="mt-3">
          <h6 className="px-6 py-3">Tasks Left</h6>
          <div className="flex flex-col gap-2">
            {incompleteTask.map((task) => (
              <TaskCard key={task.id} {...task} />
            ))}
          </div>
        </div>
        <div className="mt-3">
          <h6 className="px-6 py-3">Tasks Done</h6>
          <div className="flex flex-col gap-2">
            {completeTask.map((task) => (
              <TaskCard key={task.id} {...task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
