import * as constants from "./security.constants";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOG_IN.SUCCESS: {
      return { ...action.payload };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
