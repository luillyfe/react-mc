import * as constants from "./user.contants";
import * as securityConstants from "../../security/security.constants";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_USERS.SUCCESS: {
      return { users: [...action.payload] };
    }

    case constants.GET_USER.SUCCESS: {
      return { ...state, ...action.payload };
    }

    case securityConstants.LOG_OUT.SUCCESS: {
      return initialState;
    }

    default:
      return state;
  }
};

export default reducer;
