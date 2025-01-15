import React from "react";
import PurchasedCourseItem from "../components/PurchasedCourseItem";
import { useParams, useRouteLoaderData } from "react-router";

const Coursedetail = () => {
    const course = useRouteLoaderData("course-detail");
//   const params = useParams("course-detail");
  return (
    <div>
      <PurchasedCourseItem course={course} />
    </div>
  );
};

export default Coursedetail;
