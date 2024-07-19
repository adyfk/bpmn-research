'use client';
import React from 'react'
import '@xyflow/react/dist/style.css';
import dynamic from 'next/dynamic';

const BpmnContainer = dynamic(() => import('@/components/bpmn-container'), { ssr: false })

const Runner = () => {

  return (
    <div className='relative w-screen h-screen bg-white'>
      <BpmnContainer />
    </div>
  )
}

export default Runner