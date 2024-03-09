import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { thunk } from "redux-thunk";
import { applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import allReducers from "./Reducers/allReducers";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = legacy_createStore(allReducers, compose(applyMiddleware(thunk)));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      
      <App />
    </Provider>
  </React.StrictMode>
);
