import React from "react";
import ReactDOM from "react-dom"
import {
    Row, 
    Column, 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalFooter, 
    ModalBody, 
    Close, 
    Button,
    TextArea,
    Label,
    Input
} from "./styled";


class EmailModal extends React.Component {
 

    render() {
        const { isOpen } = this.props;

        if(!isOpen) {
            return null;
        }
        return ReactDOM.createPortal (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <Close onClick={this.props.handleModal} className="close">&times;</Close>
                </ModalHeader>
                <ModalBody>
                    <form action="/action_page.php">
                      <Label for="email">Email</Label>
                      <Input type="text" placeholder="Your email.."/>
                        <Label for="fname">Name</Label>
                        <Input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                      <Label for="message">Message</Label>
                      <TextArea name="Message" placeholder="Write something.."></TextArea>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <Button>Send</Button>
                        </Column>
                    </Row>
                </ModalFooter>
            </ModalContent>
        </Modal>,
        document.querySelector("#modal")
    )
  };
};

export default EmailModal;