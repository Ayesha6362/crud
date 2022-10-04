import React from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Profile from "./Profile";
import SignIn from "./SignIn";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <h1>home</h1>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="/" element={<h1>this is home</h1>} />
      </Routes>
    </div>
  );
};

export default Home;
