import React, { useState, useEffect } from "react";
import "./Modal.css";

function DecodeModal(props) {
  return (
    <React.Fragment>
      <div className="modal-background">
        <div className="modal-container">
          <h4>Decode</h4>
          <form>
            <div className="mb-4">
              <label htmlFor="encoded-file" className="form-label">
                Encoded File
              </label>
              <input className="form-control" type="file" id="encoded-file" />
            </div>

            <div className="mb-4">
              <label htmlFor="key-file" className="form-label">
                Key File
              </label>
              <input className="form-control" type="file" id="key-file" />
            </div>

            <div className="input-group mb-4">
              <span className="input-group-text">Encrypted Password</span>
              <textarea
                className="form-control"
                aria-label="Encrypted Password"
              ></textarea>
            </div>

            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="image"
                  checked
                />
                <label className="form-check-label" htmlFor="image">
                  Image
                </label>
              </div>

              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="audio"
                />
                <label className="form-check-label" htmlFor="audio">
                  Audio
                </label>
              </div>

              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="video"
                />
                <label className="form-check-label" htmlFor="video">
                  Video
                </label>
              </div>
            </div>

            <button
              className="btn btn-secondary me-4"
              onClick={() => props.toggleDecodeModal(false)}
            >
              Cancel
            </button>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DecodeModal;
