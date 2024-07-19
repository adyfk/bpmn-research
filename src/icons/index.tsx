import { NODE_TYPE } from "@/types";
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

// import { NODE_TYPE } from "@/types";

export const ICONS = {
  [NODE_TYPE.TASK]: BpmnTaskIcon,
  [NODE_TYPE.TASK_USER]: BpmnTaskUserIcon,
  [NODE_TYPE.TASK_SERVICE]: BpmnTaskServiceIcon,
  // gateway
  [NODE_TYPE.GATEWAY]: BpmnGatewayIcon,
  [NODE_TYPE.GATEWAY_COMPLEX]: BpmnGatewayComplexIcon,
  [NODE_TYPE.GATEWAY_EVENTBASED]: BpmnGatewayEventbasedIcon,
  [NODE_TYPE.GATEWAY_AND]: BpmnGatewayAndIcon,
  [NODE_TYPE.GATEWAY_OR]: BpmnGatewayOrIcon,
  [NODE_TYPE.GATEWAY_XOR]: BpmnGatewayXorIcon,
  // event
  [NODE_TYPE.EVENT_START]: BpmnEventStartIcon,
  [NODE_TYPE.EVENT_END]: BpmnEventEndIcon,
}

// export const ICONS = {
//   [NODE_TYPE.EVENT_START]: 'bpmn:start-event',
//   [NODE_TYPE.EVENT_END]: 'bpmn:end-event',
//   // 
//   [NODE_TYPE.TASK]: 'bpmn:task',
//   [NODE_TYPE.TASK_USER]: 'bpmn:user-task',
//   [NODE_TYPE.TASK_SERVICE]: 'bpmn:service-task',
//   // 
//   [NODE_TYPE.GATEWAY]: 'bpmn:gateway',
//   [NODE_TYPE.GATEWAY_XOR]: 'bpmn:gateway-xor',
//   [NODE_TYPE.GATEWAY_AND]: 'bpmn:gateway-parallel',
//   [NODE_TYPE.GATEWAY_OR]: 'bpmn:gateway-or',
//   [NODE_TYPE.GATEWAY_EVENTBASED]: 'bpmn:gateway-eventbased',
//   [NODE_TYPE.GATEWAY_COMPLEX]: 'bpmn:gateway-complex',
//   // [NODE_TYPE.]: 'data-object',
//   // [NODE_TYPE.]: 'data-store',
// }