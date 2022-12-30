import {createSlice} from '@reduxjs/toolkit';

const changeModalState = (state, action) => {
  return !state;
};

export const modalAddSlice = createSlice({
  name: 'modalAdd',
  initialState: false,
  reducers: {
    changemodal: changeModalState,
  },
});

export const {changemodal} = modalAddSlice.actions;

export default modalAddSlice.reducer;
