import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Maintenance from "./components/Maintenance";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Courses from "./pages/Courses";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "courses",
      element: <Courses />,
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
