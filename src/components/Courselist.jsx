import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Courselist = ({ courses }) => {
  const MotionLink = motion(Link);

  return (
    <section className="sm:grid md:grid-cols-2 xl:grid-cols-3 max-w-7xl xl:mx-auto">
      {courses.map((course) => {
        const {
          id,
          courseDuration,
          courseTitle,
          courseThumbnailImg,
          courseTopics,
          nextCohortStartDate,
        } = course;
        return (
          <section key={id} className="p-6">
            <div className="shadow-zinc-300 shadow-lg flex flex-col justify-between h-96">
              <div className="w-full h-32">
                <img
                  src={courseThumbnailImg}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 h-screen">
                <p className="tracking-wider text-xl font-medium pb-4">
                  {courseTitle}
                </p>
                <p className="flex items-center gap-4">
                  <FontAwesomeIcon icon={faClock} />
                  <span>{courseDuration}</span>
                </p>
                <p className="flex items-center gap-4 mt-2">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <span>{courseTopics}</span>
                </p>
              </div>

              {/* details */}
              <div className="bg-orange-50 p-6 font-medium text-lg flex items-center justify-between">
                <p>
                  <span className="text-md font-medium flex flex-col items-start justify-between">
                    <span className="text-xs tracking-wider font-regular text-zinc-600">
                      Next Cohort Starts
                    </span>
                    {nextCohortStartDate}
                  </span>
                </p>
                <MotionLink
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    duration: 0.15,
                  }}
                  to={`${id}`}
                  className="text-sm bg-zinc-800 text-zinc-100 tracking-wider p-3 rounded-md shadow-xl"
                >
                  Course Detail
                </MotionLink>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Courselist;
