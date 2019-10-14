import React from "react";
import { withRouter } from "react-router-dom";

const UserDetail = ({ user, history }) => {
  const handleClick = event => {
    event.stopPropagation();
    history.push(`/user/${user.id.value}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card-image">
        <img
          src={user.picture.large}
          alt="user-img"
          style={{ maxWidth: "15rem" }}
        />
        <span className="card-title">{`${user.name.first} ${user.name.last}`}</span>
      </div>
      <div className="card-content" style={{ maxWidth: "15rem" }}>
        <p>
          I am living in {user.location.city}. I am {user.dob.age} years old. My
          phone number is {user.phone} and my email is: {user.email}
        </p>
      </div>
      <div className="card-action">
        <a href="#">{new Date(user.dob.date).toString()}</a>
      </div>
    </div>
  );
};

export default withRouter(UserDetail);
