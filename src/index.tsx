import React from "react";
import store from "./redux/store/index";
import { Provider } from "react-redux";
import App from "./navigation";

/**
 * @class Index
 * @description  Tattlebox init function
 */

function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default index;
