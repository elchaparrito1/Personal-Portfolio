import React from "react";
import PropTypes from "prop-types";
import "./ChatWidget.css";

    const ChatWidget = props => {
      const { newMessage, sendMessage, handleInput, currentUser, messages, handleBox } = props;

      const ChatSession = messages.map((message, index) => {
        const user = message.senderId === currentUser.id ? "user" : "support";
        return <span key={index} className={`${user} message`}>{message.text}</span>;
      });

      return (
        <section className="chat">
          <div className="chat-widget">
            <header className="chat-header">
              <h2>Got Questions? Chat with us</h2>
              <span onClick={handleBox} className="close">&times;</span>
            </header>
            <section className="chat-body">{ChatSession}</section>

            <form onSubmit={sendMessage} className="message-form">
              <input
                className="message-input"
                autoFocus
                name="newMessage"
                placeholder="Compose your message and hit ENTER to send"
                onChange={handleInput}
                value={newMessage}
              />
            </form>
          </div>
        </section>
      );
    };

    ChatWidget.propTypes = {
      newMessage: PropTypes.string.isRequired,
      handleInput: PropTypes.func.isRequired,
      sendMessage: PropTypes.func.isRequired,
      messages: PropTypes.arrayOf(PropTypes.object).isRequired,
      currentUser: PropTypes.object.isRequired,
      handleBox: PropTypes.func.isRequired
    };

    export default ChatWidget;