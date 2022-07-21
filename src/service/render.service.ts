import FLowService from "./flow.service";

interface IRenderService {
  getInstance(): string;
}

class RenderService {
  constructor(
    // private flowService: FLowService
  ) {

  }

  getInstance() {
    console.log('获取组件实例')
    // this.flowService.getParentFlowResults()
    return '弹窗';
  }
}

let renderService: IRenderService | null = null;
if (!renderService) {
  renderService = new RenderService();
}

export default renderService;