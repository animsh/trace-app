import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Constants from "./Constants";

const Profile = ({ isAuthenticated, toggleAuth }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");

  const handleCopyClick = (inputValue) => {
    navigator.clipboard.writeText(inputValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      let axiosConfig = {
        headers: {
          // 'Content-Type': 'application/json;charset=UTF-8',
          // "Access-Control-Allow-Origin": "*",
          Token: localStorage.getItem("access_token"),
        },
      };

      const response = await axios.get(
        Constants.API_URL + ":8000/api/users/me",
        axiosConfig
      );

      if (response.data) {
        let data = response.data;
        console.log(data);
        if (data.status === "success") {
          setUsername(data.data.name);
          setEmail(data.data.email);
          setPhone(data.data.phone);
          setPassword(data.data.password);
          setPrivateKey(data.data.rsa_private_key);
          setPublicKey(data.data.rsa_public_key);
        } else {
          console.log("Not Found");
        }
      } else {
        console.log("Not Found");
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ username, email, phone, password, privateKey, publicKey });
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("access_id");
    localStorage.removeItem("access_key");
    toggleAuth(false);
  };

  const imageStyle = {
    width: "100%",
    aspectRatio: "1/1",
    objectFit: "cover",
    borderRadius: "50%",
  };

  const linkImage = `https://placehold.co/300x300?text=${username}&font=source-sans-pr`


  return (

    <div className="container">
      {!localStorage.getItem("isAuthenticated") && <Navigate to="/auth" />}

      <div className="scale-to-height row" style={{ padding: "24px" }}>
        <div className="col-md-2 col-lg-2">
          <img src={linkImage} alt="User Photo" style={imageStyle} />
        </div>
        <div className="col-md-10 col-lg-10">
          <form style={{ minWidth: "400px" }} onSubmit={handleLogout}>
            <h5 style={{ fontWeight: 600 }}>Welcome to your profile</h5>

            <div className="mb-3">
              <label htmlFor="username" className="form-label custom-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                disabled
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled
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
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                disabled
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label custom-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                disabled
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="rsa-private-key"
                className="form-label custom-label"
              >
                RSA - Private Key
              </label>
              <textarea
                className="form-control"
                id="rsa-private-key"
                rows={9}
                value={privateKey}
                onChange={(event) => setPrivateKey(event.target.value)}
                disabled
                style={{
                  resize: "none",
                }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="rsa-public-key"
                className="form-label custom-label"
              >
                RSA - Public Key
              </label>
              <textarea
                id="rsa-public-key"
                className="form-control"
                rows={4}
                value={publicKey}
                onChange={(event) => setPublicKey(event.target.value)}
                disabled
                style={{
                  resize: "none",
                }}
              />
            </div>

            <div className="d-grid gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCopyClick(publicKey);
                }}
                className="btn btn-primary"
              >
                Copy Public Key
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleCopyClick(privateKey);
                }}
                className="btn btn-primary"
              >
                Copy Private Key
              </button>
              <button type="submit" className="btn btn-primary">
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
