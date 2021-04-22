import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />

        <Route path="*" component={() => <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
