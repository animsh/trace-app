import React from "react";

const DecodedFile = ({ file }) => {
  const decoded_file = "http://127.0.0.1:8000/" + file.decoded_file;

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
              {file.decoded_file.split("/").pop()}
            </p>
          </div>
        </div>
        <div class="row ps-2 pe-2">
          <a href={decoded_file} className="btn btn-primary " download>
            Download File
          </a>
        </div>
      </div>
    </div>
  );
};

export default DecodedFile;
