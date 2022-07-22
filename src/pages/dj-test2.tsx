import DJCard from '@/dj-components/card';
import DJInput from '@/dj-components/input';
import DJProvider from '@/dj-components/provider';
import { FormItem, Form } from '@formily/antd';
import { createForm } from '@formily/core';
import { createSchemaField, FormProvider, observer } from '@formily/react';
import React, { useMemo } from 'react';
import DJDialog from '../dj-components/dialog';
import DJButton from '@/dj-components/button';
import DJText from '@/dj-components/text';
import { crawlUpdateSchemaReverseAlertFlow } from '@/components/crawl-flow';
import DJForm from '@/dj-components/form';
import { DJField } from '../dj-components/field';
import { DataPool } from '@/common/dataPool';
import { Button } from 'antd';


const SchemaField = createSchemaField({
  components: {
    DJButton,
    DJInput,
    FormItem,
    DJCard,
    DJProvider,
    DJDialog,
    DJText,
    DJForm
  }
})
function DjTest2() {
  const form = useMemo(() => createForm(), [])

  const schema = {
    type: 'object',
    id: "Container_rQ7HjMtHrP9J",
    properties: {
      searchForm: {
        id: 'form_dasjdsakjdsadsd',
        type: 'object',
        title: '搜索表单',
        'x-decorator': 'DJProvider',
        'x-component': 'DJForm',
        properties: {
          caseName: {
            id: 'input_dfsakdlska',
            type: 'string',
            title: '案件名称',
            'x-decorator': 'FormItem',
            'x-component': 'DJInput',
            'x-component-props': {
              label: "案件名称"
            },
          },
          caseId: {
            id: 'input_dfsakdlskadasdas',
            type: 'string',
            title: '案件编号',
            'x-decorator': 'FormItem',
            'x-component': 'DJInput',
            'x-component-props': {
              label: "案件编号"
            },
          },
          button: {
            id: 'button_dfsakdlskadasdas',
            type: 'void',
            title: '查询',
            'x-decorator': 'FormItem',
            'x-component': 'DJButton',
            'x-component-props': {
              text: "查询"
            },
            events: [
              {
                type: "click",
                content: [
                  {
                    "id": "flow_1q6ewewedSuAfIf",
                    "type": "EmitDataSource",
                    "title": "发送请求",
                    "params": {
                      "useLastFlow": "true",
                      "useLastParam": false,
                      "useEventData": false,
                      "dataSourceId": "function_fheHm1v22Dfn",
                      "formId": "form_dasjdsakjdsadsd",
                      "dataSourceParams": {}
                    },
                  },
                  {
                    "id": "flow_ePr2FMjZejyJ",
                    "type": "TableSearchFlow",
                    "title": "用Form的值查询Table",
                    "params": {
                       "formId": "form_dasjdsakjdsadsd",
                       "dataSourceId": "function_fheHm1v22Dfn",
                       "tableId": "table_rQ7HjMtHrP9J"
                    },
                    "djDebug": false,
                    "children": []
                 }
                ]
              }
            ]
          }
        }
      },
      dialog: {
        id: 'dialog_abcde',
        type: 'void',
        title: '弹框',
        'x-decorator': 'DJProvider',
        'x-component': 'DJDialog',
        'x-component-props': {
          visible: false,
          title: '确认姓名',
          children: <div>123木头人</div>,
        },
        properties: {
          "title": {
            id: 'text_abcdd',
            type: 'void',
            title: '标题1',
            'x-decorator': 'DJProvider',
            'x-component': 'DJText',
            'x-component-props': {
              text: '有误案件'
            },
          },
          "form": {
            id: "form_dassa",
            type: 'object',
            title: '案号表单',
            'x-decorator': 'DJProvider',
            'x-component': 'DJForm',
            'x-component-props': {
              label: "姓名"
            },
            properties: {
              "input": {
                id: 'input_asdde',
                type: 'string',
                title: '输入名字',
                'x-decorator': 'FormItem',
                'x-component': 'DJInput',
                'x-component-props': {
                  label: "姓名"
                },
              }
            }
          },
        },
        'events': [
          {
            type: 'handleOk',
            content: [
              {
                "id": "flow_1q63rdSuAfIf",
                "type": "EmitDataSource",
                "title": "发送请求",
                "params": {
                  "useLastFlow": "true",
                  "useLastParam": false,
                  "useEventData": false,
                  "dataSourceId": "function_fheHm1v22Dfn",
                  "dataSourceParams": {}
                },
                "children": [
                  {
                    "id": "d6Egq3ZEsE1J",
                    "type": "PopLayerShowHideFlow",
                    "title": "显/隐弹层",
                    "params": {
                      "mode": "reverse",
                      "componentId": "dialog_abcde"
                    },
                    "djDebug": false,
                    "children": []
                  },
                  {
                    "id": "flow_TIGqmYi0mjVd",
                    "type": "UpdateComponentPropValue",
                    "title": "设置组件属性",
                    "params": {
                       "updateComponentId": "input_uudde",
                       "componentProp": "value",
                       "componentValue": '我是通过弹框的确定按钮设置的值',
                       "path": ""
                    },
                    "djDebug": false
                  }
                ]
              }
            ]
          },
          {
            type: 'handleCancel',
            content: [
              {
                "id": "d6Egq3ZEsf1J",
                "type": "PopLayerShowHideFlow",
                "title": "显/隐弹层",
                "params": {
                  "mode": "reverse",
                  "componentId": "dialog_abcde"
                },
                "djDebug": false,
                "children": []
              },
              {
                "id": "flow_yd9Ijejk6xM3",
                "type": "ClearFormFlow",
                "title": "清空表单",
                "params": {
                   "clearUpHidden": "true",
                   "formId": "form_dassa"
                },
                "djDebug": false
              },
              {
                "id": "flow_TIGqmeri0mjVd",
                "type": "UpdateComponentPropValue",
                "title": "设置组件属性",
                "params": {
                   "updateComponentId": "input_uudde",
                   "componentProp": "placeholder",
                   "componentValue": '这是取消后设置的placeholder',
                   "path": ""
                },
                "djDebug": false
              }
            ],
          }
        ],
      },
      button: {
        id: 'button_abwde',
        type: 'void',
        title: '按钮',
        'x-decorator': 'DJProvider',
        'x-component': 'DJButton',
        'x-component-props': {
          text: '打开弹窗',
        },
        'events': [
          {
            type: 'click',
            content: [
              {
                "id": "d6Egq3ZEsE2J",
                "type": "PopLayerShowHideFlow",
                "title": "显/隐弹层",
                "params": {
                  "mode": "reverse",
                  "componentId": "dialog_abcde"
                },
                "djDebug": false,
                "children": []
              },
            ]
          }
        ],
      },
      "extraText": {
        id: 'text_kdaslkdsa',
        type: 'string',
        title: '案号',
        'x-decorator': 'DJProvider',
        'x-component': 'DJText',
        'x-component-props': {
          text: "案号"
        },
      },
      "extraInput": {
        id: 'input_uudde',
        type: 'string',
        title: '案号输入框',
        'x-decorator': 'DJProvider',
        'x-component': 'DJInput',
        'x-component-props': {
          label: "案号1",
          value: 'xxcxcx'
        },
      },
      "testdsajkdasjjksad": {
        id: 'text_rQ7HjMtHrP9J',
        type: 'string',
        title: "文本",
        'x-decorator': 'DJProvider',
        'x-component': 'DJText',
        'x-component-props': {
          text: '这是通过搜索表单查询出来的数据 ⬇️'
        },
      },
      "testTable": {
        id: 'table_rQ7HjMtHrP9J',
        type: 'string',
        title: "案件表格",
        'x-decorator': 'DJProvider',
        'x-component': 'DJText',
        'x-component-props': {
          text: '暂无数据'
        },
      }
    }
  }
  return (
    <div>
      DjTest2 - { JSON.stringify(form.values) }
      <div>
        {/* <Form form={ form }>
          <SchemaField schema={schema}>
          </SchemaField>
      </Form> */}
        {/* <FormProvider form={ form }>
          <SchemaField schema={schema}>
          </SchemaField>
        </FormProvider> */}
        <DJProvider>
          <DJField schema={schema} form={form}>
          </DJField>
        </DJProvider>
      </div>
      <Button onClick={ () => console.log('>>>>DataPool:', DataPool)}>
        控制台打印数据源
      </Button>
    </div>
  );
}

export default observer(DjTest2);
