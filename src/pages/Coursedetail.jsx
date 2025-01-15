import React from "react";
import { useParams } from "react-router-dom";

import PurchasedCourseItem from "../components/PurchasedCourseItem";

const Coursedetail = () => {
  const params = useParams();
  return <PurchasedCourseItem course={params.courseId} />;
};

export default Coursedetail;
