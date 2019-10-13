import React, { useEffect } from "react";

const UserList = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
    console.log(users);
  }, [getUsers]);

  return (
    users &&
    users.map(user => {
      return (
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img
                  src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                  alt="user-img"
                />
                <span className="card-title">{`${user.name.first} ${user.name.last}`}</span>
              </div>
              <div className="card-content">
                <p>This is my phone, {user.phone}, fell free to reach me out</p>
              </div>
              <div className="card-action">
                <a href="#">{user.email}</a>
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default UserList;
