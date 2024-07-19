import React from 'react'
import { TaskType } from '@/types'
import { NodeProps, Position } from '@xyflow/react';
import Handle from '../handle';
import { BpmnGatewayAndIcon } from '@/icons/gateway-and';
import NodeToolbarTitle from '../node-toolbar/node-toolbar-title';
import NodeToolbarAction from '../node-toolbar/node-toolbar-action';

const GatewayEventAnd = (props: NodeProps<TaskType>) => {

  return (
    <>
      {!!props.data?.label && (
        <NodeToolbarTitle>
          {props.data?.label}
        </NodeToolbarTitle>
      )}
      <div className="relative flex items-center p-0.5 text-6xl">
        <BpmnGatewayAndIcon />
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

export default GatewayEventAnd