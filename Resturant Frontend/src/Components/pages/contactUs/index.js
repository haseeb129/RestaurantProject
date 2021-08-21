import React, { Component } from "react";
import "../../Auth/auth.css";
import { Button, Form } from "react-bootstrap/";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <div className="inner">
        <h3>
          if you would like to get in touch with us see our contact details
          below
        </h3>

        <div className="detailDiv">
          <span>Phone</span>
          <span className="floatRight"> 07123456789</span>
        </div>

        <div className="detailDiv">
          <span>Email</span>
          <span className="floatRight">lerestaurant@email.com</span>
        </div>

        <div className="detailDiv">
          <span>Address</span>
          <span className="floatRight">London</span>
        </div>
      </div>
    );
  }
}

export default ContactUs;
