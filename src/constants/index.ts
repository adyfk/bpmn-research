import { ENTITY_TYPE } from "@/types";

export const ENTITIES = [
  {
    label: 'Event Start',
    group: 'Events',
    key: ENTITY_TYPE.EVENT_START,
  },
  {
    label: 'Event End',
    group: 'Events',
    key: ENTITY_TYPE.EVENT_END,
  },
  {
    label: 'Task',
    group: 'Tasks',
    key: ENTITY_TYPE.TASK,
  },
  {
    label: 'Task User',
    group: 'Tasks',
    key: ENTITY_TYPE.TASK_USER,
  },
  {
    label: 'Task Service',
    group: 'Tasks',
    key: ENTITY_TYPE.TASK_SERVICE,
  },
  {
    label: 'Gateway',
    group: 'Gateways',
    key: ENTITY_TYPE.GATEWAY,
  },
  {
    label: 'Gateway AND',
    group: 'Gateways',
    key: ENTITY_TYPE.GATEWAY_AND,
  },
  {
    label: 'Gateway XOR',
    group: 'Gateways',
    key: ENTITY_TYPE.GATEWAY_XOR,
  },
  {
    label: 'Gateway OR',
    group: 'Gateways',
    key: ENTITY_TYPE.GATEWAY_OR,
  },
  {
    label: 'Gateway Event Based',
    group: 'Gateways',
    key: ENTITY_TYPE.GATEWAY_EVENTBASED,
  },
  {
    label: 'Gateway Complex',
    group: 'Gateways',
    key: ENTITY_TYPE.GATEWAY_COMPLEX,
  },
  {
    label: 'Data Object',
    group: 'Datas',
    key: ENTITY_TYPE.DATA_OBJECT,
  },
  {
    label: 'Data Store',
    group: 'Datas',
    key: ENTITY_TYPE.DATA_STORE,
  },
]
