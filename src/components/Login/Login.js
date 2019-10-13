import React, { useState, useEffect } from "react";
import Button from "../Button";

const Login = ({ user, logIn, logOut, showName, ...props }) => {
  const [name, setName] = useState(null);
  const signIn = event => {
    event.stopPropagation();
    logIn({ username: "Fermin", password: "Blanco" });
  };

  const signOut = event => {
    event.stopPropagation();
    logOut();
  };

  const formatName = user => {
    if (user && user.name && user.lastName) {
      const { name, lastName } = user;
      setName(
        `${name.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`
      );
    }
  };

  useEffect(() => {
    formatName(user);
  }, [user, formatName]);

  return user ? (
    <Button
      style={showName ? { width: "unset", borderRadius: "50%" } : props.style}
      handleClick={signOut}
    >
      {showName ? name : "logOut"}
    </Button>
  ) : (
    <Button {...props} handleClick={signIn}>
      Login
    </Button>
  );
};

export default Login;
