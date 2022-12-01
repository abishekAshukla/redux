import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";

const store = configureStore({
  reducer: {
    custome: customReducer,
  },
});

export default store;
