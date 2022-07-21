import DJButton from '@/dj-components/button';
import React from 'react';
import DJInput from '../dj-components/input';


export const Components = {
  'Button': DJButton,
  'Input': DJInput,
}

export const FlowTypeInstanceIDMap: Record<string, string> = {
  'ClearFormFlow': 'formId',
  'PopLayerShowHideFlow': 'componentId',
}