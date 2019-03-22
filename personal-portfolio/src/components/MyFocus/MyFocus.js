import React from "react";
import { 
    Container, 
    Row, 
    Column, 
    Text, 
    ChildDiv,
    Icon,
    Line
} from "./styled";
import img from "../../images/chevron.png";

const Body = () => {
    return (
    <div>
        <Container>
            <ChildDiv>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text header><b>My Focus</b></Text>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Icon src={img} alt="icon separator"/>
                    </Column>
                </Row>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text body>I'm an aspiring front-end developer. I have a passion for problem solving, good front-end design, and organized back-end architecture. Take a quick look below at some of the core technologies I use.</Text>
                    </Column>
                </Row>
            </ChildDiv>
        </Container>
        <Line/>
    </div>
    )
}

export default Body;