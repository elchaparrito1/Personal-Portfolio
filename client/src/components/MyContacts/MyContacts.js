import React from "react";
import EmailMe from "../MyContacts/EmailMe";
import CallMe from "../MyContacts/CallMe";
import MessageMe from "../MyContacts/MessageMe";
import Bounce from "react-reveal/Bounce";
import {
    Row,
    Column,
    Timer,
    TimerText
} from "./styled";
var moment = require("moment-timezone");



class MyContacts extends React.Component {
    state = {
        time: moment().tz("America/Denver").format("h:mm:ss a"),
        day: new Date().getDay(),
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ 
            time: moment().tz("America/Denver").format("h:mm:ss a"),
            day: new Date().getDay()
        }), 1000);
    }

    componentWillUnmount() { 
       clearInterval(this.interval);
    }

    handleDay = (num) => {
       let day;
       switch (num) {
        case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
        break;
      default: 
        day = "I don't know what day it is!";
       }
       return day;
    }

    checkTime = () => {
        let time = new Date();
        let hours = time.getHours();
        if (this.state.day === 1 || hours < 8 || hours > 20) {
            return (
                <div>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <TimerText style={{color: "red"}}>
                                Current time: {this.state.time}
                            </TimerText>
                        </Column>
                    </Row>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <TimerText style={{color: "red"}}>
                                Day: {this.handleDay(this.state.day)}
                            </TimerText>
                        </Column>
                    </Row>
                </div>
            )
        } else {
            return (
                <div>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <TimerText>
                                Current time: {this.state.time}
                            </TimerText>
                        </Column>
                    </Row>
                    <Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <TimerText>
                                Day: {this.handleDay(this.state.day)}
                            </TimerText>
                        </Column>
                    </Row>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <br/>
                <Bounce bottom>
                    <Row style={{width: "80%", margin: "0 auto"}}>
                        <EmailMe />
                        <CallMe />
                        <MessageMe />
                    </Row>
                </Bounce>
                <br/>
                <Row>
                    <Column lg="12" md="12" sm="12" xs="12">
                        <Timer>
                            {this.checkTime()}
                        </Timer>
                    </Column> 
                </Row>
                <br/>
            </div>
        )
    }
};

export default MyContacts;