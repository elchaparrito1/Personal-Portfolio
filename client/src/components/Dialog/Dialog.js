import React from "react";
import PropTypes from "prop-types";
import "./Dialog.css";

    const Dialog = props => {
      const { username, handleInput, launchChat, handleBox } = props;

      return (
        <div className="dialog-container">
          <div className="dialog">
            <form className="dialog-form" onSubmit={launchChat}>
              <label className="username-label" htmlFor="username">
                What is your name?
                <span onClick={handleBox} className="close">&times;</span>
              </label>
              <input
                id="username"
                className="username-input"
                autoFocus
                type="text"
                name="userId"
                value={username}
                onChange={handleInput}
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    };

    Dialog.propTypes = {
      username: PropTypes.string.isRequired,
      handleInput: PropTypes.func.isRequired,
      launchChat: PropTypes.func.isRequired
    };

    export default Dialog;