import React, { useEffect } from "react";
import User from "../UserDetail";

const UserList = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around"
      }}
    >
      {users &&
        users.map(user => {
          return (
            <div
              style={{ display: "flex", maxWidth: "12.5rem", margin: "1rem" }}
              key={`${user.name}-${user.last}-${user.address}`}
            >
              <User user={user} />
            </div>
          );
        })}
    </div>
  );
};

export default UserList;
