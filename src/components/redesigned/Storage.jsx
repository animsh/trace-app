import React, { Component, useEffect, useState } from "react";
import EncodedFile from "./EncodedFile";
import DecodedFile from "./DecodedFile";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Constants from "./Constants";

const Storage = () => {
  const [encodedFiles, setEncodedFiles] = useState([]);
  const [decodedFiles, setDecodedFiles] = useState([]);

  const [isEncoded, setIsEncoded] = useState(true);
  const [encodedMessage, setEncodedMessage] = useState("");

  const [isDecoded, setIsDecoded] = useState(true);
  const [decodedMessage, setDecodedMessage] = useState("");

  useEffect(() => {
    const fetchEncoded = async () => {
      setEncodedMessage("Loading Encoded Files...");
      setIsEncoded(true);
      try {
        let response = await axios.get(
          Constants.API_URL + ":8000/api/users/encodedfiles",
          {
            headers: {
              Token: localStorage.getItem("access_token"),
            },
          }
        );
        console.log(response.data);
        let data = response.data;
        if (data.status === "success") {
          let storageFiles = data.data;
          console.log(Array.isArray(storageFiles));
          setEncodedFiles(storageFiles);
          if (storageFiles.length === 0) {
            setEncodedMessage("No Encoded Files Found");
          } else {
            setIsEncoded(false);
          }
        } else {
          setEncodedMessage(data.message);
        }
      } catch (error) {
        console.log(error);
        setEncodedMessage("Error Loading Encoded Files");
      }
    };

    const fetchDecoded = async () => {
      setDecodedMessage("Loading Decoded Files...");
      setIsDecoded(true);
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/users/decodedfiles",
          {
            headers: {
              Token: localStorage.getItem("access_token"),
            },
          }
        );
        console.log(response.data);
        let data = response.data;
        if (data.status === "success") {
          let storageFiles = data.data;
          console.log(Array.isArray(storageFiles));
          setDecodedFiles(storageFiles);
          if (storageFiles.length === 0) {
            setDecodedMessage("No Decoded Files Found");
          } else {
            setIsDecoded(false);
          }
        } else {
          setDecodedMessage(data.message);
        }
      } catch (error) {
        console.log(error);
        setDecodedMessage("Error Loading Decoded Files");
      }
    };

    fetchEncoded();
    fetchDecoded();
  }, []);

  return (
    <div className="container">
      {!localStorage.getItem("isAuthenticated") && <Navigate to="/auth" />}

      <div className="scale-to-height row " style={{ padding: "24px" }}>
        <div className="col-md-8 col-lg-8  pt-3 pb-3 pe-4">
          <h5>Encoded Files</h5>
          {isEncoded && (
            <div className="alert alert-primary" role="alert">
              {encodedMessage}
            </div>
          )}
          {encodedFiles.map((file) => (
            <EncodedFile key={file.id} file={file} />
          ))}
        </div>

        <div className="col-md-4 col-lg-4  pt-3 pb-3 ps-4">
          <h5>Decoded Files</h5>
          {isDecoded && (
            <div className="alert alert-primary" role="alert">
              {decodedMessage}
            </div>
          )}
          {decodedFiles.map((file) => (
            <DecodedFile key={file.id} file={file} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Storage;
