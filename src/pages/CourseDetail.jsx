import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = ({ id }) => {
  const params = useParams();
  console.log(params.id);
  return <div>Coursedetail page</div>;
};

export default CourseDetail;
