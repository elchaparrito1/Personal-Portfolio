import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { PhantomWrapper } from "./styled";
import MyResume from "../../components/MyResume/MyResume";


class Resume extends React.Component {


    render() {
    return (
        <PhantomWrapper>
            <Navbar/>
                <MyResume className="white mt5 tc f3" id={"multiPage"}/>
            <Footer/>
        </PhantomWrapper>
     )
    }
};

export default Resume;