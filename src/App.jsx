import React from "react";
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
import Courses from "./pages/Courses";
import CourseLayout from "./pages/CourseLayout";

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
          path: "courses",
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

    {
      path: "my-learning/:courseId",
      element: <CourseLayout />,
      children: [
        {
          index: true,
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
