import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Route, Switch } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import "bootstrap/dist/css/bootstrap.css";
import "./style/main.scss";
import Layout from "./components/Layout";
import history from './history';
import Home from './components/Home/home';
import Instructors from './components/instructors';
import KidsHome from "./components/kids/kidsHome";
import Schedule from "./components/schedule";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path ='/' exact component = {Home}/>
            <Route path ='/meet-the-instructors' exact component = {Instructors}/>
            <Route path ='/kids' exact component = {KidsHome}/>
            <Route path ='/schedule' exact component = {Schedule}/>
            <Route path ='/contact' exact component = {KidsHome}/>
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
