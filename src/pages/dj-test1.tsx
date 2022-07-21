import useDJField from '@/hooks/useDJField';
import React, { useMemo } from 'react';
import { createSchemaField, FormProvider } from '@formily/react';
import { createForm } from '@formily/core';
import DJInput from '../dj-components/input';
import { Form, FormItem} from '@formily/antd';
import DJCard from '@/dj-components/card';
import { observer } from '@formily/react';

const DJProvider = (props) => {
  return (
    <div className='dj-component-void-decorator'>
      { props.children }
    </div>
  )
 }

const SchemaField = createSchemaField({
  components: {
    DJInput,
    FormItem,
    DJCard,
    DJProvider
  }
})

function DjTest1() {
  const form = useMemo(() => createForm(), [])

  const schema = {
    type: 'object',
    properties: {
      input: {
        type: 'string',
        title: '输入框',
        'x-decorator': 'FormItem',
        'x-component': 'DJInput',
        'x-component-props': {
          style: {
            width: 240,
          },
        },
      },
      textarea: {
        type: 'string',
        title: '输入卡片内容',
        'x-decorator': 'FormItem',
        'x-component': 'DJInput',
        'x-component-props': {
          style: {
            width: 240,
          },
        },
        'x-reactions': (_field, _form) => {
          console.log('>>>reactions field:', _field);
          console.log('>>>reactions form:', _form.$form);
          _field.componentProps = {
            style: {
              background: 'skyblue'
            }
          }
        }
      },
      card: {
        type: 'string',
        title: '卡片',
        'x-decorator': 'DJProvider',
        'x-component': 'DJCard',
        'x-component-props': {
          content: '公道卡片'
        },
        'x-reactions': (_field) => {
          const textarea = form.query('textarea').value();
          _field.componentProps.content = textarea;
        }
      }
  },
  }

  console.log('>>>form values:', form.values);

  return (
    <div>
      DjTest1 - { JSON.stringify(form.values) }
      <div>
        <Form form={ form }>
          <SchemaField schema={schema}>
          </SchemaField>
      </Form>
      </div>
    </div>
  );
}

export default observer(DjTest1);
