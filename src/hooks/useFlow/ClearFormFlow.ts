import { Field } from '@formily/core';

function ClearFormFlow(field: Field) {
  field.form.reset()
}

export default ClearFormFlow