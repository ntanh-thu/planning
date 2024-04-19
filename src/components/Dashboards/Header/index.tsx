import { MenuIcon, NotificationIcon } from '@assets/icons';
import HeadderSearch from './HeaderSearch';
import AccountBox from './AccountBox';

export default function Header() {
   return (
      <div className="header">
         <div className="header-left">
            <MenuIcon width="22" height="25" className="header-icon" />
            <HeadderSearch />
         </div>
         <div className="header-right">
            <NotificationIcon number={10} className="header-icon" />
            <AccountBox name="anhthu" />
         </div>
      </div>
   );
}
