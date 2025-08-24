import { Main } from './pages';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';

export const route = [
   {
      path: '/',
      element: <Main />,
      children: [
         { path: '', element: <Dashboard /> },
         { path: 'tasks', element: <Tasks /> },
      ],
   },
];
