import useDJField from '@/hooks/useDJField';
import React from 'react';

function DJCard() {
  const { field, fieldSchema, form } = useDJField();
  console.log('>>>DJCard', field, fieldSchema, form )
  return (
    <div>
      { field.componentProps.content }
    </div>
  );
}

export default DJCard;
