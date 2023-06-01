import React from "react";
import Constants from "./Constants";

const ReceivedFile = ({ file }) => {
  const encoded_file_path = Constants.API_URL + ":8000/" + file.file.encoded_file;
  const key_file_path = Constants.API_URL + ":8000/" + file.file.key_file;

  let dict = {
    I: "Image",
    V: "Video",
    A: "Audio",
  };

  console.log(file);
  return (
    <div class="card mb-3">
      {/* <div class="card-header">File Details</div> */}
      <div class="card-body">
        <div class="row">
          <div class="col-md-4 col-lg-4">
            <p class="card-title custom-label">File Name:</p>
          </div>
          <div class="col-md-8 col-lg-8">
            <p class="card-title custom-text">
              {" "}
              {file.file.encoded_file.split("/").pop()}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-lg-4">
            <p class="card-title custom-label">Sender's ID:</p>
          </div>
          <div class="col-md-8 col-lg-8">
            <p class="card-title custom-text">{file.fromuser.id}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-lg-4">
            <p class="card-title custom-label">Password:</p>
          </div>
          <div class="col-md-8 col-lg-8">
            <p class="card-title custom-text">{file.file.encrypted_password}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-lg-4">
            <p class="card-title custom-label">File Type:</p>
          </div>
          <div class="col-md-8 col-lg-8">
            <p class="card-title custom-text">
              {dict[file.file.cover_file_type]}
            </p>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-md-4 col-lg-4">
            <p class="card-title custom-label">Steganography Method:</p>
          </div>
          <div class="col-md-8 col-lg-8">
            <p class="card-title custom-text">{file.file.operation_method}</p>
          </div>
        </div> */}

        <div class="row ps-2 pe-2">
          <a
            href={encoded_file_path}
            className="btn btn-primary col-md-6 col-lg-6"
            target="_blank"
            download
          >
            Encoded File
          </a>
          <div className="col-md-1 col-lg-1"></div>
          <a
            href={key_file_path}
            className="btn btn-primary col-md-5 col-lg-5"
            target="_blank"
            download
          >
            Key File
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReceivedFile;
