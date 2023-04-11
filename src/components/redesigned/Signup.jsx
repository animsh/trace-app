import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ toggleAuth }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    tel: "",
    password: "",
  });

  const [postData, setPostData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.tel ||
      !formData.password
    ) {
      setErrorMessage("Please fill in all fields");
      setShowError(true);
      return;
    }
    setErrorMessage("");
    setShowError(false);
    setIsLoading(true);
    postData.name = formData.username;
    postData.email = formData.email;
    postData.phone = formData.tel;
    postData.password = formData.password;
    console.log(postData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/signup",
        postData
      );
      console.log(response.data);
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("access_token", response.data.token);
      localStorage.setItem("access_id", response.data.user.id);
      localStorage.setItem("access_key", response.data.key);
      setIsAuthenticated(true);
      toggleAuth(true);
      setIsLoading(false);
      // reset the form
      setFormData({
        username: "",
        email: "",
        tel: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
      setShowError(false);
    }
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: " calc(100vh - 4rem)" }}
    >
      {isAuthenticated && <Navigate to="/home" />}

      <form style={{ minWidth: "400px" }} onSubmit={handleSubmit}>
        <h5 style={{ fontWeight: 600 }}>Welcome to Trace: Signup</h5>
        {showError && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="username" className="form-label custom-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label custom-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tel" className="form-label custom-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="tel"
            value={formData.tel}
            onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
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
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div class="d-grid gap-2">
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
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
