import React from 'react';
import { Button } from 'antd';
import useDJField from '@/hooks/useDJField';

function DJButton(props) {
  const { field, fieldSchema, form, eventsProps } = useDJField();
  console.log('>>>DJButton', field, fieldSchema, form, eventsProps)
  const onClick: any = eventsProps.click || (() => { });
  return (
    <div>
      <Button onClick={ onClick }>
        { props.text }
      </Button>
    </div>
  );
}

export default DJButton;
