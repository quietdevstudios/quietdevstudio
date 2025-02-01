import React from "react";
import CourseContent from "../components/CourseContent";

import { useParams } from "react-router-dom";

const CoursePlayerPage = () => {
  const params = useParams();
  return <CourseContent params={params} />;
};

export default CoursePlayerPage;

// export const loader = () => {}; fetch single entries for course content e.g. lessons, modules, courseTitle,
