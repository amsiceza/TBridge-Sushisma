import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import Header from "../../components/Header/Header";
import { Link,useNavigate } from "react-router-dom";
import Register from "../../components/Register/Register";

import "./Login.scss"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(UserContext);
const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password
    };

    login(user);
    setTimeout(() => {
      navigate("/profile")
    }, 1000);
  };

  return (
    <div>
      <Header />
    <div className="mega-main">
      <div >
        <div className="header-title">
          <h1 className="title-addp">User Login </h1>
          <hr />
        </div>
        <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
      
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
      
          <button className="submit-add-procut" type="submit">Login</button>
        </form>
        </div>
        <div className="register-main">
        <div className="header-title">
          <h1 className="title-addp">Register User </h1>
          <hr />
        </div>
          <Register/>
        </div>
    </div>
    </div>
  );
};

export default Login;