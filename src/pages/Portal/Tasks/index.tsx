import { Button, Card, Checkbox, Space } from 'antd';
import { useState } from 'react';
import { AddNewTask } from './AddNewTask';

const Tasks = () => {
   const [newTask, setNewTask] = useState(false);
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
               <Card>
                  <Checkbox />
               </Card>
               <Card>
                  <Checkbox />
               </Card>
               <Card>
                  <Checkbox />
               </Card>
               <Card>
                  <Checkbox />
               </Card>
               <Card>
                  <Checkbox />
               </Card>
               <Card>
                  <Checkbox />
               </Card>
               <Card>
                  <Checkbox />
               </Card>
               <Card>
                  <Checkbox />
               </Card>
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
