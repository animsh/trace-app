import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Encode = () => {
  const [coverFile, setCoverFile] = useState(null);
  const [fileToEncode, setFileToEncode] = useState(null);
  const [publicKeyOfReceiver, setPublicKeyOfReceiver] = useState("");
  const [coverFileType, setCoverFileType] = useState("");
  const [steganographyMethod, setSteganographyMethod] = useState("");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [postData, setPostData] = useState({
    cover_file: "",
    hidden_file: "",
    public_key_of_receiver: "",
    cover_file_type: "",
    operation_method: "",
    user_id: "",
  });

  const saveData = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    let formData = new FormData();
    formData.append(
      "cover_file",
      document.getElementById("cover-file").files[0]
    );
    formData.append(
      "hidden_file",
      document.getElementById("file-to-encode").files[0]
    );
    formData.append("public_key_of_receiver", publicKeyOfReceiver);
    formData.append("cover_file_type", coverFileType.toUpperCase()[0]);
    formData.append("operation_method", steganographyMethod.toLowerCase());
    formData.append("user_id", localStorage.getItem("access_id"));

    console.log(formData.get("public_key_of_receiver"));

    if (
      !coverFile ||
      !fileToEncode ||
      !publicKeyOfReceiver ||
      !coverFileType ||
      !steganographyMethod
    ) {
      setIsLoading(false);
      setMessage("Please fill in all fields");
      setIsError(true);
      setIsSuccess(false);
      return;
    }

    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/users/encode",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Token: localStorage.getItem("access_token"),
          },
        }
      );
      console.log(response.data);
      if (response.data.status === "success") {
        console.log("Encoding Successfull " + response.data.message);
        setIsLoading(false);
        setMessage("Encoded Successfully");
        setIsError(false);
        setIsSuccess(true);
      } else {
        console.log("Encoding Failed " + response.data.message);
        setIsLoading(false);
        setMessage(response.data.message);
        setIsError(true);
        setIsSuccess(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setMessage("Something went wrong");
      setIsError(true);
      setIsSuccess(false);
    }
  };

  return (
    <div className="container">
      {!localStorage.getItem("isAuthenticated") && <Navigate to="/auth" />}
      <div className="scale-to-height row" style={{ padding: "24px" }}>
        {isError && (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )}
        {isSuccess && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        )}
        <div className="col-md-4 col-lg-4">
          <h5>Infomation about various algorithm used.</h5>
        </div>
        <div className="col-md-8 col-lg-8">
          <form style={{ minWidth: "400px" }} onSubmit={saveData}>
            <h5 style={{ fontWeight: 600 }}>Let's Encode:</h5>

            <div className="mb-3">
              <label htmlFor="cover-file" className="form-label custom-label">
                Cover File:
              </label>
              <input
                type="file"
                className="form-control"
                id="cover-file"
                onChange={(event) => setCoverFile(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="file-to-encode"
                className="form-label custom-label"
              >
                File to encode:
              </label>
              <input
                type="file"
                className="form-control"
                id="file-to-encode"
                onChange={(event) => setFileToEncode(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="public-key-of-receiver"
                className="form-label custom-label"
              >
                Receiver's ID:
              </label>
              <input
                type="text"
                className="form-control"
                id="public-key-of-receiver"
                onChange={(event) => setPublicKeyOfReceiver(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <Form.Group>
                <Form.Label className="form-label custom-label">
                  Cover File Type:
                </Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Image"
                    name="radioGroup"
                    id="image"
                    onChange={() => setCoverFileType("Image")}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Audio"
                    name="radioGroup"
                    id="audio"
                    onChange={() => setCoverFileType("Audio")}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Video"
                    name="radioGroup"
                    id="video"
                    onChange={() => setCoverFileType("Video")}
                  />
                </div>
              </Form.Group>
            </div>

            <div className="mb-3">
              <Form.Group>
                <Form.Label className="form-label custom-label">
                  Steganography Method:
                </Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Simple"
                    name="radioGroup2"
                    id="simple"
                    onChange={() => setSteganographyMethod("Simple")}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Shuffle"
                    name="radioGroup2"
                    id="shuffle"
                    onChange={() => setSteganographyMethod("Shuffle")}
                  />
                </div>
              </Form.Group>
            </div>

            <div className="mb-3">
              <label htmlFor="user-id" className="form-label custom-label">
                Your User ID:
              </label>
              <input
                type="text"
                value={localStorage.getItem("access_id")}
                className="form-control"
                id="user-id"
                disabled
              />
            </div>
            <div class="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Encode"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Encode;
