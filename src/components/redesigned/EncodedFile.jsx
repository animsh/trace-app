import React, { useState } from "react";
import axios from "axios";
import Constants from "./Constants";

const EncodedFile = ({ file }) => {
  const encoded_file_path = Constants.API_URL + ":8000/" + file.encoded_file;
  const key_file_path = Constants.API_URL + ":8000/" + file.key_file;
  const [toUserId, setToUserId] = useState("");

  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [isShareSuccess, setIsShareSuccess] = useState(false);
  const [isShareError, setIsShareError] = useState(false);
  const [message, setMessage] = useState("");

  let dict = {
    I: "Image",
    V: "Video",
    A: "Audio",
  };

  const handleShareMenu = () => {
    setIsShareMenuOpen(!isShareMenuOpen);
  };

  const handleShare = async () => {
    const file_id = file.id;
    const data = {
      touser_id: toUserId,
      file_id: file_id,
      fromuser_id: localStorage.getItem("access_id"),
    };
    console.log(data);
    if (toUserId === "") {
      alert("Please enter the user id");
      return;
    }

    try {
      const response = await axios.post(
       Constants.API_URL + ":8000/api/users/send",
        data,
        {
          headers: {
            Token: localStorage.getItem("access_token"),
          },
        }
      );
      console.log(response.data);

      if (response.data.status === "success") {
        console.log("success");
        setIsShareSuccess(true);
        setIsShareError(false);
        setMessage(response.data.message);
      } else {
        console.log("error");
        setIsShareError(true);
        setIsShareSuccess(false);
        setMessage(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setIsShareError(true);
      setIsShareSuccess(false);
      setMessage("Something went wrong");
    } finally {
      setIsShareMenuOpen(false);
      setTimeout(() => {
        setIsShareError(false);
        setIsShareSuccess(false);
        setMessage("");
      }, 500);
    }
  };

  return (
    <>
      {file.key_file != "" && (
        <div class="card mb-3">
          {/* <div class="card-header">File Details</div> */}
          <div class="card-body">
            <div class="row">
              <div class="col-md-4 col-lg-4">
                <p class="card-title custom-label">File Name:</p>
              </div>
              <div class="col-md-8 col-lg-8">
                <p class="card-title custom-text">
                  {file.encoded_file.split("/").pop()}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-lg-4">
                <p class="card-title custom-label">Password:</p>
              </div>
              <div class="col-md-8 col-lg-8">
                <p class="card-title custom-text">{file.encrypted_password}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-lg-4">
                <p class="card-title custom-label">File Type:</p>
              </div>
              <div class="col-md-8 col-lg-8">
                <p class="card-title custom-text">
                  {dict[file.cover_file_type]}
                </p>
              </div>
            </div>
            {/* <div class="row">
              <div class="col-md-4 col-lg-4">
                <p class="card-title custom-label">Steganography Method:</p>
              </div>
              <div class="col-md-8 col-lg-8">
                <p class="card-title custom-text">{file.operation_method}</p>
              </div>
            </div> */}

            <div class="row ps-2 pe-2">
              <a
                href={encoded_file_path}
                className="btn btn-primary col-md-4 col-lg-4"
                target="_blank"
                download
              >
                Encoded File
              </a>
              <div className="col-md-1 col-lg-1"></div>
              <a
                href={key_file_path}
                className="btn btn-primary col-md-3 col-lg-3"
                target="_blank"
                download
              >
                Key File
              </a>
              <div className="col-md-1 col-lg-1"></div>
              <button
                className="btn btn-primary col-md-3 col-lg-3"
                onClick={handleShareMenu}
              >
                {isShareMenuOpen ? "Close" : "Share"}
              </button>
            </div>
            {isShareMenuOpen && (
              <div class="row mt-2">
                <label htmlFor="share-input" className="custom-label">
                  Enter Recipient's ID:
                </label>
                <div className="ps-2 pe-2 col-md-6 col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="share-input"
                    value={toUserId}
                    onChange={(e) => {
                      setToUserId(e.target.value);
                    }}
                  />
                </div>
                <button
                  className="btn btn-primary col-md-3 col-lg-3"
                  onClick={handleShare}
                >
                  Share
                </button>
              </div>
            )}

            {isShareError && (
              <div className="alert alert-danger mt-4" role="alert">
                {message}
              </div>
            )}

            {isShareSuccess && (
              <div className="alert alert-success mt-4" role="alert">
                {message}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EncodedFile;
