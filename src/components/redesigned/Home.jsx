import React, { useState } from "react";
import TextAnimation from "./TextAnimation";
import { Navigate } from "react-router-dom";

const Home = ({ isAuthenticated }) => {
  return (
    <>
      {/* {localStorage.getItem("isAuthenticated") != "true" && (
        <Navigate to="/auth" />
      )} */}
      {isAuthenticated != true && <Navigate to="/auth" />}
      <div
        className="scale-to-height  d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#6f2cf4" }}
      >
        {/* <FadeInText text="Hello, world!" /> */}
        <TextAnimation />
      </div>
    </>
  );
};

export default Home;
