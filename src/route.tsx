import { Dashboard } from './pages/Dashboards';
import { HomePages } from './pages/HomePages';

const DASHBOARD = '/dashboard';
const HOMEPAGES = '/homepages';
export const route = [
   {
      path: DASHBOARD,
      element: <Dashboard />,
   },
   {
      path: HOMEPAGES,
      element: <HomePages />,
   },
];
