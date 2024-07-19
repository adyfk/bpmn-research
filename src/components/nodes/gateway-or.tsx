import React from 'react'
import { TaskType } from '@/types'
import { NodeProps, Position } from '@xyflow/react';
import Handle from '../handle';
import { BpmnGatewayOrIcon } from '@/icons/gateway-or';
import NodeToolbarTitle from '../node-toolbar/node-toolbar-title';
import NodeToolbarAction from '../node-toolbar/node-toolbar-action';

const GatewayEventOr = (props: NodeProps<TaskType>) => {

  return (
    <>
      {!!props.data?.label && (
        <NodeToolbarTitle>
          {props.data?.label}
        </NodeToolbarTitle>
      )}
      <div className="relative flex items-center p-0.5 text-6xl">
        <BpmnGatewayOrIcon />
      </div>
      <NodeToolbarAction />
      <Handle
        id='source'
        type='source'
        isConnectable
        position={Position.Right}
      />
      <Handle
        id='target'
        type='target'
        isConnectable
        position={Position.Left}
      />
    </>
  )
}

export default GatewayEventOr