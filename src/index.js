import { Provider } from "jotai";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { modelsAtom } from "./common/atom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider initialValues={[[modelsAtom, [true, true, true, true]]]}>
      <App />
    </Provider>
  </React.StrictMode>
);
