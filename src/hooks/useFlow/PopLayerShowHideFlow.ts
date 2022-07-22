import { Field } from "@formily/core";
import useNoComponentInstance from "../useNoComponentInstance";

function PopLayerShowHideFlow(field: Field | null) {
  useNoComponentInstance(field);
  field!.setComponentProps({
    visible: !field!.componentProps.visible
  })
  console.log('>>>显隐弹层')
  return Promise.resolve();
}

export default PopLayerShowHideFlow;