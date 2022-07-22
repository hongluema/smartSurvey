import React, { useRef, useState } from "react";
import "antd/dist/antd.css";
import "./index.less";
import { Button, Modal, Input } from "antd";
import { Components } from '../common/constant.ts';
import DJButton from "@/dj-components/button";
import jsep from 'jsep';
import flowFunctionInstance from "@/common/flow-function";
import { autorun, observable } from '@formily/reactive';

const defaultSchema = [
  {
    "type": "Button",
    "avatar": "https://img.alicdn.com/tfs/TB1xktLrKbviK0jSZFNXXaApXXa-385-200.svg",
    "title": "隐藏按钮",
    "category": "表单",
    "isContainer": false,
    "platform": "pc,mobile",
    "id": "Input_clzKuHwgPeBh",
    "props": {
       text: '隐藏'
    },
    "__modelPath": [
       "position"
    ],
    "__componentPath": "/Dialog_STVk32ry09c7/Form_RwyQVHgV5cF6/Input_clzKuHwgPeBh",
    "parentId": "Form_RwyQVHgV5cF6",
    "events": [
      {
        "type": "click",
        "content": [
          {
            "id": "flow_ymc8wbBA0EYB",
            "type": "UpdateComponentPropValue",
            "title": "设置组件属性",
            "params": {
              "componentValue": true,
              "updateComponentId": "Input_clzKuHwgPeBj",
              "componentProp": "djHide",
              "path": ""
            },
            "djDebug": false
          }
       ]
      },
      {
        "title": "显/隐弹层",
        "type": "PopLayerShowHideFlow",
        "id": "l8VkWFhbeoDe",
        "djDebug": false,
        "params": {
          "mode": "reverse",
          "componentId": "Message_emfpbUpqWFpW"
        }
      }
    ]
 },
  {
    "type": "Input",
    "avatar": "https://img.alicdn.com/tfs/TB1xktLrKbviK0jSZFNXXaApXXa-385-200.svg",
    "title": "职位7",
    "category": "表单",
    "isContainer": false,
    "platform": "pc,mobile",
    "id": "Input_clzKuHwgPeBj",
    "props": {
       "cssClass": "",
       "style": "width:100%;",
       "djHide": false,
       "permissionCode": [],
       "hiddenField": false,
       "fieldName": {
          "__ds": "#{dataSourcePool.model_wlhtzEhPrDRo.params}",
          "value": "position"
       },
       "label": "职位",
       "labelWidth": "120px",
       "value": "",
       "placeholder": "请输入",
       "hoverTips": "",
       "hoverTipsColor": "#1890ff",
       "tips": "",
       "validateFn": "submit",
       "validate": [],
       "disabled": false,
       "readOnly": false,
       "layout": "vertical",
       "queryOperator": "EQUAL",
       "modelPath": [
          "position"
       ],
       "isModelFilter": "",
       "modelFilterCode": "",
       "type": "Input",
       "rows": 2,
       "maxLength": "500",
       "htmlType": "text",
       "inputOnlyNumber": false
    },
    "__modelPath": [
       "position"
    ],
    "__componentPath": "/Dialog_STVk32ry09c7/Form_RwyQVHgV5cF6/Input_clzKuHwgPeBh",
    "parentId": "Form_RwyQVHgV5cF6"
 }
]

const App = () => {
  // const [schema, setSchema] = useState(defaultSchema);
  const schema = observable(defaultSchema);
  const name = () => 'test'

  autorun(() => { 
    console.log('>>>测试下 autorun');
  })

  const componentsList = schema.map((item) => { 
    const Component = Components[item['type']];
    console.log('>>>>evnet:', item.events);
    const eventsProps = {};
    if (item.events) {
      item.events.forEach((event) => { 
        if (event.type === 'click') { 
          eventsProps.onClick = flowFunctionInstance.handleComponentAttribute(event.content, schema);
        }
      })
    }
    console.log('>>>eventsProps', eventsProps);
    return React.createElement(Component, {
      ...item.props,
      ...eventsProps,
      key: item.id
    })
    // return <Component key={item.id} {...item.props} {...eventsProps} />;
  })
  console.log('>>>', <Button onClick={() => { }}>123</Button>)
  console.log('>>>componentsList:', componentsList[0]);

  // console.log('>>>jsep:', jsep('name ? "haha" : "ww"'))
  // console.log('>>>jsep:', jsep('name.a()'))
  return (
    <>
      <div>动态组件渲染 - {JSON.stringify(schema)}</div>
      <Button onClick={() => {
        schema[1].props.label = '测试一下'
       }}>123</Button>
      {
        componentsList.map((com) => { 
          return com
        })
      }
    </>
  )
};

export default autorun(App);