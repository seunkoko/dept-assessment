// eslint-disable-next-line
import React from 'react';

import './MessageSection.scss';


const MessageSection = ({
  email,
  name,
  message,
  emailError,
  nameError,
  messageError,
  successMessage,
  handleOnChange,
  handleAlertClose,
  handleSubmitMessage
}) => {
	return (
    <>
      <div className="container-fluid message-section-style">
        {
          successMessage && <div className="alert alert-success message-alert-success" role="alert">
            {successMessage}
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={handleAlertClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        }

        <div>
          <div className="question-style">
            <p>QUESTION?</p>
            <p>WE ARE HERE</p>
            <p>TO HELP!</p>
          </div>

          <form
            onSubmit={handleSubmitMessage}
          >
            <div className="form-style">
              <div>
                <div className="form-group input-container">
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control form-control-sm input-style"
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleOnChange}
                    aria-describedby="nameHelp"
                  />
                  <small id="nameHelp" className="form-text red-text">
                    {nameError}
                  </small>
                </div>

                <div className="form-group input-container">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control form-control-sm email input-style"
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" className="form-text red-text">
                    {emailError}
                  </small>
                </div>

                <div className="form-group input-container">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control form-control-sm input-style"
                    id="message"
                    type="text"
                    name="message"
                    value={message}
                    onChange={handleOnChange}
                    aria-describedby="messageHelp"
                  />
                  <small id="messageHelp" className="form-text red-text">
                    {messageError}
                  </small>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-send-message"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
	);
};

export default MessageSection;
