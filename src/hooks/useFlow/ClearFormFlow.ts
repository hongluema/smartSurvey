import { Field } from '@formily/core';
import { DataPool } from '@/common/dataPool';
import useNoComponentInstance from '../useNoComponentInstance';

function ClearFormFlow(field: Field | null) {
  useNoComponentInstance(field);
  if (field!.componentType === 'DJForm') {
    field!.setValue({});
  } else {
    field!.form.reset();
  }
  return Promise.resolve();
}

export default ClearFormFlow