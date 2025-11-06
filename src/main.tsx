import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.tsx";
const Dashboard = React.lazy(
  () => import("./components/Dashboard/Dashboard.tsx")
);
const Layout = React.lazy(() => import("./components/Layout.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
