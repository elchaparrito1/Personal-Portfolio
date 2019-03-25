import React, {Component} from "react";
import Parallax from "../../components/Parallax/Parallax";
import MyFocus from "../../components/MyFocus/MyFocus";
import MySkills from "../../components/MySkills/MySkills";
import Footer from "../../components/Footer/Footer";
import { PhantomWrapper } from "./styled";


class Home extends Component {
    render() {
        return (
            <PhantomWrapper>
                <Parallax/>
                    <MyFocus/>
                    <MySkills/>
                <Footer/>
            </PhantomWrapper>
        )
    }
}

export default Home;