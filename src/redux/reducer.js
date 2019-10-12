import { combineReducers } from "redux";

import security from "../security/security.reducer"

const reducer = combineReducers({
    security
});

export default reducer;
