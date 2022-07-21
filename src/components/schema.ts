const schema = {
  "type": "Form",
  "avatar": "https://img.alicdn.com/tfs/TB1FuAWJWL7gK0jSZFBXXXZZpXa-200-200.svg",
  "title": "编辑账号表单",
  "isContainer": true,
  "category": "表单",
  "platform": "pc,mobile",
  "id": "Form_RwyQVHgV5cF6",
  "props": {
     "cssClass": "",
     "style": "",
     "djHide": false,
     "permissionCode": [],
     "model": {
        "__ds": "#{dataSourcePool.model_wlhtzEhPrDRo.params}",
        "selectedFields": [
           "accountType",
           "name",
           "mobile",
           "email",
           "position"
        ],
        "objCode": "legal-survey.vendorMember"
     },
     "defaultValue": null,
     "value": null,
     "columns": "1",
     "columnGutter": 0,
     "formLayout": "horizontal",
     "formItemLabelWidth": "120px",
     "validateOn": "submit",
     "unValidateBeforeSubmit": false,
     "removeEmptyKeys": true
  },
  "children": [
     {
        "type": "Radio",
        "avatar": "https://img.alicdn.com/tfs/TB1dr2yRVT7gK0jSZFpXXaTkpXa-200-200.png",
        "title": "账号类型1",
        "category": "表单",
        "isContainer": false,
        "id": "Radio_eMyyEyIO1nPW",
        "props": {
           "cssClass": "account-type-field",
           "style": "box-sizing: border-box; width: 100%; padding-left: 0px; padding-right: 0px",
           "djHide": false,
           "permissionCode": [],
           "hiddenField": false,
           "fieldName": {
              "value": "accountType"
           },
           "label": "账号类型",
           "labelWidth": "120px",
           "value": null,
           "placeholder": "",
           "hoverTips": "",
           "hoverTipsColor": "#1890ff",
           "tips": "",
           "validateFn": "submit",
           "validate": [
              {
                 "validation": "RequiredValidator",
                 "elements": {
                    "message": "请选择账号类型"
                 }
              }
           ],
           "disabled": false,
           "readOnly": true,
           "layout": "vertical",
           "queryOperator": "EQUAL",
           "modelPath": [
              "accountType"
           ],
           "isModelFilter": "",
           "modelFilterCode": "",
           "uiType": "default",
           "uiButtonStyle": "outline",
           "options": "#{DictionarySource##legal-survey.AccountType}",
           "disabledValues": ""
        },
        "__componentPath": "/Dialog_STVk32ry09c7/Form_RwyQVHgV5cF6/Radio_eMyyEyIO1nPW",
        "__modelPath": [
           "accountType"
        ],
        "parentId": "Form_RwyQVHgV5cF6",
        "events": []
     },
     {
        "type": "Input",
        "avatar": "https://img.alicdn.com/tfs/TB1xktLrKbviK0jSZFNXXaApXXa-385-200.svg",
        "title": "联系人姓名4",
        "category": "表单",
        "isContainer": false,
        "platform": "pc,mobile",
        "id": "Input_FK7Sta6kMXPq",
        "props": {
           "cssClass": "",
           "style": "width:100%;",
           "djHide": false,
           "permissionCode": [],
           "hiddenField": false,
           "fieldName": {
              "__ds": "#{dataSourcePool.model_wlhtzEhPrDRo.params}",
              "value": "name"
           },
           "label": "联系人姓名",
           "labelWidth": "120px",
           "value": "",
           "placeholder": "请输入",
           "hoverTips": "",
           "hoverTipsColor": "#1890ff",
           "tips": "",
           "validateFn": "submit",
           "validate": [
              {
                 "validation": "RequiredValidator",
                 "elements": {
                    "message": "请输入联系人姓名"
                 }
              }
           ],
           "disabled": false,
           "readOnly": false,
           "layout": "vertical",
           "queryOperator": "EQUAL",
           "modelPath": [
              "name"
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
           "name"
        ],
        "__componentPath": "/Dialog_STVk32ry09c7/Form_RwyQVHgV5cF6/Input_FK7Sta6kMXPq"
     },
     {
        "type": "Input",
        "avatar": "https://img.alicdn.com/tfs/TB1xktLrKbviK0jSZFNXXaApXXa-385-200.svg",
        "title": "编辑手机号",
        "category": "表单",
        "isContainer": false,
        "platform": "pc,mobile",
        "id": "Input_IVyDskcgfPXb",
        "props": {
           "cssClass": "",
           "style": "width:100%;",
           "djHide": false,
           "permissionCode": [],
           "hiddenField": false,
           "fieldName": {
              "__ds": "#{dataSourcePool.model_wlhtzEhPrDRo.params}",
              "value": "mobile"
           },
           "label": "手机号",
           "labelWidth": "120px",
           "value": "",
           "placeholder": "请输入",
           "hoverTips": "",
           "hoverTipsColor": "#1890ff",
           "tips": "",
           "validateFn": "change",
           "validate": [
              {
                 "validation": "CustomFn",
                 "elements": {
                    "message": "",
                    "fnBody": "function customFn({ value, formValue }) {\n  return {\n    validate: formValue.accountType !== 'mobile' || !!value,\n    message: '请输入手机号'\n  }\n}\n"
                 }
              },
              {
                 "validation": "Pattern",
                 "elements": {
                    "message": "请输入正确手机号",
                    "pattern": "^1\\d{10}$"
                 }
              }
           ],
           "disabled": "",
           "readOnly": false,
           "layout": "vertical",
           "queryOperator": "EQUAL",
           "modelPath": [
              "mobile"
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
           "mobile"
        ],
        "__componentPath": "/Dialog_STVk32ry09c7/Form_RwyQVHgV5cF6/Input_IVyDskcgfPXb",
        "parentId": "Form_RwyQVHgV5cF6",
        "dynamicProps": [],
        "relation": "this.disabled = #{component.Table_rQ7HjMtHrP9J##activeColumn.accountType} === 'mobile'",
        "__dslType": "dsl"
     },
     {
        "type": "Input",
        "avatar": "https://img.alicdn.com/tfs/TB1xktLrKbviK0jSZFNXXaApXXa-385-200.svg",
        "title": "编辑邮箱",
        "category": "表单",
        "isContainer": false,
        "platform": "pc,mobile",
        "id": "Input_cun55eK6iJnU",
        "props": {
           "cssClass": "",
           "style": "width:100%;",
           "djHide": false,
           "permissionCode": [],
           "hiddenField": false,
           "fieldName": {
              "__ds": "#{dataSourcePool.model_wlhtzEhPrDRo.params}",
              "value": "email"
           },
           "label": "邮箱",
           "labelWidth": "120px",
           "value": "",
           "placeholder": "请输入",
           "hoverTips": "",
           "hoverTipsColor": "#1890ff",
           "tips": "",
           "validateFn": "submit",
           "validate": [
              {
                 "validation": "EmailValidator",
                 "elements": {
                    "message": "请输入正确的邮箱"
                 }
              },
              {
                 "validation": "RequiredValidator",
                 "elements": {
                    "message": "请输入邮箱"
                 }
              },
              {
                 "validation": "Pattern",
                 "elements": {
                    "message": "请输入正确的邮箱",
                    "pattern": "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$"
                 }
              }
           ],
           "disabled": "",
           "readOnly": false,
           "layout": "vertical",
           "queryOperator": "EQUAL",
           "modelPath": [
              "email"
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
           "email"
        ],
        "__componentPath": "/Dialog_STVk32ry09c7/Form_RwyQVHgV5cF6/Input_cun55eK6iJnU",
        "dynamicProps": [],
        "relation": "this.disabled = #{component.Table_rQ7HjMtHrP9J##activeColumn.accountType} === 'email'",
        "__dslType": "dsl",
        "parentId": "Form_RwyQVHgV5cF6"
     },
     {
        "type": "Input",
        "avatar": "https://img.alicdn.com/tfs/TB1xktLrKbviK0jSZFNXXaApXXa-385-200.svg",
        "title": "职位7",
        "category": "表单",
        "isContainer": false,
        "platform": "pc,mobile",
        "id": "Input_clzKuHwgPeBh",
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
  ],
  "__componentPath": "/Dialog_STVk32ry09c7/Form_RwyQVHgV5cF6"
}

export default schema;