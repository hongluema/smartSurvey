import React, { useEffect } from 'react';
import { useField, useFieldSchema, useForm } from '@formily/react';
import { DataPool } from '@/common/dataPool';
import useEvents from '../useEvents';
import { Field } from '@formily/core';

const useDJField = () => { 
  let fieldSchema: any = useFieldSchema();
  const field: Field = useField();
  const form: any = useForm();
  DataPool.fieldSchemaMap.set(fieldSchema.id, field);
  const eventsProps = useEvents(fieldSchema);
  return {
    fieldSchema,
    field,
    form,
    eventsProps,
  }
}

export default useDJField;