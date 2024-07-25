import React, { DragEventHandler, FC, useCallback, useRef } from 'react';
import { ReactFlow, useNodesState, useEdgesState, ReactFlowProvider, Controls, Background, addEdge, BackgroundVariant, MiniMap, Panel, useReactFlow } from '@xyflow/react';
import { EDGE_TYPE, EntityType, FlowType, ENTITY_TYPE } from '@/types';
import Task from '../nodes/task';
import Gateway from '../nodes/gateway';
import EventStart from '../nodes/event-start';
import EventEnd from '../nodes/event-end';
import GatewayComplex from '../nodes/gateway-complex';
import GatewayEventbased from '../nodes/gateway-eventbased';
import GatewayEventAnd from '../nodes/gateway-and';
import GatewayEventOr from '../nodes/gateway-or';
import GatewayEventXor from '../nodes/gateway-xor';
import TaskUser from '../nodes/task-user';
import TaskService from '../nodes/task-service';
import '@xyflow/react/dist/style.css';
import PanelNodes from '../panel-nodes';
import SquenceFlow from '../edges/squence-flow';
import generateId from '@/utils/generateId';

const nodeTypes = {
  [ENTITY_TYPE.TASK]: Task,
  [ENTITY_TYPE.TASK_USER]: TaskUser,
  [ENTITY_TYPE.TASK_SERVICE]: TaskService,
  // gateway
  [ENTITY_TYPE.GATEWAY]: Gateway,
  [ENTITY_TYPE.GATEWAY_COMPLEX]: GatewayComplex,
  [ENTITY_TYPE.GATEWAY_EVENTBASED]: GatewayEventbased,
  [ENTITY_TYPE.GATEWAY_AND]: GatewayEventAnd,
  [ENTITY_TYPE.GATEWAY_OR]: GatewayEventOr,
  [ENTITY_TYPE.GATEWAY_XOR]: GatewayEventXor,
  // event
  [ENTITY_TYPE.EVENT_START]: EventStart,
  [ENTITY_TYPE.EVENT_END]: EventEnd,
}

const edgeTypes = {
  [EDGE_TYPE.SEQUENCE_FLOW]: SquenceFlow
}


const initialNodes: EntityType[] = [
  { id: '1', data: { label: 'Node Task', engine: {} }, position: { x: 100, y: 100 }, type: ENTITY_TYPE.TASK },
  { id: '12', data: { label: 'Node Task User', engine: {} }, position: { x: 100, y: 100 }, type: ENTITY_TYPE.TASK_USER },
  { id: '13', data: { label: 'Node Task Service', engine: {} }, position: { x: 100, y: 100 }, type: ENTITY_TYPE.TASK_SERVICE },
  // event
  // { id: '1', data: { label: 'Node Event', engine: {} }, position: { x: 100, y: 100 }, type: ENTITY_TYPE.EVENT },
  { id: '14', data: { label: 'Node Start', engine: {} }, position: { x: 100, y: 100 }, type: ENTITY_TYPE.EVENT_START },
  { id: '15', data: { label: 'Node End', engine: {} }, position: { x: 100, y: 100 }, type: ENTITY_TYPE.EVENT_END },
  // gateway
  { id: '36', data: { label: 'Node Gateway', engine: {} }, position: { x: 50, y: 50 }, type: ENTITY_TYPE.GATEWAY },
  { id: '37', data: { label: 'Node Gateway OR', engine: {} }, position: { x: 50, y: 50 }, type: ENTITY_TYPE.GATEWAY_OR },
  { id: '38', data: { label: 'Node Gateway XOR', engine: {} }, position: { x: 50, y: 50 }, type: ENTITY_TYPE.GATEWAY_XOR },
  { id: '39', data: { label: 'Node Gateway AND', engine: {} }, position: { x: 50, y: 50 }, type: ENTITY_TYPE.GATEWAY_AND },
  { id: '32', data: { label: 'Node Gateway EventBased', engine: {} }, position: { x: 50, y: 50 }, type: ENTITY_TYPE.GATEWAY_EVENTBASED },
  { id: '44', data: { label: 'Node Gateway Complex', engine: {} }, position: { x: 50, y: 50 }, type: ENTITY_TYPE.GATEWAY_COMPLEX },
  // 
  { id: '2', data: { label: 'Node Default', engine: {} }, position: { x: 100, y: 200 } },
]
  .map((item, index) => ({ ...item, id: index + '', position: { ...item.position, y: (index * 0) + item.position.x, x: (index * 300) + item.position.x } })) as EntityType[]
const initialEdges: FlowType[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '12',
    data: {
      label: 'Label IN Aja'
    },
    type: EDGE_TYPE.SEQUENCE_FLOW
  }];
const BpmnContainer: FC<{ children?: any }> = ({ children }) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { screenToFlowPosition } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onDragOver: DragEventHandler<HTMLDivElement> = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer!.dropEffect = 'move';
  }, []);

  const onDrop: DragEventHandler<HTMLDivElement> = useCallback((event) => {
    event.preventDefault();

    const type = event.dataTransfer!.getData('application/reactflow') as ENTITY_TYPE

    // check if the dropped element is valid
    if (typeof type === 'undefined' || !type) {
      return;
    }

    if (Object.values(ENTITY_TYPE).includes(type)) {

      // project was renamed to screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode: EntityType = {
        id: generateId(),
        type: type as any,
        position,
        data: { label: `${type} node`, engine: {} },
      };

      setNodes((nds) => nds.concat(newNode));

    }
  },
    [screenToFlowPosition, setNodes],
  );

  console.table(nodes)
  console.table(edges)
  return (
    <div ref={reactFlowWrapper} className='relative w-screen h-screen bg-white'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onDrop={onDrop}
        onDragOver={onDragOver}
        defaultEdgeOptions={{
          type: EDGE_TYPE.SEQUENCE_FLOW
        }}

      // fitView
      >
        <Panel position="top-left">
          <PanelNodes />
        </Panel>
        <MiniMap position='bottom-right' />
        <Controls position={'bottom-left'} />
        <Background variant={BackgroundVariant.Dots} />
        {children}
      </ReactFlow>
    </div >
  );
};

// eslint-disable-next-line react/display-name
const WithReactFlow = (Comp: FC<any>) => (props: any) => {

  return (
    <ReactFlowProvider>
      <Comp {...props} />
    </ReactFlowProvider>
  )

}

export default WithReactFlow(BpmnContainer)