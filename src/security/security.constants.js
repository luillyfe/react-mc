import { buildAsyncActionType } from "../redux/utils";

const MODULE_NAME = "security";

const LOG_IN = buildAsyncActionType(MODULE_NAME, "LOG_IN");
const LOG_OUT = buildAsyncActionType(MODULE_NAME, "LOG_OUT");

export { LOG_IN, LOG_OUT };
