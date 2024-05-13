import { Portal } from './pages/Portal';
import Dashboard from './pages/Portal/Dashboard';
import Tasks from './pages/Portal/Tasks';
import { Ecommerce } from './pages/Ecommerce';

const PORTAL = '/portal';
const ECOMMERCE = '/ecommerce';
export const route = [
   {
      path: PORTAL,
      element: <Portal />,
      children: [
         { path: '', element: <Dashboard /> },
         { path: 'tasks', element: <Tasks /> },
      ],
   },
   {
      path: ECOMMERCE,
      element: <Ecommerce />,
   },
];
