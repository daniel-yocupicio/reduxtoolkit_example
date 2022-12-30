import {configureStore} from '@reduxjs/toolkit';
import TaskReducer from './slices/taskSlice';
import ModalAddReducer from './slices/modalAddSlice';
import ModalEditSlice from './slices/modalEditSlice';
import EditTaskSlice from './slices/editTaskSlice';

const store = configureStore({
  reducer: {
    tasks: TaskReducer,
    modaladd: ModalAddReducer,
    modaledit: ModalEditSlice,
    edittask: EditTaskSlice,
  },
});

export default store;
