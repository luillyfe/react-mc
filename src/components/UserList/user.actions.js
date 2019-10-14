import * as constants from "./user.contants";

import { https } from "../../https/https";

const requestUsers = () => (dispatch, getState) => {
  const state = getState();
  const token = state.security && state.security.token;
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

const requestUser = id => (dispatch, getState) => {
  const state = getState();
  const token = state.security && state.security.token;
  const users = state.user && state.user.users;
  const url = id;
  const config = {
    headers: { token }
  };

  dispatch({ type: constants.GET_USER.REQUESTED });
  https
    .getUser(url, config)
    .then(res => {
      const user = users.filter(u => u.id.value == res.data.id)[0];
      dispatch({
        type: constants.GET_USER.SUCCESS,
        payload: { current: user }
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: constants.GET_USER.FAILED });
    });
};

export { requestUsers, requestUser };
