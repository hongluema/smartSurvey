import useDJField from '@/hooks/useDJField';
import React from 'react';
import { Modal } from 'antd';
import { RecursionField, useFieldSchema } from '@formily/react';
import useEvents from '../hooks/useEvents/index';

function DJDialog(props) {
  const { title, children} = props;
  const { field, fieldSchema } = useDJField();
  const componentProps = field.componentProps || {};
  const eventsProps = useEvents(fieldSchema);
  const handleOk = eventsProps.handleOk || (() => { });
  const handleCancel = eventsProps.handleCancel || (() => { 
    componentProps.visible = false;
  });

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
