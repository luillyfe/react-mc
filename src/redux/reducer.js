import { combineReducers } from "redux";

import security from "../security/security.reducer";
import users from "../components/UserList/user.reducer";

const reducer = combineReducers({
  security,
  users
});

export default reducer;
