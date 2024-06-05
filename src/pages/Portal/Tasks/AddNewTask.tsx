import { Form, Input, Modal, Select, TimePicker } from 'antd';
import { ReactElement, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hook';
import { addTask, removeCatology } from './tasksSlice';
import { DeleteOutlined } from '@ant-design/icons';
import AddCatology from './AddCatology';
import dayjs, { Dayjs } from 'dayjs';

type Props = {
   open: boolean;
   onCancel: () => void;
};
export const AddNewTask = ({ open = false, onCancel = () => {} }: Props) => {
   const [form] = Form.useForm();
   const listCatology = useAppSelector(state => state.tasks.listCatology);
   const dispatch = useAppDispatch();
   const [completeMethod, setCompleteMethod] = useState<number>(0);

   const handleAddNewTask = (values: {
      catology: number;
      completeMethod: number;
      description: string;
      nameTask: string;
      startTime: Dayjs;
      endTime: Dayjs;
      status: 'done' | 'pending' | 'todo';
   }) => {
      const response: typeof values = {
         ...values,
         startTime: values.startTime,
         endTime: values.endTime,
         status: 'done',
      };

      dispatch(addTask(response));
      onCancel();
      form.resetFields();
      setCompleteMethod(0);
   };
   const initialValue = {
      nameTask: '',
      description: '',
      catology: 0,
      completeMethod: 0,
      startTime: dayjs(),
      endTime: dayjs().add(1, 'hour'),
   };

   return (
      <Modal
         open={open}
         onCancel={() => {
            onCancel(), form.resetFields();
            setCompleteMethod(0);
         }}
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
               <Input.TextArea placeholder="Description" />
            </Form.Item>
            <Form.Item
               name="catology"
               label="Catology"
               rules={[{ required: true, message: 'Please select catology of task' }]}
               className="catologies"
            >
               <Select
                  dropdownRender={(menu: ReactElement) => {
                     return (
                        <>
                           {menu}
                           <AddCatology />
                        </>
                     );
                  }}
                  onSelect={event => {
                     console.log(event);
                  }}
               >
                  {listCatology.map((item, i) => {
                     return (
                        <Select.Option key={i} value={item.value} className="catologies-option">
                           {item.label}
                           {!item.default && (
                              <DeleteOutlined
                                 onClick={() => {
                                    dispatch(removeCatology(item.value));
                                    if (form.getFieldValue('catology') === item.value) {
                                       form.setFieldValue('catology', 0);
                                    }
                                 }}
                              />
                           )}
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
               <>
                  <Form.Item
                     name="startTime"
                     label="Start Time"
                     required
                     rules={[{ required: true, message: 'Please add start time and end time for the task' }]}
                  >
                     <TimePicker format="HH:mm" />
                  </Form.Item>
                  <Form.Item
                     name="endTime"
                     label="End Time"
                     required
                     rules={[{ required: true, message: 'Please add start time and end time for the task' }]}
                  >
                     <TimePicker format="HH:mm" />
                  </Form.Item>
               </>
            ) : null}
         </Form>
      </Modal>
   );
};
