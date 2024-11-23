// import { createStore } from "redux";

// import rootReducer from "./reducer/index";

// const store = creatStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";

import taskSlice from "./slice/taskSlice";

const store = configureStore({
  reducer: {
    todo: taskSlice,
  },
});
export default store;
