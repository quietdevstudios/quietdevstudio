import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Errorpage from "./pages/Errorpage";
import RootLayout from "./pages/Layouts/RootLayout";
import MyLearning from "./pages/MyLearning";
import About from "./pages/About";
// import GetStarted from "./pages/Accounts/GetStarted";
// import SignIn from "./pages/Accounts/Signin";
import Form from "./pages/Form";
import CoursePlayerPage from "./pages/CoursePlayerPage";
import Courses, { loader as couselistLoader } from "./pages/Courses";
import CourseLayout from "./pages/Layouts/CourseLayout";
import CourseDetail from "./pages/CourseDetail";
import Checkout from "./pages/Checkout";
import Account_Settings from "./pages/Accounts/Account_Settings";
import Authentication from "./pages/Accounts/Authentication";

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
          loader: couselistLoader,
        },
        {
          path: "courses/:courseId",
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
          path: "auth",
          element: <Authentication />,
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
          path: "account-settings",
          element: <Account_Settings />,
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
