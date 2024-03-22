import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    listBtnClicked: true,
    addBtnClicked: false,
    chartBtnClicked: false,
  },
  reducers: {
    handleListBtnClicked(state, action) {
      state.listBtnClicked = true;
      state.addBtnClicked = false;
      state.chartBtnClicked = false;
    },
    handleAddBtnClicked(state, action) {
      state.listBtnClicked = false;
      state.addBtnClicked = true;
      state.chartBtnClicked = false;
    },
    handleChartBtnClicked(state, action) {
      state.listBtnClicked = false;
      state.addBtnClicked = false;
      state.chartBtnClicked = true;
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice;
