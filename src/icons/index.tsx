import { ENTITY_TYPE } from "@/types";
import { BpmnTaskIcon } from "./task";
import { BpmnTaskUserIcon } from "./task-user";
import { BpmnTaskServiceIcon } from "./task-service";
import { BpmnGatewayIcon } from "./gateway";
import { BpmnGatewayComplexIcon } from "./gateway-complex";
import { BpmnGatewayEventbasedIcon } from "./gateway-eventbased";
import { BpmnGatewayAndIcon } from "./gateway-and";
import { BpmnGatewayOrIcon } from "./gateway-or";
import { BpmnGatewayXorIcon } from "./gateway-xor";
import { BpmnEventStartIcon } from "./event-start";
import { BpmnEventEndIcon } from "./event-end";

// import { ENTITY_TYPE } from "@/types";

export const ICONS = {
  [ENTITY_TYPE.TASK]: BpmnTaskIcon,
  [ENTITY_TYPE.TASK_USER]: BpmnTaskUserIcon,
  [ENTITY_TYPE.TASK_SERVICE]: BpmnTaskServiceIcon,
  // gateway
  [ENTITY_TYPE.GATEWAY]: BpmnGatewayIcon,
  [ENTITY_TYPE.GATEWAY_COMPLEX]: BpmnGatewayComplexIcon,
  [ENTITY_TYPE.GATEWAY_EVENTBASED]: BpmnGatewayEventbasedIcon,
  [ENTITY_TYPE.GATEWAY_AND]: BpmnGatewayAndIcon,
  [ENTITY_TYPE.GATEWAY_OR]: BpmnGatewayOrIcon,
  [ENTITY_TYPE.GATEWAY_XOR]: BpmnGatewayXorIcon,
  // event
  [ENTITY_TYPE.EVENT_START]: BpmnEventStartIcon,
  [ENTITY_TYPE.EVENT_END]: BpmnEventEndIcon,
}

// export const ICONS = {
//   [ENTITY_TYPE.EVENT_START]: 'bpmn:start-event',
//   [ENTITY_TYPE.EVENT_END]: 'bpmn:end-event',
//   // 
//   [ENTITY_TYPE.TASK]: 'bpmn:task',
//   [ENTITY_TYPE.TASK_USER]: 'bpmn:user-task',
//   [ENTITY_TYPE.TASK_SERVICE]: 'bpmn:service-task',
//   // 
//   [ENTITY_TYPE.GATEWAY]: 'bpmn:gateway',
//   [ENTITY_TYPE.GATEWAY_XOR]: 'bpmn:gateway-xor',
//   [ENTITY_TYPE.GATEWAY_AND]: 'bpmn:gateway-parallel',
//   [ENTITY_TYPE.GATEWAY_OR]: 'bpmn:gateway-or',
//   [ENTITY_TYPE.GATEWAY_EVENTBASED]: 'bpmn:gateway-eventbased',
//   [ENTITY_TYPE.GATEWAY_COMPLEX]: 'bpmn:gateway-complex',
//   // [ENTITY_TYPE.]: 'data-object',
//   // [ENTITY_TYPE.]: 'data-store',
// }