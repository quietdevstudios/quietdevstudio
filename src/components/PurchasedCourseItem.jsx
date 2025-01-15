import React from "react";
import { useParams } from "react-router";

const PurchasedCourseItem = ({ course }) => {
  //   const params = useParams();
  return <div>{course.id}</div>;
};

export default PurchasedCourseItem;
