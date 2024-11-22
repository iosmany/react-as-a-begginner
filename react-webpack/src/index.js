import React from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

import store from "./context/configureStore";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

//<Provider store={store}> 'make all the components in the app tree have access to the Redux store'

root.render(
  <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
