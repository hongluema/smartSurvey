import { Field } from '@formily/core';
import useGetInstance from '../useGetInstance/index';
import useNoComponentInstance from '../useNoComponentInstance';
function TableSearchFlow(field: Field | null, params: any) {
  useNoComponentInstance(field);
  console.log('>>>用Form的值查询Table', field, 'params:', params);
  const tableComponent = useGetInstance(params.tableId).field;
  console.log('>>>>>tableComponent:', tableComponent);
  const data = {
    name: '张三',
    age: 16,
    ...field!.value
  };
  tableComponent.setComponentProps({ text: JSON.stringify(data), disabled: true })
  return new Promise((resolve) => { 
    setTimeout(() => { 
      resolve(data)
    }, 1000);
  })
}

export default TableSearchFlow;