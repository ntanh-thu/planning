import Header from '@components/Portal/Header';
import MenuLeft from '@components/Portal/MenuLeft';
import { Outlet } from 'react-router-dom';

export const Portal = () => {
   return (
      <div className="dashboard-layout">
         <MenuLeft />
         <div className="dashboard-layout-right">
            <Header />
            <div className="dashboard-background">
               <div className="dashboard-content" id="dashboard-content">
                  <Outlet />
               </div>
            </div>
         </div>
      </div>
   );
};
