import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import TodosApp from './components/Todos/App'
import App from "./views/Comment/index";
import rootReducer from "./reducers";
import "./index.css";

const store = createStore(rootReducer);

/* eslint-disable */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
/* eslint-enable */
