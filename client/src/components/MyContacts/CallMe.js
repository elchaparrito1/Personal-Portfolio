import React from "react";
import {
    Row,
    Column,
    Box,
    Head,
    Text,
    A
} from "./styled";

const CallMe = () => {
    return (
        <Column lg="4" md="4" sm="12" xs="12">
            <Box>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Head>CALL</Head>
                    </Column>
                </Row>
                <br />
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Text>
                            Give me a call: <A href="tel:+1-801-809-0830"> 801-809-0830</A>. Note that 
                            if the time and date below are red, I'm not available. You can leave me a 
                            message and I'll respond as soon as possible.
                        </Text>
                    </Column>
                </Row>
            </Box>
        </Column>
    )
};

export default CallMe;