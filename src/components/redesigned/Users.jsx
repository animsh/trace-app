import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isFound, setIsFound] = useState(null);
  const [isError, setIsError] = useState(null);

  const [tel, setTel] = useState("");
  const [postData, setPostData] = useState({
    tel: "",
  });

  const handleCopyClick = (inputValue) => {
    navigator.clipboard.writeText(inputValue);
  };

  const fetchUsers = async () => {
    setIsLoading(true);
    postData.tel = tel;

    let axiosConfig = {
      headers: {
        // 'Content-Type': 'application/json;charset=UTF-8',
        // "Access-Control-Allow-Origin": "*",
        Token: localStorage.getItem("access_token"),
      },
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users",
        postData,
        axiosConfig
      );
      if (response.data) {
        let data = response.data;
        console.log(data);
        if (data.status === "success") {
          setUsers(data.data);
          setIsLoading(false);
          setIsFound(true);
          setIsError(false);
          setMessage("User Found");
        } else {
          console.log("Not Found");
          setUsers({});
          setIsLoading(false);
          setIsFound(false);
          setIsError(true);
          setMessage("User Not Found");
        }
      } else {
        console.log("Not Found");
        setUsers({});
        setIsLoading(false);
        setIsFound(false);
        setIsError(true);
        setMessage("User Not Found");
      }
    } catch (error) {
      setUsers({});
      setIsLoading(false);
      setIsFound(false);
      setIsError(true);
      setMessage("User Not Found");
    }
  };

  return (
    <div className="scale-to-height container">
      {!localStorage.getItem("isAuthenticated") && <Navigate to="/auth" />}
      <div className="row">
        <div className="col-md-10 col-lg-10 mt-4">
          <input
            className="form-control"
            type="tel"
            name="tel"
            id="tel"
            value={tel}
            placeholder="Enter Phone Number"
            onChange={(event) => setTel(event.target.value)}
          />
        </div>
        <div className="col-md-1 col-lg-1"></div>
        <div className="col-md-1 col-lg-1 mt-4">
          <button
            className="btn btn-primary"
            disabled={isLoading}
            onClick={fetchUsers}
          >
            {isLoading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Search"
            )}
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-lg-12 mt-4">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Id</th>
                <th scope="col">Public Key</th>
                <th scope="col">-</th>
                <th scope="col">-</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(users).length != 0 && (
                <tr key={users.id}>
                  <td>{users.user_name}</td>
                  <td>{users.user_id}</td>
                  <td>{users.public_key}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => handleCopyClick(users.public_key)}
                    >
                      Copy Key
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => handleCopyClick(users.user_id)}
                    >
                      Copy ID
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {isFound && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      {isError && (
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      )}
    </div>
  );
};

export default Users;
