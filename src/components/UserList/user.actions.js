import * as constants from "./user.contants";

import { https } from "../../https/https";

const requestUsers = () => (dispatch, getState) => {
  const { token } = getState().security;
  const url = "someurl";
  const config = {
    headers: { token }
  };

  dispatch({ type: constants.GET_USERS.REQUESTED });
  https
    .getUsers(url, config)
    .then(res => {
      dispatch({ type: constants.GET_USERS.SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: constants.GET_USERS.FAILED });
    });
};

export { requestUsers };
