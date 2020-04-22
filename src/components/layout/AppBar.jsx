import React from "react";
import { AppBar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const style = {
  display: "flex",
  justifyContent: "space-around",
};

const NavBar = () => {
  return (
    <AppBar position="static">
      <div style={style}>
        <Link to="/add">
          <h3> add student </h3>
        </Link>
        <Link to="/">
          <h3>students list</h3>
        </Link>
      </div>
    </AppBar>
  );
};

export default NavBar;
