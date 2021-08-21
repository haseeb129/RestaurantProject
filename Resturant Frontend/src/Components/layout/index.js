import React, { Component } from "react";
import "../../App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "../pages/home";
import ContactUs from "../pages/contactUs";
import CurrentOrder from "../pages/currentOrder";
import TableBooking from "../pages/tableBooking";
import Menu from "../pages/menu";
import Register from "../Auth/Register";
import SignIn from "../Auth/SignIn";

import auth from "../Auth/authService";

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <div className="mb-4 appClass">
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/ContactUs"
                render={(props) => {
                  return <ContactUs {...props} {...this.props} />;
                }}
              />
              <Route
                exact
                path="/CurrentOrder"
                render={(props) => {
                  return <CurrentOrder {...props} {...this.props} />;
                }}
              />
              <Route
                exact
                path="/TableBooking"
                render={(props) => {
                  return <TableBooking {...props} {...this.props} />;
                }}
              />
              <Route
                exact
                path="/Menu"
                render={(props) => {
                  return <Menu {...props} {...this.props} />;
                }}
              />

              <Route
                exact
                path="/SignUp"
                render={(props) => {
                  return <Register {...props} {...this.props} />;
                }}
              />

              <Route
                exact
                path="/SignIn"
                render={(props) => {
                  return <SignIn {...props} {...this.props} />;
                }}
              />

              {/* <Route
                path="/Existing"
                render={(props) => {
                  if (!this.state.user) return <AlreadySubscribed {...props} />;
                  else return <Redirect to="/" />;
                }}
              /> */}
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Layout;
