import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Modal.css";
import Cookies from "universal-cookie";
import Constants from "./Constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EncodeModal(props) {
  const getData = () => {
    console.log("EncodeModal mounted");

    const cookies = new Cookies();

    const coverfile = document.getElementById("cover-file").files[0];
    const hiddenfile = document.getElementById("hidden-file").files[0];
    const publickey = document.getElementById("public-key").value;
    const type = document.getElementById("image").checked
      ? "image"
      : document.getElementById("audio").checked
      ? "audio"
      : "video";

    let formData = new FormData();
    formData.append("cover_file", coverfile);
    formData.append("hidden_file", hiddenfile);
    formData.append("public_key_of_receiver", publickey);
    formData.append("cover_file_type", type[0].toUpperCase());
    formData.append("user_id", cookies.get("access_id"));
    formData.forEach((value, key) => {
      console.log(key + " " + value);
    });
    Constants.CUSTOM_TOAST(true, "We Are Encoding Your File");
    axios
      .post("http://127.0.0.1:8000/api/users/encode", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Token: cookies.get("access_token"),
        },
      })
      .then(function (response) {
        console.log(response);
        let data = response.data;
        if (data.status === "success") {
          Constants.CUSTOM_TOAST(true, "Encoding Successfull");
          Constants.sleep(2000).then(() => {
            props.toggleEncodeModal(false);
          });
        } else {
          Constants.CUSTOM_TOAST(false, "Encoding Failed " + data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <div className="modal-background">
        <div className="modal-container">
          <h4>Encode</h4>
          <form>
            <div className="mb-4">
              <label htmlFor="cover-file" className="form-label">
                Cover File
              </label>
              <input className="form-control" type="file" id="cover-file" />
            </div>

            <div className="mb-4">
              <label htmlFor="hidden-file" className="form-label">
                File To Hide
              </label>
              <input className="form-control" type="file" id="hidden-file" />
            </div>

            <div className="input-group mb-4">
              <span className="input-group-text">Public Key of Recipient</span>
              <textarea
                id="public-key"
                className="form-control"
                aria-label="Public Key of Recipient"
              ></textarea>
            </div>

            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="image"
                  checked
                />
                <label className="form-check-label" htmlFor="image">
                  Image
                </label>
              </div>

              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="audio"
                />
                <label className="form-check-label" htmlFor="audio">
                  Audio
                </label>
              </div>

              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="video"
                />
                <label className="form-check-label" htmlFor="video">
                  Video
                </label>
              </div>
            </div>

            <button
              className="btn btn-secondary me-4"
              onClick={() => props.toggleEncodeModal(false)}
            >
              Cancel
            </button>

            <button type="button" className="btn btn-primary" onClick={getData}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}

export default EncodeModal;
