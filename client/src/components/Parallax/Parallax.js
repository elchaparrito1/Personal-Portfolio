import React from "react";
import Fade from 'react-reveal/Fade';
import {
    Parallax, 
    Header, 
    Text,
    Row,
    Column,
    ParentDiv,
    ChildDiv,
    Line
} from "../Parallax/styled";
import Navbar from "../Navbar/Navbar";
// import backVid from "../../videos/Background.mov"

const ParallaxComponent = () => {
    return (
        <div>
            {/* <video autoPlay loop> 
                <Navbar/>
                <source src={backVid}/>
                </video> */}
                <Parallax>
                    <Navbar/>
                    <ParentDiv primary>
                        <ChildDiv>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Header primary>
                                        <Fade top cascade>Hello. My name is</Fade>
                                    </Header>
                                </Column>
                            </Row>
                            <Row>
                                <Column myname lg="12" md="12" sm="12" xs="12">
                                    <Header>
                                        <Fade top cascade><b>MITCH WAITE</b></Fade>
                                    </Header>
                                <Line/>
                                </Column>
                            </Row>
                            
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Text>
                                        <Fade bottom cascade><b>I live to code.</b></Fade>
                                    </Text>
                                </Column>
                            </Row>
                        </ChildDiv>    
                    </ParentDiv>
                </Parallax>         
            </div>
    )
};

export default ParallaxComponent