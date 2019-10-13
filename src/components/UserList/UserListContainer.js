import { connect } from "react-redux";

import UserList from "./UserList";

import { getUsers } from "./user.selectors";
import { requestUsers } from "./user.actions";

const mapStateToProps = state => ({ users: getUsers(state) });
const mapDispatchToProps = {
  getUsers: requestUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
