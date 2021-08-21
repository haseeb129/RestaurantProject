import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

import auth from "../../Auth/authService";
import FadeInAnimation from "../../Fade Effect/FadeInAnimation";

import ImageSlider from "./imageSlider";
class HomePage extends Component {
  state = { user: null };

  setNewSubscriber = (e) => {
    this.setState({ newSubscriber: e });
  };

  render() {
    return (
      <div className="fullHeight">
        <Container fluid className="fullHeight">
          <Row className="orangeBackground pageBackground">
            <Col>
              <FadeInAnimation direction="down" delay={600}>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "50px",
                    fontWeight: "bolder",
                    marginBottom: "1%",
                  }}
                >
                  <p>Le Restaurant</p>
                </div>
              </FadeInAnimation>
              <ImageSlider />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
