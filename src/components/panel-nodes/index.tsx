import { DragEvent, Fragment, useRef, useState } from 'react'
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { ENTITIES } from '../../constants';
import { ICONS } from '@/icons';
import { ENTITY_TYPE } from '@/types';

const DialogListEntities = ({ title, groupBy, onClose }: { title: string; onClose: () => void; groupBy?: string }) => {
  const ref = useRef<any>()
  const [search, setSearch] = useState('')

  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: ENTITY_TYPE) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  let previousGroupTemp = ''

  return (
    <div
      className={clsx(
        'absolute top-8 left-11',
        'bg-white w-72 py-2',
        'border border-gray-200 border-solid rounded-sm'
      )}
      ref={ref}
    >
      <div className='px-3'>
        <div className='flex justify-between items-center'>
          <div className='font-semibold mb-1'>{title}</div>
          <div
            onClick={() => {
              onClose()
            }}
            className='font-bold pb-1 text-red-600  cursor-pointer'
          >
            x
          </div>
        </div>
        <input
          type="text"
          placeholder='Search Element'
          className={clsx(
            'box-border w-full py-1 px-2',
            'rounded-md outline-none',
            'text-gray-600',
            'border-gray-200 border-solid',
            'hover:border-gray-300 focus:border-gray-300'
          )}
          onChange={(e) => setSearch(e.target.value || '')}
          value={search}
        />
        <div className='flex flex-col gap-2 mt-2 max-h-72 overflow-y-scroll'>
          {ENTITIES.filter((entity) => groupBy ? entity.group === groupBy : entity).filter((entity) => entity.label.toLowerCase().includes(search.toLowerCase()))
            .map(({ key, label, group }) => {

              let previousGroup = previousGroupTemp
              previousGroupTemp = group;

              const Icon = (ICONS as any)[key]
              return (
                <Fragment key={key}>
                  {previousGroup !== group && !groupBy && (
                    <div className='text-gray-400 text-sm'>
                      {group}
                    </div>
                  )}
                  <div
                    className='flex gap-2 text-sm items-center'
                    onDragStart={(event) => {
                      onDragStart(event, key)
                    }}
                    onDragOver={onClose}
                    title={label}
                    draggable
                  >
                    {!!Icon && (
                      <Icon className='h-8 w-auto node' draggable />
                    )}
                    <div className='ml-2'>
                      {label}
                    </div>
                  </div>
                </Fragment>
              )
            })}
        </div>
      </div>
    </div >
  )
}

const MoreEntities = () => {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }

  return <>

    <div
      title={'More'}
      className='cursor-pointer relative'
    >
      <Icon icon={'ic:baseline-more-horiz'} className='w-8 h-8' onClick={() => setOpen(true)} />
      {open && <DialogListEntities title='Create Element' onClose={onClose} />}
    </div>
  </>
}

const PanelNodes = () => {

  const onDragStart = (event: DragEvent<HTMLDivElement>, nodeType: ENTITY_TYPE) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className='p-2 border-2 border-solid border-gray-200 rounded-md m-2 bg-white'>
      <div className='flex flex-col gap-2'>
        {ENTITIES.filter((entity) =>
          [ENTITY_TYPE.EVENT_START, ENTITY_TYPE.TASK, ENTITY_TYPE.GATEWAY].includes(entity.key)
        ).map(({ key, label }) => {

          const Icon = (ICONS as any)[key]
          return (
            <div
              key={key}
              onDragStart={(event) => onDragStart(event, key)}
              title={label}
              draggable
            >
              {!!Icon && (
                <Icon className='w-8 h-8 node' />
              )}
            </div>
          )
        })}
        <MoreEntities />
      </div>
    </div>
  )
}

export default PanelNodes