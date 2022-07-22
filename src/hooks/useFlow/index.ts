import ClearFormFlow from './ClearFormFlow';
import EmitDataSource from './EmitDataSource';
import PopLayerShowHideFlow from './PopLayerShowHideFlow';
import TableSearchFlow from './TableSearchFlow';
import UpdateComponentPropValue from './UpdateComponentPropValue';

const FlowFunctionMap: Record<string, Function> = {
  PopLayerShowHideFlow,
  ClearFormFlow,
  EmitDataSource,
  UpdateComponentPropValue,
  TableSearchFlow
}

export default FlowFunctionMap;