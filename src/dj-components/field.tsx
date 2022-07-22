import React, { useEffect, useMemo, useState } from 'react'
import * as antd from 'antd'
import moment from 'moment'
import { createForm } from '@formily/core'
import { createSchemaField, useField } from '@formily/react';

import {
  ArrayBase,
  ArrayTable,
  ArrayTabs,
  ArrayCards,
  ArrayCollapse,
  ArrayItems,
  Form,
  FormItem,
  FormLayout,
  FormStep,
  FormGrid,
  FormTab,
  FormCollapse,
  FormButtonGroup,
  Input,
  Password,
  Cascader,
  Space,
  PreviewText,
  Radio,
  Checkbox,
  Select,
  TreeSelect,
  Transfer,
  DatePicker,
  TimePicker,
  NumberPicker,
  Switch,
  Upload,
  Submit,
  Reset,
  Editable,
} from '@formily/antd'
import * as DjpComponents from './index'
import { observer } from '@formily/reactive-react'
import useDJField from '@/hooks/useDJField';
import { DataPool } from '@/common/dataPool';
// @ts-ignore
export const DJField: React.FC<any> = observer(({
  systemConfig,
  services,
  schema,
  form,
  component,
  useHistory,
  scope,
  components
}) => {
  DataPool.fieldSchemaMap.set(schema.id, form);
  const SchemaField = useMemo(() => createSchemaField({
    components: {
      ArrayBase,
      ArrayTable,
      ArrayTabs,
      ArrayCards,
      ArrayCollapse,
      ArrayItems,
      Form,
      FormItem,
      FormLayout,
      FormStep,
      FormGrid,
      FormTab,
      FormCollapse,
      FormButtonGroup,
      Input,
      Password,
      Cascader,
      Space,
      PreviewText,
      Radio,
      Checkbox,
      Select,
      TreeSelect,
      Transfer,
      DatePicker,
      TimePicker,
      NumberPicker,
      Switch,
      Upload,
      Submit,
      Reset,
      Editable,
      ...DjpComponents.Components,
      ...component,
      ...components,
    },
  }), [component, components])

  return (
    <Form form={form}>
      <SchemaField schema={schema} />
    </Form>
  )
})

DJField.defaultProps = {
  component: {},
  scope: {},
}
