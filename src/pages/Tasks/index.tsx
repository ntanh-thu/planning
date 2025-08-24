import { Button, Card, Space } from 'antd';
import { useMemo, useState } from 'react';
import { AddNewTask } from './AddNewTask';
import { useAppSelector } from '../../../hook';
import {
   CheckCircleOutlined,
   ExclamationCircleOutlined,
   CloseCircleOutlined,
   QuestionCircleOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { changeStatus, deleteTasks } from './tasksSlice';
import dayjs, { Dayjs } from 'dayjs';

const Tasks = () => {
   const tasks = useAppSelector(state => state.tasks.tasks);
   const dispatch = useDispatch();
   const [newTask, setNewTask] = useState(false);
   const [itemEdit, setItemEdit] = useState<{
      id: number;
      catology: number;
      completeMethod: number;
      description: string;
      nameTask: string;
      startTime?: Dayjs | undefined;
      endTime?: Dayjs | undefined;
      status: 'done' | 'pending' | 'todo';
   }>({
      id: 0,
      nameTask: '',
      description: '',
      catology: 0,
      completeMethod: 0,
      startTime: dayjs(),
      endTime: dayjs().add(1, 'hour'),
      status: 'todo',
   });

   const todoTasks = useMemo(() => {
      const filterTodoList = tasks.filter(item => item.status === 'todo' || item.status === 'pending');
      return filterTodoList;
   }, [tasks]);
   const completeTasks = useMemo(() => {
      const filterCompleteList = tasks.filter(item => item.status === 'done');
      return filterCompleteList;
   }, [tasks]);

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
               {todoTasks.map((item, i) => {
                  return (
                     <Card key={i} className="task-card">
                        <div className="task-card-name">{item.nameTask}</div>
                        {item.completeMethod == 0 ? null : (
                           <div className="task-card-time">
                              {dayjs(item.startTime).format('HH:mm').toString() +
                                 ' - ' +
                                 dayjs(item.endTime).format('HH:mm').toString()}
                           </div>
                        )}
                        <div className="task-card-status">
                           <CheckCircleOutlined
                              className="task-card-status-todo"
                              onClick={() => {
                                 dispatch(changeStatus({ item: item, status: 'done' }));
                              }}
                           />
                           <CloseCircleOutlined
                              className="task-card-status-delete"
                              onClick={() => {
                                 dispatch(deleteTasks(item));
                              }}
                           />
                           <QuestionCircleOutlined
                              className="task-card-status-edit"
                              onClick={() => {
                                 setNewTask(true);
                                 const convertTimeItem = {
                                    ...item,
                                    startTime: dayjs(item.startTime),
                                    endTime: dayjs(item.endTime),
                                 };
                                 setItemEdit(convertTimeItem);
                              }}
                           />
                        </div>
                     </Card>
                  );
               })}
            </Space>
            <Space size={10} direction="vertical">
               {completeTasks.map((item, i) => {
                  return (
                     <Card key={i} className="task-card">
                        <div className="task-card-name">{item.nameTask}</div>
                        {item.completeMethod !== 0 ? (
                           <div className="task-card-time">
                              {dayjs(item.startTime).format('HH:mm').toString() +
                                 ' - ' +
                                 dayjs(item.endTime).format('HH:mm').toString()}
                           </div>
                        ) : null}
                        <div className="task-card-status">
                           Complete !
                           <ExclamationCircleOutlined
                              className="task-card-status-done"
                              onClick={() => {
                                 dispatch(changeStatus({ item: item, status: 'todo' }));
                              }}
                           />
                           <CloseCircleOutlined
                              className="task-card-status-delete"
                              onClick={() => {
                                 dispatch(deleteTasks(item));
                              }}
                           />
                        </div>
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
            edit={itemEdit}
         />
      </>
   );
};

export default Tasks;
