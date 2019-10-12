import { buildAsyncActionType } from "../redux/utils";

const MODULE_NAME = "security";

const LOG_IN = buildAsyncActionType(MODULE_NAME, "LOG_IN");

export { LOG_IN };
