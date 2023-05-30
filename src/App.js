import "./App.css";
import React, { useState } from "react";
import "./index.css";
import "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "material-components-web/dist/material-components-web.min.css";
import "./components/redesigned/_custom.scss";
import Auth from "./components/redesigned/Auth";
import Home from "./components/redesigned/Home";
import Users from "./components/redesigned/Users";
import Encode from "./components/redesigned/Encode";
import Decode from "./components/redesigned/Decode";
import Profile from "./components/redesigned/Profile";
import Storage from "./components/redesigned/Storage";
import NavBar from "./components/redesigned/NavBar";
import Footer from "./components/redesigned/Footer";
import Recieved from "./components/redesigned/Recieved";
import About from "./components/redesigned/About";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const toggleAuth = (value) => {
    setIsAuthenticated(value);
    console.log("App.js: " + isAuthenticated);
  };

  return (
    <>
      {isAuthenticated && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/auth"
          element={
            <Auth isAuthenticated={isAuthenticated} toggleAuth={toggleAuth} />
          }
        />
        <Route
          path="/home"
          element={<Home isAuthenticated={isAuthenticated} />}
        />
        <Route path="/storage" element={<Storage />} />
        <Route path="/received" element={<Recieved />} />
        <Route path="/users" element={<Users />} />
        <Route path="/encode" element={<Encode />} />
        <Route path="/decode" element={<Decode />} />
        <Route
          path="/profile"
          element={
            <Profile
              isAuthenticated={isAuthenticated}
              toggleAuth={toggleAuth}
            />
          }
        />
        <Route path="/about" element={<About />} />

      </Routes>
      {isAuthenticated && <Footer />}
    </>
  );
}

export default App;
