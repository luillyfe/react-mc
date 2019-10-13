import * as constants from "./security.constants";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOG_IN.SUCCESS: {
      return { ...action.payload };
    }

    case constants.LOG_OUT.SUCCESS: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
