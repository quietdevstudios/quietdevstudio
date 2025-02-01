import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

const CourseLayout = () => {
  return (
    <>
      <ScrollToTop />
      <section className="font-montserrat bg-zinc-700 text-white">
        <span className="flex items-center gap-4 py-[3rem] px-[2rem] w-full xl:max-w-[1900px] xl:mx-auto lg:w-full">
          <Link to=".." relative="path">
            <FontAwesomeIcon icon={faArrowLeft} size="xl" />
          </Link>
          <p className="font-semibold tracking-wide p-2">Web Development</p>
        </span>
      </section>
      <Outlet />
    </>
  );
};

export default CourseLayout;
