import { configureStore } from "@reduxjs/toolkit";
import sideSlice from "./sideSlice";

const Store = configureStore({
  reducer: {
    side: sideSlice,
  },
});

export default Store;
