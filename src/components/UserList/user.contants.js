import { buildAsyncActionType } from "../../redux/utils";

const MODULE_NAME = "users";

const GET_USERS = buildAsyncActionType(MODULE_NAME, "GET_USERS");
const GET_USER = buildAsyncActionType(MODULE_NAME, "GET_USER");

export { GET_USERS, GET_USER };
