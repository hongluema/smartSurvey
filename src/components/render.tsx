import renderUtilsInstance from '@/common/render-util';
import flowFunctionInstance from '@/common/flow-function';
import React from 'react';
import schema from './schema';
import crawl from 'tree-crawl';
import { pageModel } from './model';
import { at } from 'lodash';

function Render() {
  const model = { firstName: 'zhang', lastName: 'san' };
  // const schema = [
  //   {
  //     type: 'textInput',
  //     key: 'firstName',
  //     templateOptions: {
  //       label: '姓'
  //     },
  //     props: {
  //       hide: false
  //     }
  //   },
  //   {
  //     type: 'textInput',
  //     key: 'lastName',
  //     templateOptions: {
  //       label: '名'
  //     },
  //     props: {
  //       hide: true
  //     },
  //     relation: "props.hide = !model['firstName']"
  //   }
  // ]
  // const tempConfig = renderUtilsInstance?.handleRelation(schema[1], model);
  // console.log('>>>tempConfig:', tempConfig);
  console.log('>>>schema:', schema);
  let formValues = {};
  crawl(schema, (node, context) => {
    console.log('>>>node', node);
    // 处理表单
    if (node.type === 'Form' && node.props.model) {
      formValues = at(pageModel, node.props.model.objCode)[0];
      node.props.value = formValues;
      node.events = node.events || [];
      const event = {
        type: 'handleSubmit',
        content: [
          {
            "id": "d6Egq3ZEsE1J",
            "type": "EmitDataSource",
            "title": "发送请求",
            "params": {
              "useLastFlow": "true",
              "useLastParam": false,
              "useEventData": false,
              "dataSourceId": "function_EVVzyddXuh7b",
              "dataSourceParams": {
                "vendorMemberId": "#{component.Table_rQ7HjMtHrP9J##activeColumn.id}"
              },
              "formId": "Form_RwyQVHgV5cF6"
            },
            "djDebug": false,
            "children": [
              {
                "title": "显/隐弹层",
                "type": "PopLayerShowHideFlow",
                "id": "OJAXketVDR8K",
                "djDebug": false,
                "params": {
                  "mode": "reverse",
                  "componentId": "Dialog_STVk32ry09c7"
                },
                "children": []
              },
              {
                "title": "清空表单",
                "type": "ClearFormFlow",
                "id": "OyNpx4AyrlzG",
                "djDebug": false,
                "params": {
                  "clearUpHidden": "true",
                  "formId": "Form_RwyQVHgV5cF6"
                },
                "children": []
              },
              {
                "title": "用Form的值查询Table",
                "type": "TableSearchFlow",
                "id": "NaO8W74KpGPx",
                "djDebug": false,
                "params": {
                  "formId": "Form_gbAxKHDBngaH",
                  "dataSourceId": "model_7L9iogJvpUif",
                  "tableId": "Table_rQ7HjMtHrP9J"
                },
                "children": []
              },
              {
                "title": "显/隐弹层",
                "type": "PopLayerShowHideFlow",
                "id": "44rGrwUMPGLD",
                "params": {
                  "mode": "reverse",
                  "componentId": "Message_2G5UaH9qm1xk"
                },
                "djDebug": false
              }
            ]
          }
        ],
      };
      const newEvent = flowFunctionInstance?.handleSubmit(event);
      node.events.push(newEvent);
      console.log('>>>tempModel:', formValues);
      console.log('>>>after node:', node);
    }
    if (node.props.fieldName && node.props.fieldName.value) {
      const fieldKey = node.props.fieldName.value;
      node.props.value = formValues[fieldKey];
    }
    // context.skip()
    // context.break()
  }, { order: 'pre' })
  console.log('>>>after schema:', schema);
  return (
    <div>
      <div>
        这是表单
        <a>取消</a>
        <a>保存</a>
        <a>提交</a>
      </div>
    </div>
  );
}

export default Render;
