import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ApiServices from "./ApiServices";
import Constants from "./Constants";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    // Check if user is already logged in
    Constants.fetchCookiesAndValidate("/signup", "/home");
  }

  state = {
    name: "",
    email: "",
    phone: "",
    password: "",
    retypePassword: "",
  };

  validateName = () => {
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const isValidName = nameRegex.test(this.state.name);
    return isValidName;
  };

  validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(this.state.email);
    return isValidEmail;
  };

  validatePhone = () => {
    const phoneRegex = /^[1-9]{1}[0-9]{9}$/;
    const isValidPhone = phoneRegex.test(this.state.phone);
    return isValidPhone;
  };

  validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = passwordRegex.test(this.state.password);
    return isValidPassword;
  };

  validateRetypePassword = () => {
    const isValidRetypePassword =
      this.state.password === this.state.retypePassword;
    return isValidRetypePassword;
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleRetypePasswordChange = (e) => {
    this.setState({ retypePassword: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name, this.state.email, this.state.phone);
    if (
      this.validateName() &&
      this.validateEmail() &&
      this.validatePhone() &&
      this.validatePassword() &&
      this.validateRetypePassword()
    ) {
      ApiServices.makeSignupCall(this.state);
    } else {
      console.log(
        "Invalid details",
        this.validateName(), // true
        this.validateEmail(), // true
        this.validatePhone(), // true
        this.validatePassword(), // true
        this.validateRetypePassword() // true
      );
      Constants.CUSTOM_TOAST(false, "Invalid details");
    }
  };

  forwardToLogin = (e) => {
    window.location.href = "/login";
  };

  render() {
    return (
      <React.Fragment>
        <div className="container d-flex align-items-center justify-content-center vh-100">
          <form className="card p-5">
            <h1 className="text-center mb-3">Secure File Transfer</h1>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="full-name-input"
                placeholder="Full Name"
                required
                onChange={this.handleNameChange}
              />
              <label for="full-name-input">Full Name</label>
            </div>

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
              <label for="email-input">Email Address</label>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="phone-input"
                placeholder="Phone Number"
                pattern="[1-9]{1}[0-9]{9}"
                required
                onChange={this.handlePhoneChange}
              />
              <label for="phone-input">Phone Number</label>
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

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="retype-password-input"
                placeholder="Retype Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                required
                onChange={this.handleRetypePasswordChange}
              />
              <label for="retype-password-input">Retype Password</label>
            </div>

            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.forwardToLogin}
              >
                Login
              </button>
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="btn btn-primary"
              >
                Create
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </React.Fragment>
    );
  }
}

export default SignupPage;
