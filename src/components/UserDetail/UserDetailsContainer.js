import { connect } from "react-redux";
import UserDetails from "./UserDetail";
import { requestUser } from "../UserList/user.actions";
import { getUser } from "../UserList/user.selectors";

const mapStateToProps = (state, props) => {
  if (!props.user) {
    return {
      user: getUser(state)
    };
  }
  return props;
};

const mapDispatchToProps = {
  getUser: requestUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
