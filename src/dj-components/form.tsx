import useDJField from '@/hooks/useDJField';
import React, { useMemo } from 'react';
import { createSchemaField } from '@formily/react';
import {
  ArrayBase,
  ArrayCards,
  ArrayCollapse,
  ArrayItems,
  ArrayTable,
  ArrayTabs, Cascader, Checkbox, DatePicker, Editable,
  Form, FormButtonGroup, FormCollapse, FormGrid,
  FormItem, FormLayout, FormStep, FormTab, Input, NumberPicker, Password, PreviewText, Radio, Reset,
  Select, Space, Submit, Switch, TimePicker, Transfer, TreeSelect, Upload
} from '@formily/antd';
import DJButton from './button';
import DJInput from './input';
import DJCard from './card';
import DJProvider from './provider';

function DJForm(props) {
  const { children } = props;
  const { field, fieldSchema, form } = useDJField();

  const SchemaField = useMemo(() => createSchemaField({ components: {
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
    DJButton,
    DJInput,
  },
}), [])

  return (
    <div>
      <Form form={form} previewTextPlaceholder="-" {...props}>
        <SchemaField schema={fieldSchema} />
      </Form>
    </div>
  );
}

export default DJForm;
