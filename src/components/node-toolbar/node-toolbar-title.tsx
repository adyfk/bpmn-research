import { NodeToolbar as NodeToolbarNative, NodeToolbarProps, Position } from '@xyflow/react'
import clsx from 'clsx'
import React, { FC } from 'react'

const NodeToolbarTitle: FC<NodeToolbarProps> = ({ className, children, ...props }) => {
  return (
    <NodeToolbarNative isVisible align='center' offset={-5} position={Position.Top} className={clsx('text-xs', className)} {...props} >
      {children}
    </NodeToolbarNative>
  )
}

export default NodeToolbarTitle