import { Field } from '@formily/core';
import useNoComponentInstance from '../useNoComponentInstance/index';
import useGetInstance from '../useGetInstance/index';

const context = {
  getInstance(id: string) {
    return(useGetInstance(id) || {}).field;
  }
}

function FunctionCode(_field: Field | null, params: any) {
  const func = new Function(`return ${params.body}`)();
  func.call(context, {})
  return Promise.resolve();
}

export default FunctionCode;