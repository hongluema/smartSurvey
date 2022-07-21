import useDJField from '@/hooks/useDJField';
import React from 'react';

function DJCard() {
  const { field, fieldSchema, form } = useDJField();
  return (
    <div>
      { field.componentProps.content }
    </div>
  );
}

export default DJCard;
