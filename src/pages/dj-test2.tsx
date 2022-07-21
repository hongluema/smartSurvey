import DJCard from '@/dj-components/card';
import DJInput from '@/dj-components/input';
import DJProvider from '@/dj-components/provider';
import { FormItem, Form } from '@formily/antd';
import { createForm } from '@formily/core';
import { createSchemaField, observer } from '@formily/react';
import React, { useMemo } from 'react';
import DJDialog from '../dj-components/dialog';
import DJButton from '@/dj-components/button';
import DJText from '@/dj-components/text';
import { crawlUpdateSchemaReverseAlertFlow } from '@/components/crawl-flow';
import DJForm from '@/dj-components/form';


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
    properties: {
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
          onOk: () => { 
            const values = form.values;
            console.log('>>>提交的值:', values);
            eval(`console.log('>>>>哈哈', form)`);
            form.setFieldState('dialog', (state) => {
              console.log('>>>state', state);
              state.componentProps.visible = !state.componentProps.visible;
            })
            // crawlUpdateSchemaReverseAlertFlow(schema, 'dialog_abcde')
          }
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
            type: 'void',
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
          // "input": {
          //   id: 'input_asdde',
          //   type: 'string',
          //   title: '输入名字',
          //   'x-decorator': 'DJProvider',
          //   'x-component': 'DJInput',
          //   'x-component-props': {
          //     label: "姓名"
          //   },
          // }
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
                  "formId": "Form_fAfk9KPQNh3p",
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
          onClick: () => {
            const dialog = form.getFieldState('dialog');
            console.log('>>>dialog:', dialog);
            const [component, componentProps] = dialog.component;
            componentProps.visible = !componentProps.visible;
            // dialog.componentProps.visible = true;
          }
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
    }
  }
  return (
    <div>
      DjTest2 - { JSON.stringify(form.values) }
      <div>
        <Form form={ form }>
          <SchemaField schema={schema}>
          </SchemaField>
      </Form>
      </div>
    </div>
  );
}

export default observer(DjTest2);
