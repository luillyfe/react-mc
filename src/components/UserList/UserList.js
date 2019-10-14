import React, { useEffect } from "react";
import UserDetail from "../UserDetail";
import { Redirect } from "react-router-dom";

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
      {users ? (
        users.map((user, index) => {
          return (
            <div
              style={{ display: "flex", maxWidth: "12.5rem", margin: "1rem" }}
              key={user.id.value ? user.id.value : `${user.name}-${index}`}
            >
              <UserDetail user={user} />
            </div>
          );
        })
      ) : (
        <Redirect to="/home" />
      )}
    </div>
  );
};

export default UserList;
