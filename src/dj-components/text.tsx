import useDJField from '@/hooks/useDJField';
import React from 'react';

function DJText() {
  const { field, fieldSchema, form } = useDJField();
  return (
    <div style={ field.componentProps.style }>
      { field.componentProps.text }
    </div>
  );
}

export default DJText;
