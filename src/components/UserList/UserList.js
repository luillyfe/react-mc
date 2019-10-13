import React, { useEffect } from "react";

const UserList = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="container">
      {users &&
        users.map(user => {
          return (
            <div className="row" key={`${user.name}-${user.last}-${user.address}`}>
              <div className="col s12 m7">
                <div className="card">
                  <div className="card-image">
                    <img
                      src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
                      alt="user-img"
                    />
                    <span className="card-title">{`${user.first} ${user.last}`}</span>
                  </div>
                  <div className="card-content">
                    <p>
                      I am living in {user.address}, my bank balance is{" "}
                      {user.balance} and my email is: {user.email}
                    </p>
                  </div>
                  <div className="card-action">
                    <a href="#">{user.created}</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default UserList;
