import React, { useState } from "react";
import NavBar from "./NavBar";
import Constants from "./Constants";
import EncodeModal from "./EncodeModal";
import DecodeModal from "./DecodeModal";

function HomePage() {
  const [encodeModal, setEncodeModal] = useState(false);
  const [decodeModal, setDecodeModal] = useState(false);

  const toggleEncodeModal = () => {
    setEncodeModal(!encodeModal);
  };

  const toggleDecodeModal = () => {
    setDecodeModal(!decodeModal);
  };

  return (
    <React.Fragment>
      <NavBar />
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        {!encodeModal && !decodeModal && (
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-primary m-2 btn-lg"
              onClick={() => {
                setEncodeModal(true);
              }}
            >
              Encode
            </button>

            <button
              type="button"
              className="btn btn-primary m-2 btn-lg"
              onClick={() => setDecodeModal(true)}
            >
              Decode
            </button>
          </div>
        )}
        {encodeModal && <EncodeModal toggleEncodeModal={toggleEncodeModal} />}

        {decodeModal && <DecodeModal toggleDecodeModal={toggleDecodeModal} />}
      </div>

      <footer className="footer mt-auto py-3 bg-light fixed-bottom">
        <div className="container">
          <span className="text-muted">
            © 2023 Trace - Secure File Transfer
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default HomePage;
