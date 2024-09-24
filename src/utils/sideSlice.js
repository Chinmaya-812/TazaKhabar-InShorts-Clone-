import { createSlice } from "@reduxjs/toolkit";

const sideSlice = createSlice({
  name: "side",
  initialState: {
    isSidebarOpen: false,
  },

  reducers: {
    toggleMenu: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    //   console.log("Yes")
    },
  },
});

export const {toggleMenu}=sideSlice.actions;

export default sideSlice.reducer
