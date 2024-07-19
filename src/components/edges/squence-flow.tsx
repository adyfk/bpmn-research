import React from 'react'
import { SquenceFlowType } from '@/types'
import { BezierEdge, EdgeProps } from '@xyflow/react';

const SquenceFlow = (props: EdgeProps<SquenceFlowType>) => {
  return <BezierEdge label={props?.data?.label} {...props} style={{ strokeWidth: 2 }} />
}

export default SquenceFlow