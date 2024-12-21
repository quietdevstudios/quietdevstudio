import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Maintenance from "./components/Maintenance";
import { createBrowserRouter, RouterProvider } from "react-router";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Maintenance />,
    },
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
