/**
 * 流函数
 */

import { functionModel } from "@/components/model";
import RenderService from "@/service/render.service";

interface IFlowFunction {
  handleSave(): void;
  handleSubmit(): void;
  handleCancel(): void;
  handleComponentAttribute(): void;
}

class FlowFunction {
  constructor(
  ) {
  }
  handleDialog() {
    console.log('显隐弹层');
  }
  handleSave() {
    console.log('保存')
  }
  handleSubmit(event) {
    console.log('提交', event)
    const { content, type } = event;
    const { params, children } = content[0];
    const dataSourceId = params.dataSourceId;
    const dataSourceParams = params.dataSourceParams;
    console.log('>>>>dataSourceId', dataSourceId, '>>>dataSourceParams:', dataSourceParams);
    if (dataSourceId) {
      functionModel[dataSourceId](dataSourceParams).then((r) => { 
        console.log('>>>请求结果:', r);
        console.log('>>>拿到结果后的操作', children[0]);
        RenderService.getInstance()
      })
    }
  }
  handleCancel() {
    console.log('取消')
  }
  handleComponentAttribute(content, schema) {
    console.log('>>>set attribute', content, '>>>schema:', schema);
    return () => { 
      schema[1].props.djHide = true
      console.log('设置属性了', schema[1]);
    }
  }
}

let flowFunctionInstance: IFlowFunction | null = null;
if (!flowFunctionInstance) {
  flowFunctionInstance = new FlowFunction();
}
export default flowFunctionInstance;
