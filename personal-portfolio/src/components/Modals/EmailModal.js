import React from "react";
import ReactDOM from "react-dom"
import {Modal, Text, Button} from "./styled"

class EmailModal extends React.Component {
    
    render() {
    const { isOpen, ...rest} = this.props;
    return ReactDOM.createPortal (
        <div {...rest}><h1>{this.props.children}</h1></div>,
            document.querySelector("#modal")
    )
  };
};

export default EmailModal;