import { faker } from '@faker-js/faker';
import { Button, Space, Table } from 'antd';

const Tasks = () => {
   const column = [
      {
         title: 'Task Name',
         dataIndex: 'taskName',
         key: 'taskName',
      },
      {
         title: 'Task Name',
         dataIndex: 'type',
         key: 'type',
      },
   ];

   const dataSource = new Array(6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1).map((item, i) => {
      return {
         key: i,
         taskName: faker.person.jobTitle(),
         type: faker.number.int({ min: 0, max: 3 }),
      };
   });
   return (
      <>
         <div className="tasks-page-header">
            <div className="tasks-page-header-name">Tasks</div>

            <Space size={12} className="tasks-page-header-actions">
               <Button type="primary">Add Task</Button>
               <Button>Filter</Button>
            </Space>
         </div>
         <Table columns={column} dataSource={dataSource} />
      </>
   );
};

export default Tasks;
