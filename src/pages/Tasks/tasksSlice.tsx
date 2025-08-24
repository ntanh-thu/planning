import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../store';
import dayjs from 'dayjs';

export type TaskType = {
   id: number;
   catology: number;
   completeMethod: number;
   description: string;
   nameTask: string;
   startTime?: string;
   endTime?: string;
   status: 'done' | 'pending' | 'todo';
};

export type CatologiesType = { label: string; value: number; default: boolean }[];

const initCatology: CatologiesType = [
   {
      label: 'Study',
      value: 0,
      default: true,
   },
   {
      label: 'Skin Care',
      value: 1,
      default: true,
   },
   {
      label: 'Work',
      value: 2,
      default: true,
   },
   {
      label: 'Homework',
      value: 3,
      default: true,
   },
];

const initTasks: TaskType = {
   id: 0,
   catology: 4,
   completeMethod: 0,
   description: '',
   nameTask: 'tasks 1',
   startTime: dayjs().toString(),
   endTime: dayjs().add(1, 'h').toString(),
   status: 'todo',
};
localStorage.setItem('list-catology', JSON.stringify(initCatology));
localStorage.setItem('tasks', JSON.stringify(initTasks));

interface TasksState {
   tasks: TaskType[];
   listCatology: CatologiesType;
}

const initialState: TasksState = {
   tasks: [initTasks],
   listCatology: initCatology,
};

export const tasksSlice = createSlice({
   name: 'tasks',
   initialState,
   reducers: {
      addCatology: (state, action: PayloadAction<string>) => {
         state.listCatology.push({ label: action.payload, value: state.listCatology.length, default: false });
      },
      removeCatology: (state, action: PayloadAction<number>) => {
         state.listCatology = state.listCatology.filter(item => item.value !== action.payload);
      },
      addTask: (state, action: PayloadAction<TaskType>) => {
         state.tasks.push(action.payload);
      },
      deleteTasks: (state, action: PayloadAction<TaskType>) => {
         state.tasks = state.tasks.filter(item => item.id !== action.payload.id);
      },
      updateTasks: (state, action: PayloadAction<TaskType>) => {
         state.tasks = [...state.tasks.filter(item => item.id !== action.payload.id), action.payload];
      },
      changeStatus: (state, action: PayloadAction<{ item: TaskType; status: 'done' | 'pending' | 'todo' }>) => {
         state.tasks[state.tasks.findIndex(item => item.id === action.payload.item.id)].status = action.payload.status;
      },
   },
});

export const { addCatology, removeCatology, addTask, deleteTasks, updateTasks, changeStatus } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
