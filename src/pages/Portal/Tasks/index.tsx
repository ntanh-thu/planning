import { Button, Card, Space } from 'antd';
import { useState } from 'react';
import { AddNewTask } from './AddNewTask';
import { useAppSelector } from '../../../../hook';
import { CheckCircleOutlined } from '@ant-design/icons';

const Tasks = () => {
   const [newTask, setNewTask] = useState(false);

   const tasks = useAppSelector(state => state.tasks.tasks);
   console.log(tasks);

   return (
      <>
         <div className="tasks-page-header">
            <div className="tasks-page-header-name">Tasks</div>
            <Space size={12} className="tasks-page-header-actions">
               <Button
                  type="primary"
                  onClick={() => {
                     setNewTask(true);
                  }}
               >
                  Add Task
               </Button>
               <Button>Filter</Button>
            </Space>
         </div>
         <div className="tasks-page">
            <Space size={10} direction="vertical">
               {tasks.map((item, i) => {
                  return (
                     <Card key={i} className="task-card">
                        <div className="task-card-name">{item.nameTask}</div>
                        {item.completeMethod == 0 ? (
                           <CheckCircleOutlined className="task-card-check-done" />
                        ) : (
                           item.startTime?.format('HH:mm') + ' - ' + item.endTime?.format('HH:mm')
                        )}
                     </Card>
                  );
               })}
            </Space>
         </div>
         <AddNewTask
            open={newTask}
            onCancel={() => {
               setNewTask(false);
            }}
         />
      </>
   );
};

export default Tasks;
