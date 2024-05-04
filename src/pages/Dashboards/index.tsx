import Header from '@components/Dashboards/Header';
import MenuLeft from '@components/Dashboards/MenuLeft';
import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
   return (
      <div className="dashboard-layout">
         <MenuLeft />
         <div className="dashboard-layout-right">
            <Header />
            <div className="dashboard-content">
               <Outlet />
            </div>
         </div>
      </div>
   );
};
