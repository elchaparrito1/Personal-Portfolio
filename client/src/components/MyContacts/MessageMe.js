import React from "react";
// import history from "../../history";
// import React, { Component } from "react";
import axios from "axios";
import Chatkit from "@pusher/chatkit-client";
import Spinner from "react-spinkit";
import Dialog from "../../components/Dialog/Dialog";
import ChatWidget from "../../components/ChatWidget/ChatWidget";
import {
    Row,
    Column,
    Box,
    Head,
    Text
} from "./styled";

class MessageMe extends React.Component {

    state = {
        currentUser: null,
        currentRoom: null,
        newMessage: "",
        messages: [],
        isLoading: false,
        userId: "",
        isDialogOpen: false,
      };
  
      handleBox = () => {
        console.log("This is working");
        this.setState({
            currentUser: null,
            currentRoom: null,
            newMessage: "",
            messages: [],
            isLoading: false,
            userId: "",
            isDialogOpen: false,
        })
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
  
      showDialog = () => {
        this.setState({
          isDialogOpen: !this.state.isDialogOpen
        });
      };
  
      addSupportStaffToRoom = () => {
        const { currentRoom, currentUser } = this.state;
        return currentUser.addUserToRoom({
          userId: "support",
          roomId: currentRoom.id
        });
      };
  
      createRoom = () => {
        const { currentUser } = this.state;
      
        currentUser
          .createRoom({
            name: currentUser.name,
            private: true
          })
          .then(room => this.connectToRoom(room.id))
          .then(() => this.addSupportStaffToRoom())
          .catch(console.error);
      };
  
      launchChat = event => {
        event.preventDefault();
        this.setState({
          isDialogOpen: false,
          isLoading: true
        });
  
          const { userId } = this.state;
  
          if (userId === null || userId.trim() === "") {
            alert("Invalid userId");
          } else {
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
  
                return chatManager.connect().then(currentUser => {
                  this.setState(
                    {
                      currentUser,
                      isLoading: false
                    },
                    () => this.createRoom()
                  );
                });
              })
              .catch(console.error);
          }
        };
  
        render() {
          const {
            newMessage,
            messages,
            currentUser,
            currentRoom,
            isDialogOpen,
            userId,
            isLoading
          } = this.state;
  
          return (
            <div>
                <div>
                <Column lg="4" md="4" sm="12" xs="12">
                         <Box onClick={this.showDialog}>
                             <Row>
                                 <Column lg="12" md="12" sm="12" xs="12">
                                     <Head>MESSAGE</Head>
                                 </Column>
                             </Row>
                             <br />
                             <Row>
                                 <Column lg="12" md="12" sm="12" xs="12">
                                     <Text>
                                         We can also live chat online. Drop me a line here. Again, if the below text is red, 
                                         I'm not available, but you can leave me a message and I'll respond as soon as possible.
                                     </Text>
                                 </Column>
                             </Row>
                         </Box>
                     </Column> 
             </div>
              {currentRoom ? (
                <ChatWidget
                  handleBox={this.handleBox}
                  newMessage={newMessage}
                  sendMessage={this.sendMessage}
                  handleInput={this.handleInput}
                  currentUser={currentUser}
                  messages={messages}
                />
              ) : 
                null
              }
  
              {isLoading ? <Spinner name="three-bounce" color="#300d4f" /> : null}
  
              {isDialogOpen ? (
                <Dialog
                  username={userId}
                  handleInput={this.handleInput}
                  launchChat={this.launchChat}
                />
              ) : null}
            </div>
          );
        }
};

export default MessageMe;
