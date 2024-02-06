import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Collective from "./Pages/Collective/Collective.jsx";
import Vendor from "./Pages/Vendor/Vendor.jsx";
import RentRack from "./Pages/RentRack/RentRack.jsx";
import Cafe from "./Pages/Cafe/Cafe.jsx";
import About from "./Pages/About/About.jsx";

import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/collective",
        element: <Collective />,
      },
      {
        path: "/cafe",
        element: <Cafe />,
      },
      {
        path: "/become-a-vendor",
        element: <Vendor />,
      },
      {
        path: "/rent-a-rack",
        element: <RentRack />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
