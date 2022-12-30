import {createSlice} from '@reduxjs/toolkit';

const changeModalState = (state, action) => {
  return !state;
};

export const ModalEditSlice = createSlice({
  name: 'modalEdit',
  initialState: false,
  reducers: {
    changemodal: changeModalState,
  },
});

export const {changemodal} = ModalEditSlice.actions;

export default ModalEditSlice.reducer;
