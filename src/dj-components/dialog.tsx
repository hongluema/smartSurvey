import useDJField from '@/hooks/useDJField';
import React from 'react';
import { Modal } from 'antd';
import { RecursionField, useFieldSchema } from '@formily/react';
import useEvents from '../hooks/useEvents/index';

function DJDialog(props) {
  console.log('>>>DJDialog props', props);
  const { title, children} = props;
  const { field, fieldSchema, form } = useDJField();
  console.log('>>>DJDialog', field, fieldSchema, form)
  const componentProps = field.componentProps || {};
  const eventsProps = useEvents(fieldSchema, field);
  const handleOk = eventsProps.handleOk || (() => { });
  const handleCancel = eventsProps.handleCancel || (() => { 
    console.log('>>>cancnel');
    componentProps.visible = false;
  });

  console.log('>>>DJCard children', fieldSchema.$slot);
  
  // const renderExtra = (): React.ReactNode => {
  //   if (extra) {
  //     return <RecursionField schema={extra as any}/>
  //   }
  // }

  return (
    <div>
      <Modal title={title} visible={componentProps.visible} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </div>
  );
}

export default DJDialog;
