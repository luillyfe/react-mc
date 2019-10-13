import { connect } from "react-redux";

import SignUp from "./SignUp";

import { getUser } from "../../security/security";

const mapStateToProps = state => ({ user: getUser(state) });
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
