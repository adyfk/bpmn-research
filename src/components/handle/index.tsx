import { Handle as HandleNative, HandleProps } from '@xyflow/react'
import clsx from 'clsx'
import React, { FC } from 'react'

const Handle: FC<HandleProps> = (props) => {
  return <HandleNative className={clsx(props.type === 'source' && '!bg-orange-400')} {...props} />
}

export default Handle