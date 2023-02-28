import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Constants from "./Constants";
import ApiServices from "./ApiServices";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  constructor(props) {
    super(props);
    // Check if user is already logged in
    Constants.fetchCookiesAndValidate("/login", "/home");
  }

  validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(this.state.email);
    return isValidEmail;
  };

  validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = passwordRegex.test(this.state.password);
    return isValidPassword;
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  forwardToSignup = (e) => {
    // const cookies = new Cookies();
    // cookies.set("myCat", "Pacman", { path: "/" });
    // console.log(cookies.get("myCat")); // Pacman
    window.location.href = "/signup";
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password are empty
    if (!this.state.email || !this.state.password) {
      Constants.CUSTOM_TOAST(false, "Please enter email and password");
      return;
    } else {
      console.log(this.validateEmail(), this.validatePassword());
      if (!this.validateEmail()) {
        Constants.CUSTOM_TOAST(false, "Please enter valid email");
        return;
      }
      if (!this.validatePassword()) {
        Constants.CUSTOM_TOAST(false, "Please enter valid password");
        return;
      }

      ApiServices.makeLoginCall(this.state);
    }

    // Continue with form submission
    console.log("Submitted", this.state.email, this.state.password);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container d-flex align-items-center justify-content-center vh-100">
          <form className="card p-5">
            <h2 className="text-center mb-4">Trace -Secure File Transfer</h2>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="Email Address"
                aria-describedby="emailHelp"
                required
                onChange={this.handleEmailChange}
              />
              <label htmlFor="email-input">Email Address</label>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                aria-describedby="password-help"
                required
                onChange={this.handlePasswordChange}
              />
              <label htmlFor="password-input">Password</label>
              <div id="password-help" className="form-text">
                Password must be at least 8 characters long and contain at{" "}
                <br />
                least one uppercase letter, one lowercase letter, one number,{" "}
                <br />
                and one special character.{" "}
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.forwardToSignup}
              >
                Create
              </button>
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default LoginPage;
