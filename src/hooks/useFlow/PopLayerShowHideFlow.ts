import { Field } from "@formily/core";

function PopLayerShowHideFlow(field: Field) {
  field.setComponentProps({
    visible: !field.componentProps.visible
  })
  console.log('>>>显隐弹层')
}

export default PopLayerShowHideFlow;