import { Edge, Node } from "@xyflow/react";

export enum ENTITY_TYPE {
  EVENT_START = 'event-start',
  EVENT_END = 'event-end',
  TASK = 'task',
  TASK_USER = 'task-user',
  TASK_SERVICE = 'task-service',
  GATEWAY = 'gateway',
  GATEWAY_XOR = 'gateway-xor',
  GATEWAY_AND = 'gateway-and',
  GATEWAY_OR = 'gateway-or',
  GATEWAY_EVENTBASED = 'gateway-eventbased',
  GATEWAY_COMPLEX = 'gateway-complex',
  DATA_OBJECT = 'data-object',
  DATA_STORE = 'data-store',
}

export interface EntityDataType extends Record<string, any> {
  label?: string;
  engine?: Partial<{
    completed: boolean;
    completedAt: string;
    completeInfo: string;
    error: boolean;
    errorAt: string;
    errorInfo: string;
    active: boolean
    activeAt: string;
    activeInfo: string;
    proggres: boolean;
    proggresAt: string;
    proggresInfo: string;
  }>
}

export type TaskType = Node<EntityDataType, ENTITY_TYPE.TASK>
export type TaskUserType = Node<EntityDataType, ENTITY_TYPE.TASK_USER>
export type TaskServiceType = Node<EntityDataType, ENTITY_TYPE.TASK_SERVICE>

export type TasksType = TaskType | TaskUserType | TaskServiceType

// Gateway
export type GatewayType = Node<EntityDataType, ENTITY_TYPE.GATEWAY>
export type GatewayORType = Node<EntityDataType, ENTITY_TYPE.GATEWAY_OR>
export type GatewayXORType = Node<EntityDataType, ENTITY_TYPE.GATEWAY_XOR>
export type GatewayANDType = Node<EntityDataType, ENTITY_TYPE.GATEWAY_AND>
export type GatewayEventBasedType = Node<EntityDataType, ENTITY_TYPE.GATEWAY_EVENTBASED>
export type GatewayComplexType = Node<EntityDataType, ENTITY_TYPE.GATEWAY_COMPLEX>

export type GatewaysType = GatewayType | GatewayORType | GatewayXORType | GatewayANDType | GatewayEventBasedType | GatewayComplexType

// Event
// export type EventType = Node<EntityDataType, ENTITY_TYPE.EVENT>
export type EventStartType = Node<EntityDataType, ENTITY_TYPE.EVENT_START>
export type EventEndType = Node<EntityDataType, ENTITY_TYPE.EVENT_END>

export type EventsType = EventStartType | EventEndType

// Mixed
export type EntityType = TasksType | GatewaysType | EventsType



// ==================
// https://www.bpmnquickguide.com/view-bpmn-quick-guide/
export enum EDGE_TYPE {
  SEQUENCE_FLOW = 'sequence-flow',
  MESSAGE_FLOW = 'message-flow',
  ASSOCIATION = 'association',
  DATA_ASSOCIATION = 'data-association',
}

export interface EdgeDataType extends Record<string, any> {
  condition?: string;
  label?: string;
}

export type SquenceFlowType = Edge<EdgeDataType, EDGE_TYPE.SEQUENCE_FLOW>
export type MessageFlowType = Edge<Omit<EdgeDataType, 'condition'>, EDGE_TYPE.MESSAGE_FLOW>
export type AssociationType = Edge<Omit<EdgeDataType, 'condition'>, EDGE_TYPE.ASSOCIATION>
export type DataAssociationType = Edge<Omit<EdgeDataType, 'condition'>, EDGE_TYPE.DATA_ASSOCIATION>

export type FlowType = SquenceFlowType | MessageFlowType | AssociationType | DataAssociationType;