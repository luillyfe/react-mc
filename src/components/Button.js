import React, { Component } from "react";

const styles = {
  button: {
    width: 100,
    margin: 8,
    padding: 8
  }
};
export default class Button extends Component {
  render() {
    const { handleClick } = this.props;

    return (
      <button
        onClick={handleClick}
        style={{ ...styles.button, ...this.props.style }}
      >
        {this.props.children}
      </button>
    );
  }
}
