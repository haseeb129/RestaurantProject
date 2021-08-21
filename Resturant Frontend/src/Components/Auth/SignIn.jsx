import React, { Component } from "react";
import "./auth.css";
import axios from "axios";
import auth from "./authService";

import { Alert, Button, Form } from "react-bootstrap/";
export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    result: null,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);

    const userObject = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log("User Object", userObject);
    await axios
      .post("http://localhost:5000/auth/login", userObject)
      .then(async (response) => {
        await auth.logout();
        await auth.loginWithJWT(response.data.token);
        window.location = "/";
      })
      .catch((err) => {
        this.setState({ result: err?.response?.data?.message });
      });
  };
  render() {
    return (
      <div>
        <Form className="inner" onSubmit={this.handleSubmit}>
          <h3>Sign In</h3>

          <Form.Group controlId="">
            <Form.Label>email</Form.Label>
            <Form.Control
              // type="email"
              onChange={this.handleChange}
              required
              name="email"
              value={this.state.email}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={this.handleChange}
              required
              name="password"
              value={this.state.password}
              placeholder="Enter Password"
            />
          </Form.Group>

          <Button type="submit" className="btn btn-dark btn-lg btn-block">
            Sign In
          </Button>
          <br />
          {this.state.result && (
            <h5>
              <Alert variant="danger">{this.state.result}</Alert>
            </h5>
          )}
        </Form>
      </div>
    );
  }
}
