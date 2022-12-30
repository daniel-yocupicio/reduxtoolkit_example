import {createSlice} from '@reduxjs/toolkit';

const setTaskFunction = (state, action) => {
  return action.payload;
};

const resetTaskFunction = (state, action) => {
  return null;
};

export const editTaskSlice = createSlice({
  name: 'editTask',
  initialState: null,
  reducers: {
    setTask: setTaskFunction,
    resetTask: resetTaskFunction,
  },
});

export const {setTask, resetTask} = editTaskSlice.actions;

export default editTaskSlice.reducer;
