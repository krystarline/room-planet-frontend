// import { Provider } from "jotai";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "jotai";

import App from "./App";
import { store } from "./common/atom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider unstable_createStore={() => store}>
      <App />
    </Provider>
  </React.StrictMode>
);
