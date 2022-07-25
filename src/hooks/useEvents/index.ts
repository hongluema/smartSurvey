import useGetInstance from "../useGetInstance";
import FlowFunctionMap from '../useFlow';
import { DataPool } from "@/common/dataPool";
import { FlowTypeInstanceIDMap } from "@/common/constant";

const recursionEvents = (events: any[], parentResult = {}) => {
  events.forEach((flowVO) => {
    const { id, type, title, params, children } = flowVO;
    console.log('>>>实例id:', flowVO.params[FlowTypeInstanceIDMap[type]]);
    const { field: fieldInstance } = useGetInstance(flowVO.params[FlowTypeInstanceIDMap[type]]);
    const flowFunction = FlowFunctionMap[type];
    // 执行流函数
    console.log('>>>执行流函数', title);
    flowFunction(fieldInstance, params).then((r) => { 
      console.log('>>>上一个流函数的返回结果', r);
      if (Array.isArray(children)) {
        // todo: 需要处理异步的情况
        recursionEvents(children, r || {});
      }
    })
  })
}

const useEvents = (schema): Record<string, Function | MouseEvent> => {
  const { events } = schema;
  if (!Array.isArray(events)) {
    return {};
  }
  const eventsProps: Record<string, Function | MouseEvent> = {};
  events.forEach((event) => {
    eventsProps[event.type] = () => {
      recursionEvents(event.content);
    }
  })
  return eventsProps;
}

export default useEvents;