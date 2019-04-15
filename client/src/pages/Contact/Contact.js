import React from "react";
import {
    PhantomWrapper
} from "./styled";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class Contact extends React.Component {

    render() {
        return (
            <PhantomWrapper>
                <Navbar/>
                <Footer/>
            </PhantomWrapper>
         )
        }
};

export default Contact;