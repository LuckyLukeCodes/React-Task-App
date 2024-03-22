import { chartMenu } from "../data/chartMenu";

const ChartMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center px-14">
      <div className="mx-12 flex h-10 w-full items-center justify-around gap-5 rounded-md border-2 border-slate-100 bg-[var(--secondary-color)]">
        {chartMenu.map((item, index) => (
          <div
            key={index}
            className={`${index == 0 ? "border-[var(--hover-color)] text-[var(--hover-color)]" : "border-transparent"} flex h-10 w-1/3 cursor-pointer items-center justify-center rounded-md border-[3px] capitalize hover:border-[var(--hover-color)] hover:text-[var(--hover-color)]`}
          >
            {item.type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartMenu;
