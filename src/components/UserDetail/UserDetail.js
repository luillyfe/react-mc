import React from "react";

const UserDetail = ({ user }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          alt="user-img"
          style={{ maxWidth: "15rem" }}
        />
        <span className="card-title">{`${user.first} ${user.last}`}</span>
      </div>
      <div className="card-content" style={{ maxWidth: "15rem" }}>
        <p>
          I am living in {user.address}, my bank balance is {user.balance} and
          my email is: {user.email}
        </p>
      </div>
      <div className="card-action">
        <a href="#">{user.created}</a>
      </div>
    </div>
  );
};

export default UserDetail;
