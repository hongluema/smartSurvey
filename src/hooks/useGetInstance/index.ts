import React from 'react';
import { DataPool } from '@/common/dataPool';

function useGetInstance(id) {
  const fieldInstance = DataPool.fieldSchemaMap.get(id);
  console.log('>>>>uid', id);
  return {
    field: fieldInstance
  }
}

export default useGetInstance;
