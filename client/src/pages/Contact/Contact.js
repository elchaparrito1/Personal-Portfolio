import React from "react";
import {PhantomWrapper} from "./styled";
import Footer from "../../components/Footer/Footer";
import MyContacts from "../../components/MyContacts/MyContacts";
import img from "../../images/google.jpg";
import ParallaxComponent from "../../components/ParallaxComponent/ParallaxComponent";


class Contact extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <PhantomWrapper>
                <ParallaxComponent 
                    img={img}
                    heading="Need to reach me?"
                    main="Drop me a line"
                    subHeading="See contact options below" 
                    />
                    <MyContacts/>
                <Footer/>
            </PhantomWrapper>
         )
        }
};

export default Contact;