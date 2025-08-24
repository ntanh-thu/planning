import { Main } from './pages';
import Tasks from './pages/Tasks';

export const route = [
   {
      path: '/',
      element: <Main />,
      children: [{ path: '', element: <Tasks /> }],
   },
];
