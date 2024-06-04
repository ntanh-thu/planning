import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../../store';

// Define a type for the slice state
const LIST_CATOLOGY_TASK = [
   {
      label: 'Study',
      value: 0,
   },
   {
      label: 'Skin Care',
      value: 0,
   },
   {
      label: 'Work',
      value: 1,
   },
   {
      label: 'Homework',
      value: 3,
   },
];

localStorage.setItem('list-catology', JSON.stringify(LIST_CATOLOGY_TASK));

interface TasksState {
   value: number;
   listCatology: { label: string; value: number }[];
}

// Define the initial state using that type
const initialState: TasksState = {
   value: 0,
   listCatology: LIST_CATOLOGY_TASK,
};

console.log(initialState);

export const tasksSlice = createSlice({
   name: 'tasks',
   // `createSlice` will infer the state type from the `initialState` argument
   initialState,
   reducers: {
      // Use the PayloadAction type to declare the contents of `action.payload`
      incrementByAmount: (state, action: PayloadAction<number>) => {
         state.value += action.payload;
      },
   },
});

export const { incrementByAmount } = tasksSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTasks = (state: RootState) => state.tasks.value;

export default tasksSlice.reducer;
