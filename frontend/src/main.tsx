import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import { CheckLoginProvider } from "./provider/loginProvider.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Helmet defaultTitle="HrFinder" titleTemplate="%s · HrFinder" />
    <CheckLoginProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CheckLoginProvider>
  </React.StrictMode>
);
