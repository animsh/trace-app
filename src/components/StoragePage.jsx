import React, { Component } from "react";
import EncodeStoragePage from "./EncodeStoragePage";
import DecodeStoragePage from "./DecodeStoragePage";
import NavBar from "./NavBar";

import Constants from "./Constants";

function StoragePage() {
  Constants.fetchCookiesAndValidate("/storage", "/storage");
  return (
    <React.Fragment>
      <NavBar />
      <div className="container " style={{ paddingTop: "100px" }}>
        <div className="row">
          <div className="col-sm">
            <EncodeStoragePage />
          </div>
          <div className="col-sm">
            <DecodeStoragePage />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default StoragePage;
