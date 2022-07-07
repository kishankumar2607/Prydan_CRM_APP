import React from "react";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import App from "./src/navigation";

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
