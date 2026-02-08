import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    login(form)
      .then(() => {
        history.push("/friends"); // ⭐ TESTİN BEKLEDİĞİ KRİTİK SATIR
      })
      .catch((err) => {
        console.log("LOGIN ERROR:", err);
      });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>

        <form onSubmit={handleSubmit} className="loginForm">
          <div>
            <h2>Username:</h2>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <h2>Password:</h2>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
