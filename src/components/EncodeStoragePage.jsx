import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import EncodeStorageItem from "./EncodeStorageItem";
import Cookies from "universal-cookie";
import Constants from "./Constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function EncodeStoragePage(props) {
  const [storageFiles, setStorageFiles] = useState([]);

  useEffect(() => {
    console.log("EncodeModal mounted");

    const cookies = new Cookies();

    cookies.get("access_id");
    axios
      .get("http://127.0.0.1:8000/api/users/encodedfiles", {
        headers: {
          Token: cookies.get("access_token"),
        },
      })
      .then(function (response) {
        console.log(response);
        let data = response.data;
        if (data.status === "success") {
          let storageFiles = data.data;
          console.log(Array.isArray(storageFiles));
          setStorageFiles(storageFiles);
          // Constants.CUSTOM_TOAST(true, "Files Retrieved Successfully!");
        } else {
          // Constants.CUSTOM_TOAST(false, data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <h4>Encoded Files</h4>
        {storageFiles.map((file) => (
          <EncodeStorageItem key={file.id} file={file} />
        ))}
        {storageFiles.length === 0 && (
          <div
            className="container"
            style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}
          >
            <div>
              <h4>Oops!</h4> <br />
              <p>Sorry, No Files Found.</p>
            </div>
          </div>
        )}
      </div>
      {/* <ToastContainer /> */}
    </React.Fragment>
  );
}

export default EncodeStoragePage;
