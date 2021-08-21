import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { Row, Col, Button, Alert } from "react-bootstrap";
const TableBooking = () => {
  const [value, onChange] = useState(new Date());
  const [Text, onTextChange] = useState(false);

  return (
    <div className="inner" style={{ padding: "20px" }}>
      <h3>Table Booking Page</h3>

      <Row>
        <Col md={6} xs={6}>
          <h4>Please select date and time for your table booking</h4>
        </Col>
        <Col md={6} xs={6}>
          <div>
            <DateTimePicker onChange={onChange} value={value} />
          </div>
        </Col>
      </Row>
      <Button onClick={() => onTextChange(true)}>Confirm Booking</Button>

      <br />
      <br />

      <br />

      {Text && (
        <h5>
          <Alert variant="success">
            Thank you for confirming your booking!
          </Alert>
        </h5>
      )}
    </div>
  );
};

export default TableBooking;
