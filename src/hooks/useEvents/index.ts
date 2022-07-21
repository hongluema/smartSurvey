import useGetInstance from "../useGetInstance";
import FlowFunctionMap from '../useFlow';
import { DataPool } from "@/common/dataPool";
import { FlowTypeInstanceIDMap } from "@/common/constant";

const recursionEvents = (events: any[]) => {
  events.forEach((flowVO) => {
    console.log('>>>>flowVO:', flowVO);
    console.log('>>>>DataPool:', DataPool);
    const { id, type, title, params, children } = flowVO;
    const { field: fieldInstance } = useGetInstance(flowVO.params[FlowTypeInstanceIDMap[type]]);
    console.log('>>>获取实例', params, '>', fieldInstance);
    const flowFunction = FlowFunctionMap[type];
    // 执行流函数
    flowFunction(fieldInstance)
    if (Array.isArray(children)) {
      recursionEvents(children)
      // todo: 需要处理异步的情况
      // flowFunction.then((r) => { 
      //   console.log('>>> 接口返回的数据', r);
      //   recursionEvents(children)
      // })
    }
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
      // event.content.forEach((flowVO) => {
      //   console.log('>>>>flowVO:', flowVO);
      //   console.log('>>>>DataPool:', DataPool);
      //   const { field: fieldInstance } = useGetInstance(flowVO.params[FlowTypeInstanceIDMap[flowVO.type]]);
      //   console.log('>>>获取实例', flowVO.params, '>', fieldInstance);
      //   const flowFunction = FlowFunctionMap[flowVO.type];
      //   console.log('>>>>流函数', flowFunction.toString());
      //   console.log('>>>>流函数', flowFunction(fieldInstance));
      // })
    }
  })
  return eventsProps;
}

export default useEvents;