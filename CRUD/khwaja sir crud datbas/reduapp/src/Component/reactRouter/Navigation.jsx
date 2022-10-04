import React from "react";
import { Link as Mylinke } from "react-router-dom";
import Link from "@mui/material/Link";
// import { padding } from "@mui/system";

const Navigation = () => {
  return (
    <div>
      <Link
        component="button"
        variant="body2"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        <Mylinke to="login" style={{ padding: "15px" }}>
          Login
        </Mylinke>
        <Mylinke to="dashboard" style={{ padding: "15px" }}>
          Dashboarod
        </Mylinke>
        <Mylinke to="profile" style={{ padding: "15px" }}>
          Profile
        </Mylinke>
        <Mylinke to="signin" style={{ padding: "15px" }}>
          Signin
        </Mylinke>
      </Link>
    </div>
  );
};

export default Navigation;
