import Render from '@/components/render';
import React, { useCallback, useState, useEffect } from 'react';
import { Radio, Space, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { createSchemaField, FormProvider, observer } from '@formily/react';
import { createForm, registerValidateRules } from '@formily/core';
import { FormItem, Form } from '@formily/antd';
import useSyncCallback from '@/hooks/common/useSyncCallback';

// registerValidateRules({
//   RadioInputFormat: function(value) {
//     console.log('>>>value:', value);
//       if (!value) return '';
//       return value.output ? '' : '错误了❎';
//   },
// });

const RadioInput: React.FC<any> = (props) => {
  const [radioValue, setRadioValue] = useState(null);
  const [inputValue, setInputValue] = useState(null);

  const { onChange, options, extra } = props;
  console.log('>>>options:', options);

  useEffect(() => {
    if (radioValue !== null || inputValue !== null ) {
      onChange({
        output: radioValue,
        children: [{ [radioValue]: inputValue }],
        completed: !!(radioValue || inputValue)
      });
    }
  }, [radioValue, inputValue])

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  return (
    <Radio.Group onChange={ handleRadioChange} value={radioValue}>
      <Space direction="vertical" >
        {
          (options || []).map((item) => {
            return (<Radio key={item.value} value={item.value}>
              {item.label}
              {
                radioValue === item.value
                  ?
                  (
                    <div style={{ marginLeft: -24 }}>
                      <div>
                        <span className='ant-formily-item-asterisk'>*</span>{extra.label}
                      </div>
                      <Input value={inputValue} onChange={handleInputChange} style={{ width: '100%', display: 'block' }} />
                    </div>
                  )
                  : null
              }
            </Radio>)
          })
        }
      </Space>
    </Radio.Group>
  )
}

const InputUpload: React.FC<any> = (props) => {
  const { onChange } = props;
  const [inputUploadValue, setInputUploadValue] = useState(null);
  useEffect(() => {
    console.log('>>>>inputUploadValue:', inputUploadValue);
    if (inputUploadValue?.output !== undefined || inputUploadValue?.file !== undefined) {
      onChange(inputUploadValue)
    }
  }, [JSON.stringify(inputUploadValue)])

  const handleChangeInput = (e) => {
    console.log('>>>>e', e.target.value);
    setInputUploadValue({
      ...inputUploadValue,
      output: e.target.value
    })
  }

  const handleChangeUpload = (info) => {
    setInputUploadValue({
      ...inputUploadValue,
      file: info
    })
  }

  return (
    <div>
      <div>
      <span className='ant-formily-item-asterisk'>*</span>
        请输入
      </div>
      <Input value={inputUploadValue?.output} onChange={ handleChangeInput } />
      <Upload onChange={ handleChangeUpload }>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </div>
  )
}

const SchemaField = createSchemaField({
  components: {
    RadioInput,
    FormItem,
    Input,
    InputUpload,
    Upload
  }
})
const form = createForm()

function Demo() {
  const schema = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: '日期',
        'x-decorator': 'FormItem',
        'x-component': 'RadioInput',
        'x-component-props': {
          options: [{ value: '0', label: '0' }, { value: '1', label: '1' }, { value: '2', label: '2' }, { value: '3', label: '3' }],
          extra: {
            label: '请详述'
          }
        },
        required: true,
        // 'x-validator': (value) => {
        //   console.log('>>>value:', value);
        //   if (!value) return '';
        //   return value.output !== null ? '' : '错误了❎';
        // }
      },
      age: {
        type: 'string',
        title: '日期',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        required: true,
      },
      mindan: {
        type: 'object',
        properties: {
          output: {
            type: 'string',
            title: '请输入名单',
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            required: true,
          }
        }
      },
      test: {
        type: 'string',
        title: '请输入信息',
        'x-decorator': 'FormItem',
        'x-component': 'InputUpload',
        required: true,
        'x-validator': (value) => {
          console.log('>>>value:', value);
          return !!(value?.output || value?.file);
        }
      }
    }
  }
  return (
    <div>
      <Form form={form}>
        <SchemaField schema={schema} />
      </Form>
      form: {JSON.stringify(form.values)}
      <Button onClick={async () => { 
        console.log('form:', form);
        await form.validate();
        console.log('>>>haha');
      }}>获取form</Button>
    </div>
  );
}

export default observer(Demo);
