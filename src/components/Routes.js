import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import Chart from "../pages/Chart";
import Company from "../pages/Company";
import Financials from "../pages/Financials";
// import Portfolio from "../pages/Portfolio";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Protfolio from "../pages/Protfolio";
import Home from "../pages/Home";
const BaseRouter = () => (

  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/watchlist" component={Dashboard} />
    <PrivateRoute exact path="/portfolio" component={Protfolio}/>
    <Route exact path="/chart" component={Chart} />
    <Route exact path="/news" component={Company} />
    <Route exact path="/financials" component={Financials} />
    <PrivateRoute exact path="/profile" component={Profile} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
  </div>
);

export default BaseRouter;


    // <PrivateRoute exact path="/portfolio" component={Portfolio} />
