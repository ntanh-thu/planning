import { Form, Input, Modal, Select, TimePicker } from 'antd';
import { ReactElement, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hook';
import { addCatology, addTask } from './tasksSlice';

type Props = {
   open: boolean;
   onCancel: () => void;
};
export const AddNewTask = ({ open = false, onCancel = () => {} }: Props) => {
   const [form] = Form.useForm();
   const listCatology = useAppSelector(state => state.tasks.listCatology);
   const dispatch = useAppDispatch();
   const [completeMethod, setCompleteMethod] = useState(0);
   const [newCatology, setNewCatology] = useState('');
   const handleAddNewTask = (values: {
      catology: number;
      completeMethod: number;
      description: string;
      nameTask: string;
   }) => {
      dispatch(addTask(values));
      onCancel();
      form.resetFields();
   };

   const initialValue = {
      nameTask: '',
      description: '',
      catology: 0,
      completeMethod: 0,
      rangeTime: '',
   };

   return (
      <Modal
         open={open}
         onCancel={onCancel}
         centered
         onOk={() => {
            form.submit();
         }}
         className="add-task-modal"
      >
         <div className="add-task-modal-header">Add New Tasks</div>
         <Form
            onFinish={handleAddNewTask}
            form={form}
            labelCol={{ span: 8 }}
            labelAlign="left"
            initialValues={initialValue}
         >
            <Form.Item
               name={'nameTask'}
               label="Task Name"
               rules={[{ required: true, message: 'Pleae add name tasks' }]}
               required
            >
               <Input placeholder="Name Tasks" />
            </Form.Item>
            <Form.Item name="description" label="Description">
               <Input.TextArea />
            </Form.Item>
            <Form.Item
               name="catology"
               label="Catology"
               rules={[{ required: true, message: 'Please select catology of task' }]}
            >
               <Select
                  dropdownRender={(menu: ReactElement) => {
                     return (
                        <>
                           {menu}
                           <div className="add-catology">
                              <Input
                                 value={newCatology}
                                 onChange={event => {
                                    setNewCatology(event.target.value);
                                 }}
                                 onPressEnter={() => {
                                    dispatch(addCatology(newCatology));
                                    setNewCatology('');
                                 }}
                              />
                           </div>
                        </>
                     );
                  }}
               >
                  {listCatology.map((item, i) => {
                     return (
                        <Select.Option key={i} value={item.value}>
                           {item.label}
                        </Select.Option>
                     );
                  })}
               </Select>
            </Form.Item>
            <Form.Item
               name="completeMethod"
               label="Complete Method"
               required
               rules={[{ required: true, message: 'Please choose a complete method' }]}
            >
               <Select
                  onChange={event => {
                     setCompleteMethod(event);
                  }}
               >
                  <Select.Option value={0}>Mark to Done</Select.Option>
                  <Select.Option value={1}>Timing</Select.Option>
               </Select>
            </Form.Item>
            {completeMethod !== 0 ? (
               <Form.Item
                  name="rangeTime"
                  label="Start Time - End Time"
                  required
                  rules={[{ required: true, message: 'Please add start time and end time for the task' }]}
               >
                  <TimePicker.RangePicker format="HH:mm" needConfirm={false} />
               </Form.Item>
            ) : null}
         </Form>
      </Modal>
   );
};
