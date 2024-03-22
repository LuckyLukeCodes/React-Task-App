import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    incompleteTask: [],
    completeTask: [],
    totals: {
      totalPersonal: 0,
      totalBusiness: 0,
      totalOther: 0,
    },
  },
  reducers: {
    addTask(state, action) {
      const newTask = action.payload;
      const existingItem = state.incompleteTask.find(
        (item) => item.id === newTask.id || item.task === newTask.task,
      );

      if (!existingItem) {
        state.incompleteTask.push({
          id: newTask.id,
          task: newTask.task,
          category: newTask.category,
          date: newTask.date,
          isComplete: newTask.isComplete,
        });

        switch (newTask.category) {
          case "personal":
            state.totals.totalPersonal++;
            break;
          case "business":
            state.totals.totalBusiness++;
            break;
          default:
            state.totals.totalOther++;
        }
      }
    },
    taskComplete(state, action) {
      const taskItem = action.payload;
      const existingIncompleteItem = state.incompleteTask.find(
        (item) => item.id === taskItem.id,
      );
      if (existingIncompleteItem) {
        state.incompleteTask = state.incompleteTask.filter(
          (item) => item.id !== taskItem.id,
        );

        switch (taskItem.category) {
          case "personal":
            state.totals.totalPersonal--;
            break;
          case "business":
            state.totals.totalBusiness--;
            break;
          default:
            state.totals.totalOther--;
        }
      }

      const existingCompleteItem = state.completeTask.find(
        (item) => item.id === taskItem.id,
      );
      if (!existingCompleteItem) {
        state.completeTask.push({
          id: taskItem.id,
          task: taskItem.task,
          category: taskItem.category,
          date: taskItem.date,
          isComplete: true,
        });

        switch (taskItem.category) {
          case "personal":
            state.totals.totalPersonal++;
            break;
          case "business":
            state.totals.totalBusiness++;
            break;
          default:
            state.totals.totalOther++;
        }
      }
    },
    markTaskComplete(state, action) {
      const taskItem = action.payload;
      let objIndex = state.items.findIndex((obj) => obj.id == taskItem.id);
      //   const existingItem = state.items.find((item) => item.id === taskItem.id);
      //might want to check for empty list.
    },
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice;
