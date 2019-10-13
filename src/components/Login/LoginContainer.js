import { connect } from "react-redux";
import Login from "./Login";

import { logIn } from "../../security/security.actions";
import { logOut } from "../../security/security.actions";
import { getUser } from "../../security/security";

const mapStateToProps = state => ({ user: getUser(state) });

const mapDispatchToProps = { logIn, logOut };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
