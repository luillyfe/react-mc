import { connect } from "react-redux";

import { getUsers } from "./user.selectors";
import { requestUsers } from "./user.actions";

const mapStateToProps = state => ({ users: getUsers(state) });
const mapDispatchToProps = {
  getUsers: requestUsers
};

connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
