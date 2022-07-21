import { Field } from '@formily/core';

function ClearFormFlow(field: Field) {
  field.form.reset();
  return Promise.resolve();
}

export default ClearFormFlow