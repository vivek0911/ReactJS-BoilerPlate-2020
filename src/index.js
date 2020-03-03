import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
import store from "./store";
import App from './components/app';

const globalStore = store({});

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, globalStore)


ReactDOM.render(
  <Provider store={globalStore}>
    <Router>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById("app")
);