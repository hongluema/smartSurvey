import { Field } from '@formily/core';
import { DataPool } from '@/common/dataPool';

function ClearFormFlow(field: Field) {
  if (field.componentType === 'DJForm') {
    field.setValue({});
  } else {
    field.form.reset();
  }
  return Promise.resolve();
}

export default ClearFormFlow