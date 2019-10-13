import * as constants from "./user.contants";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_USERS.SUCCESS: {
      return { ...action.payload };
    }

    default:
      return state;
  }
};

export default reducer;
