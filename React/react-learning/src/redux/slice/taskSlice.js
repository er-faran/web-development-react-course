import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      //   state.tasks.push(action.payload);
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id != action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = taskSlice.actions; // Components to update store
export default taskSlice.reducer; // For Store
