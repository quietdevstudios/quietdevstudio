import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Maintenance from "./components/Maintenance";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Errorpage from "./pages/Errorpage";
import RootLayout from "./pages/RootLayout";
import MyLearning from "./pages/MyLearning";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Errorpage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "curriculum",
          element: <Courses />,
        },
        {
          path: "learning",
          element: <MyLearning />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
