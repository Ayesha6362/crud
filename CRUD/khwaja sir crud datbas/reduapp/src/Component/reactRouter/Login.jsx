import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is login</h1>
      <form action="">
        <label htmlFor="usename">User name : </label>
        <input type="text" placeholder="    use name..." />
        <br />
        <br />
        <label htmlFor="">Password : </label>
        <input type="password" placeholder="    password...  " />
        <br />
        <br />
        <button onClick={() => navigate("../dashboard", { replace: true })}>
          Login
        </button>
      </form>
      
    </div>
  );
};

export default Login;
