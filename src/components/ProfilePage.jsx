import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./NavBar";
import Constants from "./Constants";
import Cookies from "universal-cookie";
import axios from "axios";

function ProfilePage() {
  const [name, setName] = useState("Full Name");
  const [email, setEmail] = useState("fullname@gmail.com");
  const [phone, setPhone] = useState("0000000000");
  const [password, setPassword] = useState("Xyz@1234");
  const [rsapublickey, setRsaPublicKey] = useState("RSA Public Key");
  const [rsaprivatekey, setRsaPrivateKey] = useState("RSA Private Key");

  useEffect(() => {
    const cookies = new Cookies();

    let axiosConfig = {
      headers: {
        // 'Content-Type': 'application/json;charset=UTF-8',
        // "Access-Control-Allow-Origin": "*",
        Token: cookies.get("access_token"),
      },
    };

    Constants.fetchCookiesAndValidate("/profile", "/profile");

    axios
      .get("http://127.0.0.1:8000/api/users/me", axiosConfig)
      .then(function (response) {
        if (response.data) {
          let data = response.data;
          console.log(data);
          if (data.status === "success") {
            setName(data.data.name);
            setEmail(data.data.email);
            setPhone(data.data.phone);
            setPassword(data.data.password);
            setRsaPublicKey(data.data.rsa_public_key);
            setRsaPrivateKey(data.data.rsa_private_key);
            Constants.CUSTOM_TOAST(true, "Profile Loaded");
          } else {
            Constants.CUSTOM_TOAST(false, "Not Found");
          }
        } else {
          Constants.CUSTOM_TOAST(false, "Not Found");
        }
      })
      .catch(function (error) {
        console.log(error);
        Constants.CUSTOM_TOAST(false, "Not Found");
      });
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "100vh", marginTop: "100px", marginBottom: "100px" }}
      >
        <div className="d-flex justify-content-between card p-5 w-100">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <div className="flex align-items-center justify-content-center">
                  <img
                    src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
                    alt="Profile"
                    style={{
                      width: "50%",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />

                  <br />
                  <div className="alert alert-primary" role="alert">
                    To protect your personal information from unauthorized
                    access, please avoid sharing your password, RSA keys with
                    anyone. When sharing encoded files, ensure that they are
                    only shared with the intended recipients.
                  </div>
                </div>
              </div>

              <div class="col-sm">
                <div className="input-group mb-3 ">
                  <span className="input-group-text ">
                    <span class="material-symbols-rounded">badge</span>{" "}
                  </span>
                  <div className="form-floating">
                    <input
                      type="text"
                      readonly
                      className="form-control-plaintext"
                      id="full-name"
                      placeholder="Full Name"
                      value={name}
                      disabled
                    />
                    <label htmlFor="full-name">Full Name</label>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <span class="material-symbols-rounded">mail</span>
                  </span>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control-plaintext"
                      id="email"
                      placeholder="Username"
                      value={email}
                      disabled
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <span class="material-symbols-rounded">call</span>
                  </span>
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control-plaintext"
                      id="phone"
                      placeholder="Phone"
                      value={phone}
                      disabled
                    />
                    <label htmlFor="phone">Phone</label>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text ">
                    <span class="material-symbols-rounded">key</span>
                  </span>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control-plaintext"
                      id="password"
                      placeholder="Password"
                      value={password}
                      disabled
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <span class="material-symbols-rounded">lock_open</span>
                  </span>
                  <div className="form-floating">
                    <textarea
                      type="text"
                      className="form-control-plaintext"
                      style={{ height: "160px" }}
                      id="rsa-public-key"
                      placeholder="RSA Public Key"
                      value={rsapublickey}
                      disabled
                    />
                    <label htmlFor="rsa-public-key">RSA Public Key</label>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <span class="material-symbols-rounded">lock</span>
                  </span>
                  <div className="form-floating">
                    <textarea
                      style={{ height: "200px" }}
                      type="text"
                      className="form-control-plaintext"
                      id="rsa-private-key"
                      placeholder="RSA Private Key"
                      value={rsaprivatekey}
                      disabled
                    />
                    <label htmlFor="rsa-private-key">RSA Private Key</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3 bg-light ">
        <div className="container">
          <span className="text-muted">
            © 2023 Trace - Secure File Transfer
          </span>
        </div>
      </footer>
      <ToastContainer />
    </React.Fragment>
  );
}

export default ProfilePage;
