import { Input } from 'antd';
import { MagnifyingGlassIcon } from '@assets/icons';

export default function HeaderSearch() {
   return (
      <div className="header-search">
         <Input placeholder="Search" />
         <MagnifyingGlassIcon className="header-search-icon" />
      </div>
   );
}
