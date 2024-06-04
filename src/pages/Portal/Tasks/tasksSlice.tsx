import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../../store';

const LIST_CATOLOGY_TASK = [
   {
      label: 'Study',
      value: 0,
   },
   {
      label: 'Skin Care',
      value: 1,
   },
   {
      label: 'Work',
      value: 2,
   },
   {
      label: 'Homework',
      value: 3,
   },
];
const initTasks = [{ catology: 4, completeMethod: 0, description: '', nameTask: 'tasks 1' }];

localStorage.setItem('list-catology', JSON.stringify(LIST_CATOLOGY_TASK));
localStorage.setItem('tasks', JSON.stringify(initTasks));

interface TasksState {
   tasks: { catology: number; completeMethod: number; description: string; nameTask: string }[];
   listCatology: { label: string; value: number }[];
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
         state.listCatology.push({ label: action.payload, value: state.listCatology.length });
      },
      addTask: (
         state,
         action: PayloadAction<{ catology: number; completeMethod: number; description: string; nameTask: string }>
      ) => {
         state.tasks.push(action.payload);
      },
   },
});

export const { addCatology, addTask } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
