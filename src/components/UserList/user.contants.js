import { buildAsyncActionType } from "../../redux/utils";

const MODULE_NAME = "users";

const GET_USERS = buildAsyncActionType(MODULE_NAME, "GET_USERS");

export { GET_USERS };
