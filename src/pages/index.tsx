import Header from '@components/Header';
import MenuLeft from '@components/MenuLeft';
import { Outlet } from 'react-router-dom';

export const Main = () => {
   return (
      <div className="page-layout">
         <MenuLeft />
         <div className="page-layout-right">
            <Header />
            <div className="page-background">
               <div className="page-content" id="page-content">
                  <Outlet />
               </div>
            </div>
         </div>
      </div>
   );
};
