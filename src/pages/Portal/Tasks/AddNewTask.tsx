import { Form, Input, Modal, Select, TimePicker } from 'antd';
import { ReactElement, useState } from 'react';

type Props = {
   open: boolean;
   onCancel: () => void;
};
export const AddNewTask = ({ open = false, onCancel = () => {} }: Props) => {
   const [form] = Form.useForm();
   const [completeMethod, setCompleteMethod] = useState(0);
   const handleAddNewTask = (values: object) => {
      console.log(values);
   };

   const LIST_CATOLOGY_TASK = [
      {
         label: 'Study',
         value: 0,
      },
      {
         label: 'Skin Care',
         value: 0,
      },
      {
         label: 'Work',
         value: 1,
      },
      {
         label: 'Homework',
         value: 3,
      },
   ];

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
         <Form onFinish={handleAddNewTask} form={form} labelCol={{ span: 8 }} labelAlign="left">
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
               name={'catology'}
               label="Catology"
               rules={[{ required: true, message: 'Please select catology of task' }]}
            >
               <Select
                  dropdownRender={(menu: ReactElement) => {
                     return (
                        <>
                           {menu}
                           <Input
                              onPressEnter={event => {
                                 console.log(event);

                                 //  LIST_CATOLOGY_TASK.push({
                                 //     label: ,
                                 //     value: LIST_CATOLOGY_TASK.length,
                                 //  });
                              }}
                           />
                        </>
                     );
                  }}
               >
                  {LIST_CATOLOGY_TASK.map((item, i) => {
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
                  defaultValue={0}
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
