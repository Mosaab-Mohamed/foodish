import React from "react";
import ReactDOM from "react-dom/client";
import RootRoute from "./shared/routes/Root";
import { Provider } from "react-redux";
import { store } from "shared/redux/store";
import "shared/i18n";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RootRoute />
		</Provider>
	</React.StrictMode>
);
