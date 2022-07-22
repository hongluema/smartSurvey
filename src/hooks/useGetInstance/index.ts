import React from 'react';
import { DataPool } from '@/common/dataPool';
import { FlowTypeInstanceIDMap } from '@/common/constant';

function useGetInstance(id) {
  // const id = params[FlowTypeInstanceIDMap[type]];
  const fieldInstance = DataPool.fieldSchemaMap.get(id);
  // console.log('>>>>uid', id, 'params:', params, 'typeL:', type);
  return {
    field: fieldInstance
  }
}

export default useGetInstance;
