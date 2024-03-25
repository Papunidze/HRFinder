import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Helmet } from "react-helmet";
import { BrowserRouter } from "react-router-dom";
import { CheckLoginProvider } from "./provider/loginProvider.ts";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Helmet defaultTitle="HrFinder" titleTemplate="%s · HrFinder" />
    <QueryClientProvider client={queryClient}>
      <CheckLoginProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CheckLoginProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
