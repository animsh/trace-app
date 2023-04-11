import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Navigate } from "react-router-dom";

const Auth = ({ isAuthenticated, toggleAuth }) => {
  let gif = require("./animation.gif");
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin); // Update isLogin state with new value
    console.log(isLogin);
  };

  return (
    <div>
      {
        // If user is authenticated, redirect to home page
        isAuthenticated && <Navigate to="/home" />
      }
      <div className="row" style={{ minHeight: "100vh" }}>
        <div
          className="col-md-6 col-lg-6"
          style={{
            backgroundColor: "#6f2cf4",
            padding: "2rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h5 style={{ color: "#F3F3F4", fontWeight: 600 }}>Trace</h5>
          <p
            style={{ color: "#F3F3F4", fontWeight: 300, textAlign: "justify" }}
          >
            Secure communication made simple with cryptography and steganography
          </p>

          <div
            style={{
              backgroundColor: "#121212",
              backgroundImage: `url(${gif})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "15%",
              width: "60%",
              borderRadius: "10px",
            }}
          ></div>
        </div>
        <div className="col-md-6 col-lg-6">
          {isLogin ? (
            <>
              <h5
                style={{
                  fontWeight: 600,
                  textAlign: "right",
                  marginRight: "2rem",
                  marginTop: "2rem",
                  marginBottom: "0",
                  cursor: "pointer",
                }}
                onClick={() => {
                  toggleLogin();
                }}
              >
                Signup
              </h5>

              <Login toggleAuth={toggleAuth} />
            </>
          ) : (
            <>
              <h5
                style={{
                  fontWeight: 600,
                  textAlign: "right",
                  marginRight: "2rem",
                  marginTop: "2rem",
                  marginBottom: "0",
                  cursor: "pointer",
                }}
                onClick={() => {
                  toggleLogin();
                }}
              >
                Login
              </h5>

              <Signup toggleAuth={toggleAuth}></Signup>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
