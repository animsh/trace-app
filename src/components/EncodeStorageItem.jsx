import React from "react";

function EncodeStorageItem(props) {
  console.log(props.file);

  const encoded_file_path = "http://127.0.0.1:8000/" + props.file.encoded_file;
  const key_file_path = "http://127.0.0.1:8000/" + props.file.key_file;

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">
          {props.file.encoded_file.split("/").pop()}
        </h5>
        <p className="card-text">File Type: {props.file.cover_file_type}</p>
        <p className="card-text">Password: {props.file.encrypted_password}</p>
        <a href={encoded_file_path} className="btn btn-primary me-2" download>
          Download Encoded File
        </a>
        <a href={key_file_path} className="btn btn-primary" download>
          Download Key File
        </a>
      </div>
    </div>
  );
}

export default EncodeStorageItem;
