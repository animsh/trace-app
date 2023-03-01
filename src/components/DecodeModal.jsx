import React, { useState, useEffect } from "react";
import "./Modal.css";
import Cookies from "universal-cookie";
import Constants from "./Constants";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function DecodeModal(props) {
  const getData = () => {
    console.log("Decoded mounted");

    const cookies = new Cookies();

    const encodedfile = document.getElementById("encoded-file").files[0];
    const keyfile = document.getElementById("key-file").files[0];
    const password = document.getElementById("encrypted-password").value;
    const type = document.getElementById("image").checked
      ? "image"
      : document.getElementById("audio").checked
      ? "audio"
      : "video";

    let formData = new FormData();
    if (encodedfile === undefined) {
      Constants.CUSTOM_TOAST(false, "Please Select Encoded File");
      return;
    }
    if (keyfile === undefined) {
      Constants.CUSTOM_TOAST(false, "Please Select Key File");
      return;
    }
    if (password === "") {
      Constants.CUSTOM_TOAST(false, "Please Enter Encrypted Password");
      return;
    }

    formData.append("encoded_file", encodedfile);
    formData.append("key_file", keyfile);
    formData.append("encrypted_password", password);
    formData.append("encoded_file_type", type[0].toUpperCase());
    formData.append("user_id", cookies.get("access_id"));
    formData.append("private_key", cookies.get("access_key"));
    formData.forEach((value, key) => {
      console.log(key + " " + value);
    });
    Constants.CUSTOM_TOAST(
      true,
      "We Are Decoding Your File, You can leave after 5 second, if successfull file will be reflected in your storage"
    );
    axios
      .post("http://127.0.0.1:8000/api/users/decode", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Token: cookies.get("access_token"),
        },
      })
      .then(function (response) {
        console.log(response);
        let data = response.data;
        if (data.status === "success") {
          Constants.CUSTOM_TOAST(true, "Decoded Successfull");
          Constants.sleep(2000).then(() => {
            props.toggleEncodeModal(false);
          });
        } else {
          Constants.CUSTOM_TOAST(false, "Decoded Failed " + data.message);
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
          <h4>Decode</h4>
          <form>
            <div className="mb-4">
              <label htmlFor="encoded-file" className="form-label">
                Encoded File
              </label>
              <input className="form-control" type="file" id="encoded-file" />
            </div>

            <div className="mb-4">
              <label htmlFor="key-file" className="form-label">
                Key File
              </label>
              <input className="form-control" type="file" id="key-file" />
            </div>

            <div className="input-group mb-4">
              <span className="input-group-text">Encrypted Password</span>
              <textarea
                id="encrypted-password"
                className="form-control"
                aria-label="Encrypted Password"
              ></textarea>
            </div>

            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <label className="form-label me-4">Encoded File Type:</label>

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
              onClick={() => props.toggleDecodeModal(false)}
            >
              Cancel
            </button>

            <button type="button" onClick={getData} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
}

export default DecodeModal;
