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
    monthlyTaskTotals: {},
    dailyTaskTotals: {
      mon: 0,
      tue: 0,
      wed: 0,
      thu: 0,
      fri: 0,
      sat: 0,
      sun: 0,
    },
    dailyTotal: 0,
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
      }
    },
    incrementDailyTotals(state, action) {
      const taskItem = action.payload;
      console.log(taskItem);
      switch (taskItem) {
        case "mon":
          state.dailyTaskTotals.mon++;
          break;
        case "tues":
          state.dailyTaskTotals.tue++;
          break;
        case "wed":
          state.dailyTaskTotals.wed++;
          break;
        case "thu":
          state.dailyTaskTotals.thu++;
          break;
        case "fri":
          state.dailyTaskTotals.fri++;
          break;
        case "sat":
          state.dailyTaskTotals.sat++;
          break;
        case "sun":
          state.dailyTaskTotals.sun++;
          break;
      }
    },
    incrementDaysTotal(state, action) {
      state.dailyTotal++;
    },
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice;
