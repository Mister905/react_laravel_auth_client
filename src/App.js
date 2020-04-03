import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { load_user } from "./actions/auth";
// Components
import Landing from "./component/landing/Landing";
import Register from "./component/auth/register/Register";
import Login from "./component/auth/login/Login";
import ForgotPassword from "./component/auth/forgot_password/ForgotPassword";
import ResetPassword from "./component/auth/reset_password/ResetPassword";
import Home from "./component/home/Home";
import Alert from "./component/layout/alert/Alert";
import PrivateRoute from "./component/private_route/PrivateRoute";
import LoadingScreen from "./component/loading_screen/LoadingScreen";
import ProductList from "./component/products/list/List";
import ProductDetails from "./component/products/details/Details";
import CreateProduct from "./component/products/create/Create";
import EditProduct from "./component/products/edit/Edit";

class App extends Component {
  componentDidMount = () => {
    this.props.load_user();
  };

  render() {
    const { loading_user, is_authenticated } = this.props.auth;
    return (
      <BrowserRouter>
        <Alert />
        <Switch>
          {loading_user && <LoadingScreen />}
          <Route exact path="/" component={is_authenticated ? Home : Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route
            exact
            path="/reset-password/:token"
            component={ResetPassword}
          />
          <PrivateRoute exact path="/products" component={ProductList} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { load_user })(App);
