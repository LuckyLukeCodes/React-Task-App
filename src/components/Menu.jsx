import { useDispatch, useSelector } from "react-redux";
import { IoMdAddCircleOutline } from "react-icons/io";
import { VscChecklist } from "react-icons/vsc";
import { LuPieChart } from "react-icons/lu";
import { menuActions } from "../store/features/menuSlice";
import MenuButton from "./MenuButton";

const Menu = () => {
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.menu);
  const handleListClick = () => {
    dispatch(menuActions.handleListBtnClicked());
  };

  const handleAddClick = () => {
    dispatch(menuActions.handleAddBtnClicked());
  };

  const handleChartClick = () => {
    dispatch(menuActions.handleChartBtnClicked());
  };

  return (
    <div className="absolute bottom-[102px] z-10 flex h-24 w-[35rem] items-center justify-evenly rounded-bl-3xl rounded-br-3xl border-t-2 border-slate-200 bg-white">
      <MenuButton
        text="list"
        icon={<VscChecklist />}
        onClick={handleListClick}
        active={menuState.listBtnClicked}
      />
      <MenuButton
        text="add"
        icon={<IoMdAddCircleOutline />}
        onClick={handleAddClick}
        active={menuState.addBtnClicked}
      />
      <MenuButton
        text="chart"
        icon={<LuPieChart />}
        onClick={handleChartClick}
        active={menuState.chartBtnClicked}
      />
    </div>
  );
};

export default Menu;
