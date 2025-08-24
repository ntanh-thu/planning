import { UnorderedListOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const MenuLeft = () => {
   const leftMenuList = [
      {
         name: 'Tasks',
         path: '',
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
                  to={`${item.path}`}
                  end={item.path === ''}
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
