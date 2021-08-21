import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillDelete,
} from "react-icons/ai";

const SingleItem = (props) => {
  console.log("props", props);
  return (
    <Row>
      <Col md={3}>
        <div clsssName="singleRow">
          <img src={props.element.image} className="rowImage" />
        </div>
      </Col>
      <Col md={2} className="singleRowWrapper">
        {`Name : ${props.element.name}`}
      </Col>

      <Col md={2} className="singleRowWrapper">
        {`Price : £ ${props.element.price}`}
      </Col>

      <Col md={2} className="singleRowWrapper">
        {`Selected : ${props.element.userSelected}`}
      </Col>

      <Col md={3} xs={12} className="singleRowWrapper">
        <span>
          <AiFillPlusCircle
            className="iconClass"
            size={35}
            color="#006400"
            onClick={() => props.manageItemUser(props.element._id, "add")}
          />
        </span>
        <span>
          <AiFillMinusCircle
            className="iconClass"
            size={35}
            color="#DC143C"
            onClick={() => props.manageItemUser(props.element._id, "sub")}
          />
        </span>
        <span>
          <AiFillDelete
            className="iconClass"
            size={35}
            color="#2ec4b6 "
            onClick={() => props.removeItemToUser(props.element._id)}
          />
        </span>
      </Col>
    </Row>
  );
};

export default SingleItem;
