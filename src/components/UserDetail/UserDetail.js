import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Button from "../Button";

const UserDetail = ({ user, getUser, history, match, showBackButton }) => {
  const handleClick = event => {
    event.stopPropagation();
    history.push(`/user/${user.id.value}`);
  };

  const goBack = event => {
    event.stopPropagation();
    history.push("/users");
  };

  useEffect(() => {
    getUser(match.params.id);
  }, [getUser, match.params.id]);

  return user ? (
    <div className="card" onClick={handleClick} style={{ maxWidth: "15rem" }}>
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
        {showBackButton ? (
          <Button handleClick={goBack}>Go back</Button>
        ) : (
          <a href="#">{new Date(user.dob.date).toString()}</a>
        )}
      </div>
    </div>
  ) : (
    <div> this user has no id, the is failing </div>
  );
};

export default withRouter(UserDetail);
