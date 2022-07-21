import React from 'react';
import { Button } from 'antd';
import useDJField from '@/hooks/useDJField';

function DJButton(props) {
  const { eventsProps } = useDJField();
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
