import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Outlet } from "react-router";

const CourseLayout = () => {
  return (
    <>
      <section className="font-montserrat bg-zinc-800 text-white">
        <span className="flex items-center gap-4 py-[3rem] px-[2rem] w-[95%] max-w-7xl xl:mx-auto">
          <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          <p className="font-semibold tracking-wide">Course Title Name</p>
        </span>
      </section>
      <Outlet />
    </>
  );
};

export default CourseLayout;
