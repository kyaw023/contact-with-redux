import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import {Provider} from 'react-redux'
import "./index.css";
import { store } from "./stores/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
