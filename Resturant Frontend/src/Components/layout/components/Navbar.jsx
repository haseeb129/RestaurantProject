import React, { Component } from "react";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Col, Row } from "react-bootstrap/";
import logo from "../../../images/logo.png";
import auth from "../../Auth/authService";
export default class SampleNavbar extends Component {
  state = { user: auth.getCurrentUser() };
  handleLogout = () => {
    auth.logout();
    window.location = "/";
  };

  render() {
    return (
      <Container fluid>
        <Row style={{ backgroundColor: "#2ec4b6" }}>
          <Col>
            <Navbar
              className="pb-2 color-nav pr-4 pl-4 "
              collapseOnSelect
              expand="lg"
            >
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  width="60"
                  className="d-inline-block align-top p-0 m-0"
                  alt="Le Restaurant"
                />
                <span className="brandSize">Le Restaurant</span>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <LinkContainer className="navBarMenu" to="/">
                    <NavLink>Home</NavLink>
                  </LinkContainer>

                  <LinkContainer className="navBarMenu" to="/Menu">
                    <NavLink>Menu</NavLink>
                  </LinkContainer>

                  <LinkContainer className="navBarMenu" to="/CurrentOrder">
                    <NavLink>Current Order</NavLink>
                  </LinkContainer>

                  <LinkContainer className="navBarMenu" to="/TableBooking">
                    <NavLink>Book Table</NavLink>
                  </LinkContainer>

                  <LinkContainer className="navBarMenu" to="/ContactUs">
                    <NavLink>Contact Us</NavLink>
                  </LinkContainer>

                  {!this.state.user && (
                    <>
                      <LinkContainer className="navBarMenu" to="/SignIn">
                        <NavLink>Sign In</NavLink>
                      </LinkContainer>
                      <LinkContainer className="navBarMenu" to="/SignUp">
                        <NavLink>Sign Up</NavLink>
                      </LinkContainer>
                    </>
                  )}
                </Nav>
                {this.state.user && (
                  <Button
                    variant="outline-dark"
                    onClick={this.handleLogout}
                    style={{
                      marginRight: "1rem",
                      fontWeight: "bold",
                    }}
                  >
                    Log Out
                  </Button>
                )}
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}
