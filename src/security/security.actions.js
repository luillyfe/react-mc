import querystring from "querystring";

import * as constants from "./security.constants";
import { https } from "../https/https";
import { removeStateFromLocalStorage } from "../redux/localStorage";

const logIn = ({ username, password }) => dispatch => {
  const url = "https://server.com/connect/token";
  const params = { username, password };
  const config = {
    headers: {
      "Content-type": "application/x-www-form-urlenconded",
      Accept: "application/json"
    }
  };

  dispatch({ type: constants.LOG_IN.REQUESTED });
  https
    .post(url, querystring.stringify(params), config)
    .then(res => {
      dispatch({ type: constants.LOG_IN.SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: constants.LOG_IN.FAILED });
    });
};

const logOut = () => (dispatch, getState) => {
  const { token } = getState().security;

  const url = "https://server.com/token/cancel";
  const config = {
    headers: { token }
  };

  dispatch({ type: constants.LOG_OUT.REQUESTED });
  https
    .cancelToken(url, config)
    .then(res => {
      console.log(res.data);
      removeStateFromLocalStorage();
      dispatch({ type: constants.LOG_OUT.SUCCESS });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: constants.LOG_OUT.FAILED });
    });
};

export { logIn, logOut };
