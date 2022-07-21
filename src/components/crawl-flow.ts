import crawl from 'tree-crawl';
import { Components } from '../common/constant';
function crawlUpdateSchemaFlow(schema, { id }) {

}

export function crawlUpdateSchemaReverseAlertFlow(schema, id, updateProps = {}) {
  console.log('>>>id', id);
  crawl(schema, (node, context) => {
    console.log('>>>node', node);
    if (node.id === id) {
      console.log('>>>就是你了', node['x-component-props']);
    }
    if (node.properties) {
      Object.keys(node.properties).forEach((child) => {
        crawlUpdateSchemaReverseAlertFlow(node.properties[child], id);
      })
    }
    // context.skip()
    // context.break()
  }, { order: 'pre' })
}
