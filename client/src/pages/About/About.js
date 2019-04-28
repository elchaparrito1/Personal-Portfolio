import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { PhantomWrapper } from "./styled";


class About extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <PhantomWrapper>
                <Navbar/>
                    <div>
                        <h1>About</h1>
                    </div>
                <Footer/>
            </PhantomWrapper>
         )
        }

};

export default About;