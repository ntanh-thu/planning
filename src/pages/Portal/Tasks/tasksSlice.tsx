import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../../store';
import dayjs, { Dayjs } from 'dayjs';

const initCatology = [
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
const initTasks = [
   {
      catology: 4,
      completeMethod: 0,
      description: '',
      nameTask: 'tasks 1',
      startTime: dayjs(),
      endTime: dayjs().add(1, 'h'),
      status: 'todo',
   },
];

localStorage.setItem('list-catology', JSON.stringify(initCatology));
localStorage.setItem('tasks', JSON.stringify(initTasks));

interface TasksState {
   tasks: {
      catology: number;
      completeMethod: number;
      description: string;
      nameTask: string;
      startTime?: Dayjs;
      endTime?: Dayjs;
      status: 'done' | 'pending' | 'todo';
   }[];
   listCatology: { label: string; value: number; default: boolean }[];
}

const localStorageTasks = JSON.parse(localStorage.getItem('tasks')!);
const localStorageCatology = JSON.parse(localStorage.getItem('list-catology')!);

const initialState: TasksState = {
   tasks: localStorageTasks,
   listCatology: localStorageCatology,
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
         console.log(action.payload, 'remove');
      },
      addTask: (
         state,
         action: PayloadAction<{
            catology: number;
            completeMethod: number;
            description: string;
            nameTask: string;
            startTime?: Dayjs;
            endTime?: Dayjs;
            status: 'done' | 'pending' | 'todo';
         }>
      ) => {
         state.tasks.push(action.payload);
      },
   },
});

export const { addCatology, removeCatology, addTask } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
