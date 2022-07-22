import useDJField from '@/hooks/useDJField';
import React, { useMemo } from 'react';
import { createSchemaField, observer } from '@formily/react';
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
import { DJField } from './field';
import { createForm } from '@formily/core';

const form = createForm()

function DJForm(props) {
  const { children } = props;
  const { field, fieldSchema } = useDJField();

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
      {
        props.children
      }
      {/* <Form form={form} previewTextPlaceholder="-" {...props}>
        <SchemaField schema={fieldSchema} />
      </Form> */}
    </div>
  );
}

export default observer(DJForm);
