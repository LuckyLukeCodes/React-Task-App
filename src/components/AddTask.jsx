import { useDispatch } from "react-redux";
import { taskActions } from "../store/features/taskSlice";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { menuActions } from "../store/features/menuSlice";
import lightning from "../assets/lightning.png";

const isEmpty = (value) => value.trim() === "";

const AddTask = () => {
  const [formInputValidity, setFormInputValidity] = useState({
    task: true,
    category: true,
    date: true,
  });
  const dispatch = useDispatch();
  const taskInputRef = useRef();
  const categoryInputRef = useRef();
  const dateInputRef = useRef();
  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    const task = taskInputRef.current.value;
    const category = categoryInputRef.current.value;
    const date = dateInputRef.current.value;
    const enteredTaskIsValid = !isEmpty(task);

    setFormInputValidity({
      task: enteredTaskIsValid,
      category: true,
      date: true,
    });

    const formIsValid = enteredTaskIsValid;

    if (!formIsValid) {
      return;
    }

    let id = uid();
    let isComplete = false;

    dispatch(
      taskActions.addTask({
        id,
        task,
        category,
        date,
        isComplete,
      }),
    );

    toast.success("Task Added Successfully");
    dispatch(menuActions.handleListBtnClicked());
  };

  return (
    <div className="flex h-4/5 flex-col justify-center">
      <div className="flex w-full items-center justify-center pt-10">
        <img
          src={lightning}
          alt="lightning bolt"
          className="rounded-full border-4 border-indigo-500/75 p-2"
        />
      </div>
      <h1 className="flex justify-center pb-4 pt-4 text-3xl font-semibold tracking-wide">
        Add Task
      </h1>
      <form
        onSubmit={handleAddTask}
        className="mx-24 mt-12 flex flex-col justify-center gap-8"
      >
        <input
          id="task"
          name="task"
          type="text"
          aria-autocomplete="both"
          aria-haspopup="false"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          autoFocus=""
          ref={taskInputRef}
          placeholder="Enter task here"
          className="border-b-2 border-slate-200 bg-none outline-none"
        ></input>
        {!formInputValidity.task && <p>Please enter a valid task</p>}
        <select
          title="Category"
          defaultValue="default"
          ref={categoryInputRef}
          className="border-b-2 border-slate-300 text-slate-400 outline-none"
        >
          <option value="default">Choose a category</option>
          <option value="business">Business</option>
          <option value="personal">Personal</option>
          <option value="other">Other</option>
        </select>
        <input
          id="task"
          name="task"
          type="date"
          ref={dateInputRef}
          required
          placeholder="Enter task here"
          className="border-b-2 border-slate-200 text-slate-400 outline-none"
        ></input>
        <button
          type="submit"
          className="mt-8 h-12 w-full rounded-lg bg-[var(--hover-color)] text-white shadow-lg transition-colors delay-150 ease-linear hover:bg-[#6480C8]"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
