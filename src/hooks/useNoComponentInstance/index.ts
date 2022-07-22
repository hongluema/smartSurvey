import React from 'react';
import { DataPool } from '@/common/dataPool';
import { FlowTypeInstanceIDMap } from '@/common/constant';
import { Field } from '@formily/core';

function useNoComponentInstance(field: Field | null) {
  if (!field) {
    return Promise.resolve();
  }
}

export default useNoComponentInstance;
