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
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import SignIn from "./pages/Signin";
import Form from "./pages/Form";

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
          path: "about",
          element: <About />,
        },
        {
          path: "signup",
          element: <GetStarted />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "form",
          element: <Form />,
        },
        {
          path: "my-learning",
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
