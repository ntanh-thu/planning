import { Input } from 'antd';
import { useState } from 'react';
import { addCatology } from './tasksSlice';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useAppDispatch } from 'hook';

export default function AddCatology() {
   const [newCatology, setNewCatology] = useState<string>('');
   const dispatch = useAppDispatch();
   return (
      <div className="add-catology">
         <Input
            className="add-catology-input"
            value={newCatology}
            onChange={event => {
               setNewCatology(event.target.value);
            }}
         />
         {newCatology.length !== 0 ? (
            <div className="add-catology-action">
               <CheckOutlined
                  className="add-catology-action-icon __check"
                  onClick={() => {
                     dispatch(addCatology(newCatology));
                     setNewCatology('');
                  }}
               />
               <CloseOutlined
                  className="add-catology-action-icon __close"
                  onClick={() => {
                     setNewCatology('');
                  }}
               />
            </div>
         ) : null}
      </div>
   );
}
