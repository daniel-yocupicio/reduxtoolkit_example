import {createSlice} from '@reduxjs/toolkit';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {getDate} from '../utils/date';

const addTaskFunction = (state, action) => {
  const newTask = {
    id: uuidv4(),
    text: action.payload,
    done: false,
    initDate: getDate(),
    finishDate: null,
  };

  state.push(newTask);
};

const editTaskFunction = (state, action) => {
  const newState = state.map(item =>
    item.id === action.payload.id ? (item = action.payload) : item,
  );
  return newState;
};

const deleteTaskFunction = (state, action) => {
  const newState = state.filter(item => item.id !== action.payload.id);
  return newState;
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: addTaskFunction,
    deleteTask: deleteTaskFunction,
    editTask: editTaskFunction,
  },
});

export const {addTask, deleteTask, editTask} = taskSlice.actions;

export default taskSlice.reducer;
