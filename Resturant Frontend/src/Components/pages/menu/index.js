import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import SingleItem from "./SingleItem";
class Menu extends Component {
  render() {
    return (
      <div className="wordWrap">
        <div
          className="orangeBackground textCenter "
          style={{ padding: "20px", minHeight: "100vh" }}
        >
          <Container>
            <Row>
              <Col className="floatRight">
                {`Items In User Order ${this?.props?.state?.userItems?.length}`}
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="singleRowWrapper">
                  {this?.props?.state?.menuItems?.map((element) => {
                    return <SingleItem element={element} {...this?.props} />;
                  })}
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="floatRight">
                <span
                  onClick={() => {
                    this?.props?.history?.push("/CurrentOrder");
                  }}
                >
                  View Order
                </span>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Menu;
