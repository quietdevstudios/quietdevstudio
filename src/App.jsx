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
import CoursePlayerPage from "./pages/CoursePlayerPage";
import CoursesList from "./pages/CoursesList";
import CourseLayout from "./pages/CourseLayout";
// import CourseDetail from "./pages/CourseDetail";
import CourseDetail from "./pages/Coursedetail";
import Checkout from "./pages/Checkout";

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
          path: "courses-list",
          element: <CoursesList />,
        },
        {
          path: "courses-list/:courseId",
          id: "course-detail",
          children: [
            {
              index: true,
              element: <CourseDetail />,
            },
          ],
        },
        {
          path: "checkout/:courseId",
          element: <Checkout />,
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
          element: <CoursePlayerPage />,
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
