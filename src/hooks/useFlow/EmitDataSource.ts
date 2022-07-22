import useNoComponentInstance from "../useNoComponentInstance";
import { Field } from '@formily/core';

function EmitDataSource(field: Field | null) {
  useNoComponentInstance(field);
  console.log('>>>>发送请求', field);
  return new Promise((resolve) => { 
    setTimeout(() => { 
      resolve({
        name: '张三',
        age: 16,
        ...(field as Field).value
      })
    }, 1000);
  })
}

export default EmitDataSource;