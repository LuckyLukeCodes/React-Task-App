const MenuButton = ({ text, icon, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      disabled={active}
      className={`${text === "add" && "text-[3rem]"} ${active ? "text-[var(--hover-color)]" : "text-slate-400"} text-[2.5rem]  font-bold  hover:text-[var(--hover-color)]`}
    >
      {icon}
    </button>
  );
};

export default MenuButton;
