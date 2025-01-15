import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Maintenance from "./components/Maintenance";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Errorpage from "./pages/Errorpage";
import RootLayout from "./pages/RootLayout";
import MyLearning from "./pages/MyLearning";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import SignIn from "./pages/Signin";
import Form from "./pages/Form";
import Coursedetail from "./pages/Coursedetail";
import Curriculum from "./pages/Curriculum";

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
          element: <Curriculum />,
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
        {
          path: "my-learning/:courseId",
          element: <Coursedetail />,
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
