import Lists from "./Lists";
import AddTask from "./AddTask";
import Chart from "./Chart";
import { useSelector } from "react-redux";
import Menu from "./Menu";

const ContainerCard = () => {
  const menuState = useSelector((state) => state.menu);

  return (
    <div className="flex h-[60rem] w-[35rem] flex-col rounded-3xl bg-[var(--secondary-color)] shadow-2xl shadow-blue-500/20">
      {menuState.listBtnClicked && <Lists />}
      {menuState.addBtnClicked && <AddTask />}
      {menuState.chartBtnClicked && <Chart />}

      <Menu />
    </div>
  );
};

export default ContainerCard;
