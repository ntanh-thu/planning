import { UnorderedListOutlined, ProductOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const MenuLeft = () => {
   const leftMenuList = [
      {
         name: 'Home',
         icon: <ProductOutlined className="menu-left-item__icon" />,
      },
      {
         name: 'Tasks',
         icon: <UnorderedListOutlined className="menu-left-item__icon" />,
      },
   ];
   return (
      <div className="menu-left">
         <div className="menu-left-icon">
            My<p>Planning</p>
         </div>
         {leftMenuList.map((item, i) => {
            return (
               <NavLink
                  className={({ isActive, isPending }) =>
                     isPending ? '' : isActive ? 'menu-left-item menu-left-item-active' : 'menu-left-item'
                  }
                  key={i}
                  to={`${item.name}`}
               >
                  {item.icon}
                  {item.name}
               </NavLink>
            );
         })}
      </div>
   );
};

export default MenuLeft;
