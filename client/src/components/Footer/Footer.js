import React from "react";
import { 
    Foot, 
    Text, 
    Row, 
    Column, 
    Links, 
    Icon
} from "./styled";
import EmailModal from "../Modals/EmailModal";
import imgLinked from "../../images/linkedin.png";
import imgGmail from "../../images/gmail.png";
import imgFacebook from "../../images/facebook.png";
import imgGithub from "../../images/github.png";

class Footer extends React.Component {

    state = {
        isOpen: false
    };

    handleModal = () => {
        if(!this.state.isOpen) {
            this.setState({
                isOpen: true
            });
       } else if (this.state.isOpen) {
           this.setState({
               isOpen: false
           })
       }
    };


    render() {
        console.log(this.state.isOpen);
        return (
            <Foot>
                <EmailModal 
                    handleModal={this.handleModal} 
                    isOpen={this.state.isOpen}
                />
                    <Row connect>
                        <Column lg="12" md="12" sm="12" xs="12">
                                <Text>Connect with me</Text>
                        </Column>
                    </Row>
                    <Row>
                        <table style={{margin: "0 auto", width: "25%"}}>
                            <tbody>
                                <tr>
                                    <th><Icon onClick={this.handleModal} connect src={imgGmail} alt="icon separator"/></th>
                                    <th><a href="https://www.linkedin.com/in/mitchell-waite-18b445a3/"><Icon src={imgLinked} alt="icon separator"/></a></th>
                                    <th><a href="https://github.com/elchaparrito1"><Icon src={imgGithub} alt="icon separator"/></a></th>
                                    <th><a href="https://www.facebook.com/mitchell.t.waite"><Icon src={imgFacebook} alt="icon separator"/></a></th>
                                </tr>
                            </tbody>
                        </table>
                    </Row>
                    <Row>
                        <table style={{margin: "0 auto", width: "35%"}}>
                            <tbody>
                                <tr>
                                    <th><Links link to="/about">About</Links></th>
                                    <th><Links to="/projects">Projects</Links></th>
                                    <th><Links to="/resume">Resume</Links></th>
                                    <th><Links to="/contact">Contact</Links></th>
                                </tr>
                            </tbody>
                        </table>
                    </Row>
                    <Row copyright>
                        <Column copyright lg="12" md="12" sm="12" xs="12">
                            <Text copyright> © 2019 Mitchell Waite. All rights reserved.</Text>
                        </Column>
                    </Row>
            </Foot>
        )
    };
};

export default Footer;