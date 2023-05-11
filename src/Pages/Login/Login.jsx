import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import Header from "../../components/Header/Header";
import { Link,useNavigate } from "react-router-dom";

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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;