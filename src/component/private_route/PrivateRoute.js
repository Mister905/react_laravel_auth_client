import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../auth/login/Login";
import Navigation from "../layout/navigation/Navigation";

class PrivateRoute extends Component {
  render() {
    const { component } = this.props;
    const { is_authenticated } = this.props.auth;
    const final_component = is_authenticated ? component : Login;
    return (
      <>
        <Navigation />
        <Route component={final_component} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(PrivateRoute);
