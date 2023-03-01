import React from "react";

function EncodeStoragePage(props) {
  console.log(props.file);
  const decoded_file = "http://127.0.0.1:8000/" + props.file.decoded_file;

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">
          {props.file.decoded_file.split("/").pop()}
        </h5>
        <a href={decoded_file} className="btn btn-primary" download>
          Download
        </a>
      </div>
    </div>
  );
}

export default EncodeStoragePage;
