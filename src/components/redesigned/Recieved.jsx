import React, { useEffect, useState } from "react";
import ReceivedFile from "./RecievedFile";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Received = () => {
  const [receivedFiles, setReceivedFiles] = useState([]);
  const [isReceived, setIsReceived] = useState(false);
  const [receivedMessage, setReceivedMessage] = useState("");

  useEffect(() => {
    const fetchReceived = async () => {
      setReceivedMessage("Loading Received Files...");
      setIsReceived(true);
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/users/send", {
          headers: {
            Token: localStorage.getItem("access_token"),
          },
        });
        console.log(response.data);
        let data = response.data;
        if (data.status === "success") {
          let storageFiles = data.data;
          const accessFiles = [];
          storageFiles.forEach((file) => {
            if (file.touser.id == localStorage.getItem("access_id")) {
              accessFiles.push(file);
            }
          });
          console.log(Array.isArray(accessFiles));
          console.log(accessFiles);
          setReceivedFiles(accessFiles);
          if (accessFiles.length === 0) {
            setReceivedMessage("No Received Files Found");
          } else {
            setIsReceived(false);
          }
        } else {
          setReceivedMessage(data.message);
        }
      } catch (error) {
        console.log(error);
        setReceivedMessage("Error Loading Encoded Files");
      }
    };

    fetchReceived();
  }, []);

  return (
    <div className="container">
      {!localStorage.getItem("isAuthenticated") && <Navigate to="/auth" />}

      <div className="scale-to-height row " style={{ padding: "24px" }}>
        <div className="col-md-12 col-lg-12 pt-3 pb-3">
          <h5>Recieved Files</h5>
          {isReceived && (
            <div className="alert alert-primary" role="alert">
              {receivedMessage}
            </div>
          )}
          {receivedFiles.map((file) => (
            <ReceivedFile key={file.id} file={file} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Received;
