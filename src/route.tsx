import { Dashboard } from './pages/Dashboards';
import HomeDashBoard from './pages/Dashboards/Home';
import Tasks from './pages/Dashboards/Tasks';
import { HomePages } from './pages/HomePages';

const DASHBOARD = '/dashboard';
const HOMEPAGES = '/homepages';
export const route = [
   {
      path: DASHBOARD,
      element: <Dashboard />,
      children: [
         { path: 'tasks', element: <Tasks /> },
         { path: 'home', element: <HomeDashBoard /> },
      ],
   },
   {
      path: HOMEPAGES,
      element: <HomePages />,
   },
];
