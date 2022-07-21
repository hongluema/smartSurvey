import ClearFormFlow from './ClearFormFlow';
import EmitDataSource from './EmitDataSource';
import PopLayerShowHideFlow from './PopLayerShowHideFlow';

const FlowFunctionMap: Record<string, Function> = {
  PopLayerShowHideFlow,
  ClearFormFlow,
  EmitDataSource
}

export default FlowFunctionMap;