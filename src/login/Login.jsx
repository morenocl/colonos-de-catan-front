import React, { useContext, useState } from "react";
import { AuthContext } from "./LoginScreen";
import { login } from "../utils/Api";
import "./Login.css";

export const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const initialState = {
    username: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    });

    const dispatchLogin = resJson => {
      if (resJson.token) {
        dispatch({
          type: "LOGIN",
          payload: { ...resJson, user: data.username }
        });
      }
    };
    const setError = error => {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error.message
      });
    };
    login(data.username, data.password, dispatchLogin, setError);
  };

  return (
    <div className="login-container">
      <div className="card">
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <h1>Login</h1>
            <label htmlFor="username">
              Username
              <input
                type="text"
                value={data.username}
                onChange={handleInputChange}
                name="username"
                id="username"
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                value={data.password}
                onChange={handleInputChange}
                name="password"
                id="password"
              />
            </label>
            {data.errorMessage && (
              <span className="form-error">{data.errorMessage}</span>
            )}
            <button disabled={data.isSubmitting}>
              {data.isSubmitting ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
