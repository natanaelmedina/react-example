import React from "react";
import { render } from "react-dom";
import reportWebVitals from "./reportWebVitals";

//Router
import { BrowserRouter } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./redux";

//Components
import App from "./App";

//Styles

import 'semantic-ui-css/semantic.min.css';
import "./index.css";

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
