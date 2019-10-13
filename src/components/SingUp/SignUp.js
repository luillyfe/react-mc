import React from "react";
import Button from "../Button";
import Login from "../Login";

const SignUp = ({ user }) => {
  return user ? (
    <Login style={{ backgroundColor: "red", color: "white" }} />
  ) : (
    <Button style={{ backgroundColor: "red", color: "white" }}>Signup</Button>
  );
};

export default SignUp;
