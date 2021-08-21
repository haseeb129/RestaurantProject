import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const SingleItem = (props) => {
  return (
    <Row>
      <Col md={3}>
        <div clsssName="singleRow">
          <img src={props.element.image} className="rowImage" />
        </div>
      </Col>
      <Col md={3} xs={4} className="singleRowWrapper">
        {`Name : ${props.element.name}`}
      </Col>

      <Col md={3} xs={4} className="singleRowWrapper">
        {`Price : £ ${props.element.price}`}
      </Col>

      <Col md={3} xs={4} className="singleRowWrapper">
        <Button
          className="redBackground"
          size="sm"
          onClick={() => {
            props.addItemToUser(props.element._id);
          }}
        >
          Order Now
        </Button>
      </Col>
    </Row>
  );
};

export default SingleItem;
