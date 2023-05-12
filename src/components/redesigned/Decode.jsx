import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Decode = () => {
  const [encodedFile, setEncodedFile] = useState("");
  const [keyFile, setKeyFile] = useState("");
  const [encryptedPassword, setEncryptedPassword] = useState("");
  const [encodedFileType, setEncodedFileType] = useState("");
  const [steganographyMethod, setSteganographyMethod] = useState("");
  const [senderId, setSenderId] = useState("");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [postData, setPostData] = useState({
    encoded_file: "",
    key_file: "",
    encrypted_password: "",
    encoded_file_type: "",
    user_id: "",
    private_key: "",
  });

  const saveData = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append(
      "encoded_file",
      document.getElementById("encoded-file").files[0]
    );
    formData.append("key_file", document.getElementById("key-file").files[0]);
    formData.append("encrypted_password", encryptedPassword);
    formData.append("encoded_file_type", encodedFileType.toUpperCase()[0]);
    formData.append("user_id", localStorage.getItem("access_id"));
    formData.append("private_key", localStorage.getItem("access_key"));

    console.log("Form Data: ", formData);

    if (
      !encodedFile ||
      !keyFile ||
      !encryptedPassword ||
      !encodedFileType ||
      !senderId
    ) {
      setIsLoading(false);
      setMessage("Please fill in all fields");
      setIsError(true);
      setIsSuccess(false);
      return;
    }

    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/users/decode",
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
        console.log("Decoded Successfull " + response.data.message);
        setIsLoading(false);
        setMessage("Decoded Successfully");
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
            <h5 style={{ fontWeight: 600 }}>Let's Decode:</h5>

            <div className="mb-3">
              <label htmlFor="encoded-file" className="form-label custom-label">
                Encoded File:
              </label>
              <input
                type="file"
                className="form-control"
                id="encoded-file"
                onChange={(event) => setEncodedFile(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="key-file" className="form-label custom-label">
                Key File:
              </label>
              <input
                type="file"
                className="form-control"
                id="key-file"
                onChange={(event) => setKeyFile(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="encrypted-password"
                className="form-label custom-label"
              >
                Encrypted Password:
              </label>
              <input
                type="text"
                className="form-control"
                id="encrypted-password"
                onChange={(event) => setEncryptedPassword(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <Form.Group>
                <Form.Label className="form-label custom-label">
                  Encoded File Type:
                </Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Image"
                    name="radioGroup"
                    id="image"
                    onChange={() => setEncodedFileType("Image")}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Audio"
                    name="radioGroup"
                    id="audio"
                    onChange={() => setEncodedFileType("Audio")}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Video"
                    name="radioGroup"
                    id="video"
                    onChange={() => setEncodedFileType("Video")}
                  />
                </div>
              </Form.Group>
            </div>

            {/* <div className="mb-3">
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
            </div> */}

            <div className="mb-3">
              <label htmlFor="user-id" className="form-label custom-label">
                Your User ID:
              </label>
              <input
                type="text"
                value={senderId}
                className="form-control"
                id="user-id"
                onChange={(event) => setSenderId(event.target.value)}
              />
            </div>

            <div class="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Decode
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Decode;
