import React, { Component } from "react";
import axios from "axios";
import Chatkit from "@pusher/chatkit-client";
import "./Support.css";

    class Support extends Component {

        state = {
          currentUser: null,
          currentRoom: null,
          newMessage: "",
          messages: [],
          rooms: []
        };

        handleInput = (event) => {
            const { value, name } = event.target;
            this.setState({
              [name]: value
            });
          }
          
        sendMessage = (event) => {
            event.preventDefault();
            const { newMessage, currentUser, currentRoom } = this.state;
        
            if (newMessage.trim() === "") return;
        
            currentUser.sendMessage({
              text: newMessage,
              roomId: `${currentRoom.id}`
            });
        
            this.setState({
              newMessage: ""
            });
          }
          
        connectToRoom = (id) => {
            const { currentUser } = this.state;
            return currentUser
              .subscribeToRoom({
                roomId: `${id}`,
                messageLimit: 100,
                hooks: {
                  onMessage: message => {
                    this.setState({
                      messages: [...this.state.messages, message]
                    });
                  },
                }
              })
              .then(currentRoom => {
                this.setState({
                  currentRoom
                });
              });
          }


      componentDidMount() {
        const userId = "support";

        axios
          .post("http://localhost:3000/users", { userId })
          .then(() => {
            const tokenProvider = new Chatkit.TokenProvider({
              url: "http://localhost:3000/authenticate"
            });

            const chatManager = new Chatkit.ChatManager({
              instanceLocator: "v1:us1:f1cbf8e9-3cc8-4abe-8013-6f535f84c39f",
              userId,
              tokenProvider
            });

            return chatManager
              .connect({
                onAddedToRoom: room => {
                  this.setState({
                    rooms: [...this.state.rooms, room]
                  });
                }
              })
              .then(currentUser => {
                this.setState(
                  {
                    currentUser,
                    rooms: currentUser.rooms
                  },
                  () => {
                    if (this.state.rooms.length >= 1) {
                      this.connectToRoom(this.state.rooms[0].id);
                    }
                  }
                );
              });
          })
          .catch(console.error);
      }

      joinRoom = id => {
        this.setState(
          {
            messages: []
          },
          () => this.connectToRoom(id)
        );
      };

      render() {
        const {
          newMessage,
          rooms,
          currentRoom,
          messages,
          currentUser
        } = this.state;

        const RoomList = rooms.map(room => {
          const isActive =
            currentRoom && currentRoom.id === room.id ? "active" : "";
          return (
            <li
              key={room.id}
              onClick={() => this.joinRoom(room.id)}
              className={`${isActive} room`}
            >
              {room.name}
            </li>
          );
        });

        const ChatSession = messages.map((message, index) => {
          const user = message.senderId === currentUser.id ? "support" : "user";
          return (
            <span key={index} className={`${user} message`}>
              {message.text}
            </span>
          );
        });

        return (
          <div className="support-area">
            <aside className="support-sidebar">
              <h3>Rooms</h3>
              <ul>{RoomList}</ul>
            </aside>
            <section className="support-session">
              <header className="current-chat">
                <h3>{currentRoom ? currentRoom.name : "Chat"}</h3>
              </header>
              <div className="chat-session">{ChatSession}</div>
              <form onSubmit={this.sendMessage} className="message-form">
                <input
                  className="message-input"
                  autoFocus
                  placeholder="Compose your message and hit ENTER to send"
                  onChange={this.handleInput}
                  value={newMessage}
                  name="newMessage"
                />
              </form>
            </section>
          </div>
        );
      }
    }

    export default Support;