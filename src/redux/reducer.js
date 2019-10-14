import { combineReducers } from "redux";

import security from "../security/security.reducer";
import user from "../components/UserList/user.reducer";

const reducer = combineReducers({
  security,
  user
});

export default reducer;
