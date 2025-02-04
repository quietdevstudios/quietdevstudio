import React from "react";
import { useParams } from "react-router-dom";

import CourseItem from "../components/CourseItem";

const CourseDetail = () => {
  const params = useParams();
  return <CourseItem params={params} />;
};

export default CourseDetail;

// export const loader = async (params) => {}; fetches single entry of courseDetails using the id from useParams();
 