import { Field } from "@formily/core";
import useNoComponentInstance from "../useNoComponentInstance";

function UpdateComponentPropValue(field: Field | null, params: any) {
  useNoComponentInstance(field);
  const { componentProp, componentValue } = params;
  switch (componentProp) {
    case 'value':
      field!.setValue(componentValue);
      break;
    default:
      field!.setComponentProps({
        [componentProp]: componentValue
      })
  }
  console.log('>>>设置组件属性')
  return Promise.resolve();
}

export default UpdateComponentPropValue;