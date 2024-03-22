import { useDispatch } from "react-redux";
import { taskActions } from "../store/features/taskSlice";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { menuActions } from "../store/features/menuSlice";

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
    <>
      <h1 className="flex justify-center pb-4 pt-10 text-3xl font-semibold">
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
          ref={taskInputRef}
          placeholder="Enter task here"
          className="border-b-2 border-slate-200 outline-none"
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
          className="mt-8 h-12 w-full rounded-lg bg-blue-500 text-[var(--text-color)]"
        >
          Add Task
        </button>
      </form>
    </>
  );
};

export default AddTask;
