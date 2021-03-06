import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import SingUp from "./SingUp";

export default class TopBar extends Component {
  render() {
    return (
      <header
        style={{
          height: 48,
          width: "100%",
          backgroundColor: "rgb(102,63,180)",
          color: "white",
          padding: "6px 10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <div style={styles.logo}>
          <Link to="/">
            <img
              alt={"logo"}
              style={{ maxHeight: 40, flex: 1 }}
              src="favicon-196x196.png"
            />
          </Link>
        </div>
        <Link to="/home">{"Modus Create"}</Link>
        <Link to="/users">Users</Link>
        <div style={{ float: "left", color: "white", flex: 1 }} />
        <div style={{ float: "right", paddingRight: 20 }}>
          <Login
            style={{ backgroundColor: "blue", color: "white" }}
            showName={true}
          />
          <SingUp />
        </div>
      </header>
    );
  }
}

const styles = {
  logo: {
    float: "left",
    margin: 8
  }
};
