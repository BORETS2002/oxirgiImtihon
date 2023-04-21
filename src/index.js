import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  // </React.StrictMode>
);

if ("ServiceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register(
      "./components/ServisWorker/ServisWorker.js",
    );
  });
}
