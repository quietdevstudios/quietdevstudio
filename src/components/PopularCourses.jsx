import React from "react";
import { COURSElIST } from "../../data";
import { motion } from "framer-motion";

export const PopularCourses = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Popular Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {COURSElIST.map((course) => {
            return (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {course.courseTitle}
                </h3>
                <p className="text-gray-600 mb-4">{course.info}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    duration: 0.15,
                  }}
                  className="px-4 py-2 rounded-md border border-orange-200 w-fit font-medium tracking-wider text-orange-600 hover:bg-orange-400 hover:text-white capitalize"
                >
                  Learn More
                </motion.button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// export const loader = () => {};
