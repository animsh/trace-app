import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Login = ({ toggleAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [postData, setPostData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    localStorage.setItem("isAuthenticated", false);
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please fill in all fields");
      setShowError(true);
      return;
    }
    setErrorMessage("");
    setShowError(false);
    setIsLoading(true);

    postData.email = email;
    postData.password = password;
    console.log(postData);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/login",
        postData
      );
      console.log(response.data);

      if (response.data.status === "success") {
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("access_token", response.data.data.token);
        localStorage.setItem("access_id", response.data.data.user_id);
        localStorage.setItem("access_key", response.data.data.key);
        setIsAuthenticated(true);
        toggleAuth(true);
        setIsLoading(false);
        // reset the form
        setPostData({
          email: "",
          password: "",
        });
      } else {
        setErrorMessage(response.data.message);
        setShowError(true);
        setIsLoading(false);
        // setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
      setShowError(false);
      // setIsAuthenticated(false);
    }

    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: " calc(100vh - 4rem)" }}
    >
      {/* {isAuthenticated && <Navigate to="/home" />} */}
      {/* Login inputs */}
      <form style={{ minWidth: "400px" }} onSubmit={handleSubmit}>
        <h5 style={{ fontWeight: 600 }}>Welcome to Trace: Login</h5>
        {showError && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label custom-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label custom-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
      {/* Greeting message */}
    </div>
  );
};

export default Login;
