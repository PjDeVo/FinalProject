import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, Switch } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "bootstrap/dist/css/bootstrap.css";
import "./style/main.scss";
import Layout from "./components/Layout";
import history from './history';
import Home from './components/Home';
import Instructors from './components/instructors';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path ='/' exact component = {Home}/>
            <Route path ='/meet-the-instructors' exact component = {Instructors}/>
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
