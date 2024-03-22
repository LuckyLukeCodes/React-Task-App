import lightning from "../assets/lightning.png";
import ChartMenu from "./ChartMenu";
import HistoryList from "./HistoryList";
import TaskBarGraph from "./TaskBarGraph";

const Chart = () => {
  return (
    <div className="h-40rem pb-2">
      <div className="flex w-full items-center justify-center pt-10">
        <img
          src={lightning}
          alt="lightning bolt"
          className="rounded-full border-4 border-indigo-500/75 p-2"
        />
      </div>

      <h1 className="mx-24 flex items-center justify-center pb-4 pt-4 text-center text-3xl font-semibold tracking-wide">
        Keep zapping those task!
      </h1>
      <ChartMenu />
      <TaskBarGraph />
      <HistoryList listTitle="History" />
    </div>
  );
};

export default Chart;
