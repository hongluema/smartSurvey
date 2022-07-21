/**
 * 用来处理render的一些工具方法
 */

interface IRenderUtils {
  handleRelation: Function
}

interface IConfig {
  type: string;
  key: string;
  templateOptions: any;
  props: any;
  relation: string;
}

class HandleRenderUtils {
  handleRelation(config: IConfig, model: any) {
    console.log('>>>config:', config);
    console.log('>>>relation:', config.relation);
    const props = config.props;
    eval(config.relation);
    console.log('>>>props:', props);
    return config;
  }
}

let renderUtilsInstance: IRenderUtils | null = null;
if (!renderUtilsInstance) {
  renderUtilsInstance = new HandleRenderUtils();
}
export default renderUtilsInstance;
