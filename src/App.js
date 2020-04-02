import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { load_user } from "./actions/auth";
// Components
import Landing from "./component/landing/Landing";
import Register from "./component/auth/register/Register";
import Login from "./component/auth/login/Login";
import Home from "./component/home/Home";
import Alert from "./component/layout/alert/Alert";
import PrivateRoute from "./component/private_route/PrivateRoute";

class App extends Component {
  componentDidMount = () => {
    this.props.load_user();
  };

  componentDidUpdate = prevProps => {
    if (this.props.auth.is_authenticated !== prevProps.auth.is_authenticated) {
      if (this.props.auth.is_authenticated) this.props.load_user();
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Alert />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { load_user })(App);
