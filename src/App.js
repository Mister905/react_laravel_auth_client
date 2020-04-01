import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import Landing from "./component/landing/Landing";
import Register from "./component/auth/register/Register";
import Login from "./component/auth/login/Login";
import Home from "./component/home/Home";
import Alert from "./component/layout/alert/Alert";

function App() {
  return (
    <BrowserRouter>
      <Alert />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
