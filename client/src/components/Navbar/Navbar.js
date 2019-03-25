import React from "react";
import {
    Row, 
    List, 
    Pages, 
    SideLinks, 
    Links, 
    Column, 
    Hamburger, 
    HamburgerPages
} from "../Navbar/styled";

import "./Hamburger.css";


class Navbar extends React.Component {
    state = {
        isDesktop: false,
        nav: false
    }

    componentDidMount = () => {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
      }
    
      componentWillUnmount = () => {
        window.removeEventListener("resize", this.updatePredicate);
      }
    
      updatePredicate = () => {
        this.setState({ isDesktop: window.innerWidth > 1024 });
      }

    nav = (event) => {
        event.preventDefault();
        console.log("Function ran");
        if(this.state.nav) {
            this.setState({
                nav: false
            });
          } else if (!this.state.nav) {
            this.setState({
                nav: true
            });
          }
    }
          

  render() {
      const isDesktop = this.state.isDesktop;
      const hamStyle = this.state.nav ? {width: "250px"} : {width: "0"};
      return (
            <div>
                {!isDesktop ? (
                    <div>
                        <div id="mySidenav" style={hamStyle} className="sidenav">
                            <span className="closebtn" onClick={this.nav}>&times;</span>
                                <SideLinks ham-link contact to="/contact">Contact</SideLinks>
                                <SideLinks ham-link to="/resume">Resume</SideLinks>
                                <SideLinks ham-link to="/projects">Projects</SideLinks>
                                <SideLinks ham-link to="/about">About</SideLinks>
                            </div>
                        <Row>
                            <Column lg="12" md="12" sm="12" xs="12">
                                <table style={{float: "left"}}>
                                    <tbody>
                                        <List>
                                            <HamburgerPages>
                                                <Hamburger onClick={this.nav}>&#9776;</Hamburger>
                                            </HamburgerPages>
                                        </List>
                                    </tbody>
                                </table>
                            </Column>
                        </Row>
                    </div>
                    ) 
                    : 
                    (<Row>
                        <Column lg="12" md="12" sm="12" xs="12">
                            <table style={{float: "right"}}>
                                <tbody>
                                    <List>
                                      <Pages contact>
                                            <Links link to="/contact">Contact</Links>
                                        </Pages>
                                      <Pages resume>
                                            <Links link to="/resume">Resume</Links>
                                        </Pages>
                                      <Pages projects>
                                            <Links link to="/projects">Projects</Links>
                                        </Pages>
                                      <Pages about>
                                            <Links link to="/about">About</Links>
                                        </Pages>
                                    </List>
                            </tbody>
                        </table>
                    </Column>
                </Row>)}
            </div>
        )
    }
}

export default Navbar;