import TaskCard from "./TaskCard";

const CardList = ({ listTitle, tasks }) => {
  return (
    <div className="mt-3">
      <h6 className="px-6 py-3 text-base font-semibold tracking-wide">
        {listTitle}
      </h6>
      <div className="flex flex-col gap-2">
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
