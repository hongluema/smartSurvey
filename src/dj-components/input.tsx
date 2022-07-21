import React from 'react';
import { Input } from 'antd';
import useDJField from '@/hooks/useDJField';

function DJInput(props) {
  const { field, fieldSchema, form } = useDJField();
  return (
    <div>
      <Input {...props} />
    </div>
  );
}

export default DJInput;
