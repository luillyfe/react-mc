import { connect } from "react-redux";
import Login from "./Login";

import { logIn } from "../../security/security.actions";
import {getUser} from "../../security/security";

const mapStateToProps = state => ({ user: getUser(state) });

const mapDispatchToProps = { logIn };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
