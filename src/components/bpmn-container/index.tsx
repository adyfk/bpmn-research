import React, { FC, useCallback } from 'react';
import { ReactFlow, useNodesState, useEdgesState, ReactFlowProvider, Controls, Background, addEdge, BackgroundVariant, MiniMap, Panel } from '@xyflow/react';
import { EDGE_TYPE, EntityType, FlowType, NODE_TYPE } from '@/types';
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

const nodeTypes = {
  [NODE_TYPE.TASK]: Task,
  [NODE_TYPE.TASK_USER]: TaskUser,
  [NODE_TYPE.TASK_SERVICE]: TaskService,
  // gateway
  [NODE_TYPE.GATEWAY]: Gateway,
  [NODE_TYPE.GATEWAY_COMPLEX]: GatewayComplex,
  [NODE_TYPE.GATEWAY_EVENTBASED]: GatewayEventbased,
  [NODE_TYPE.GATEWAY_AND]: GatewayEventAnd,
  [NODE_TYPE.GATEWAY_OR]: GatewayEventOr,
  [NODE_TYPE.GATEWAY_XOR]: GatewayEventXor,
  // event
  [NODE_TYPE.EVENT_START]: EventStart,
  [NODE_TYPE.EVENT_END]: EventEnd,
}

const edgeTypes = {
  [EDGE_TYPE.SEQUENCE_FLOW]: SquenceFlow
}


const initialNodes: EntityType[] = [
  { id: '1', data: { label: 'Node Task', engine: {} }, position: { x: 100, y: 100 }, type: NODE_TYPE.TASK },
  { id: '1', data: { label: 'Node Task User', engine: {} }, position: { x: 100, y: 100 }, type: NODE_TYPE.TASK_USER },
  { id: '1', data: { label: 'Node Task Service', engine: {} }, position: { x: 100, y: 100 }, type: NODE_TYPE.TASK_SERVICE },
  // event
  // { id: '1', data: { label: 'Node Event', engine: {} }, position: { x: 100, y: 100 }, type: NODE_TYPE.EVENT },
  { id: '1', data: { label: 'Node Start', engine: {} }, position: { x: 100, y: 100 }, type: NODE_TYPE.EVENT_START },
  { id: '1', data: { label: 'Node End', engine: {} }, position: { x: 100, y: 100 }, type: NODE_TYPE.EVENT_END },
  // gateway
  { id: '3', data: { label: 'Node Gateway', engine: {} }, position: { x: 50, y: 50 }, type: NODE_TYPE.GATEWAY },
  { id: '3', data: { label: 'Node Gateway OR', engine: {} }, position: { x: 50, y: 50 }, type: NODE_TYPE.GATEWAY_OR },
  { id: '3', data: { label: 'Node Gateway XOR', engine: {} }, position: { x: 50, y: 50 }, type: NODE_TYPE.GATEWAY_XOR },
  { id: '3', data: { label: 'Node Gateway AND', engine: {} }, position: { x: 50, y: 50 }, type: NODE_TYPE.GATEWAY_AND },
  { id: '3', data: { label: 'Node Gateway EventBased', engine: {} }, position: { x: 50, y: 50 }, type: NODE_TYPE.GATEWAY_EVENTBASED },
  { id: '3', data: { label: 'Node Gateway Complex', engine: {} }, position: { x: 50, y: 50 }, type: NODE_TYPE.GATEWAY_COMPLEX },
  // 
  { id: '2', data: { label: 'Node Default', engine: {} }, position: { x: 100, y: 200 } },
]
  .map((item, index) => ({ ...item, id: index + '', position: { ...item.position, y: (index * 0) + item.position.x, x: (index * 300) + item.position.x } })) as EntityType[]
const initialEdges: FlowType[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    data: {
      label: 'Label IN Aja'
    },
    type: EDGE_TYPE.SEQUENCE_FLOW
  }];
const BpmnContainer: FC<{ children?: any }> = ({ children }) => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  console.table(nodes)
  console.table(edges)
  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
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
    </ReactFlowProvider>
  );
};

export default BpmnContainer;