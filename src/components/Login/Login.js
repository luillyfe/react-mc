import React from "react";
import Button from "../Button";

const Login = ({ user, logIn, ...props }) => {
  const signIn = event => {
    event.stopPropagation();
    logIn({ username: "Fermin", password: "Blanco" });
  };

  const signOut = event => {
    event.stopPropagation();
    // logOut();
  };

  return user ? (
    <Button handleClick={signOut}>logOut</Button>
  ) : (
    <Button {...props} handleClick={signIn}>
      Login
    </Button>
  );
};

export default Login;
