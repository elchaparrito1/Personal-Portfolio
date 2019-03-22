import React from "react";
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

const ParallaxComponent = () => {
    return (
        <div>
            <Parallax>
                <Navbar/>
                    <ParentDiv primary>
                        <ChildDiv>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Header primary>Hello. My name is</Header>
                                </Column>
                            </Row>
                            <Row>
                                <Column name lg="12" md="12" sm="12" xs="12">
                                    <Header name>
                                        <b>MITCH WAITE</b>
                                    </Header>
                                <Line/>
                                </Column>
                            </Row>
                            <Row>
                                <Column lg="12" md="12" sm="12" xs="12">
                                    <Text><b>I live to code.</b></Text>
                                </Column>
                            </Row>
                        </ChildDiv>    
                    </ParentDiv>    
                </Parallax>     
            </div>
    )
};

export default ParallaxComponent