import React from "react";

const Login = () => {
  let gif = require("./animation.gif");
  console.log(gif);
  return (
    <div>
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
          <h5
            style={{
              fontWeight: 600,
              textAlign: "right",
              marginRight: "2rem",
              marginTop: "2rem",
              marginBottom: "0",
            }}
          >
            <a href="/signup" style={{ color: "#000", textDecoration: "none" }}>
              Signup
            </a>
          </h5>
          <div
            className="container d-flex align-items-center justify-content-center"
            style={{ minHeight: " calc(100vh - 4rem)" }}
          >
            {/* Login inputs */}
            <form style={{ minWidth: "400px" }}>
              <h5 style={{ fontWeight: 600 }}>Welcome to Trace: Login</h5>
              <div className="mb-3">
                <label htmlFor="username" className="form-label custom-label">
                  Username
                </label>
                <input type="text" className="form-control" id="username" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label custom-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div class="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            {/* Greeting message */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
