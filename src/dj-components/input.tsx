import React from 'react';
import { Input } from 'antd';
import useDJField from '@/hooks/useDJField';

function DJInput(props) {
  const { field, fieldSchema, form } = useDJField();
  console.log('>>>props:', props, field);
  return (
    <div>
      <Input {...props} />
    </div>
  );
}

export default DJInput;
