import React from 'react';
import { action, observable, observe, autorun, reaction, batch } from '@formily/reactive';
import { observer } from '@formily/reactive-react'
import { useFieldSchema, createSchemaField } from '@formily/react'
import { useEffect } from 'react';
import { Input } from '@formily/antd';


function Parent() {
  const obs = observable({
    name: 'formily'
  })

  console.log('>>>haha parent')

  return <>
    <div>parent</div>
    <div>parent组件数据: { obs.name }</div>
    <Test1 obs={ obs} />
  </>
}

const Test1 = observer((props) => {
  const { obs } = props;

  const SchemaField = createSchemaField({
    components: {
      Input,
    },
  })

  let fieldSchema: any = useFieldSchema();

  useEffect(() => {
    console.log('>>>fieldSchema:', fieldSchema);
  })

  autorun(() => {
    console.log('>>>name:', obs.name);
  })

  const handleClick = () => {
    obs.name = 'formily react';
  }

  return (
    <div>
      Test1
      <button onClick={handleClick}>点击</button>
      <div>
        {obs.name}
      </div>
      <SchemaField>
        <Input name='username' value={ 555} />
      </SchemaField>
    </div>
  );
})

export default Parent;
