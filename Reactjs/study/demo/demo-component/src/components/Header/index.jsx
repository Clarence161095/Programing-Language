import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import db from "../../store.js";

const Header = (props) => {
  const [color, setColor] = useState(0);

  const func = () => {
    setColor(color === "red" ? "blue" : "red");
    db.setData({ btnName: color });
  };

  return (
    <button
      className="btn"
      style={{ color: color }}
      onClick={(props.handleClick(props.name), func)}
    >
      {props.name}
    </button>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

Header.defaultProps = {
  name: "button",
  handleClick: () => {
    console.log("khong co xu ly");
  },
};

export default Header;
