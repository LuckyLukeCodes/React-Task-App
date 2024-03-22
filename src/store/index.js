import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/taskSlice";
import menuSlice from "./features/menuSlice";

const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
    menu: menuSlice.reducer,
  },
});

export default store;
