import { NodeToolbar as NodeToolbarNative, NodeToolbarProps, Position } from '@xyflow/react'
import clsx from 'clsx'
import React, { FC } from 'react'
import { Icon } from '@iconify-icon/react'

export interface NodeToolbarActionProps extends Omit<NodeToolbarProps, 'children' | 'className'> {

}

const NodeToolbarAction: FC<NodeToolbarActionProps> = ({ ...props }) => {
  return (
    <NodeToolbarNative isVisible align='center' offset={-5} position={Position.Bottom} className='flex gap-1' {...props} >
      <Icon icon='line-md:alert-circle-loop' className={clsx('text-md cursor-pointer text-red-500')} />
      <Icon icon='line-md:play' className={clsx('text-md cursor-pointer hover:text-blue-500')} />
      <Icon icon='line-md:rotate-270' className={clsx('text-md cursor-pointer hover:text-blue-500')} />
      <Icon icon='line-md:check-all' className={clsx('text-md text-green-500')} />
      <Icon icon='svg-spinners:tadpole' className={clsx('text-md text-gray-500')} />
    </NodeToolbarNative>
  )
}

export default NodeToolbarAction