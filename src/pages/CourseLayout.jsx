import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const CourseLayout = () => {
  return (
    <>
      <section className="font-montserrat bg-zinc-700 text-white">
        <span className="flex items-center gap-4 py-[3rem] px-[2rem] w-[95%] xl:max-w-[1900px] xl:mx-auto">
          <Link to=".." relative="path">
            <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          </Link>
          <p className="font-semibold tracking-wide">Web Development</p>
        </span>
      </section>
      <Outlet />
    </>
  );
};

export default CourseLayout;
