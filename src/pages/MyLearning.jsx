import React, { Fragment, useState } from "react";
import { Link } from "react-router";

import PurchasedCourses from "../components/PurchasedCourses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { PURCHASEDCOURSES } from "../../data";

const MyLearning = () => {
  return (
    <section className="font-montserrat">
      <header className="bg-zinc-800 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl text-left font-semibold py-[3rem] px-[1.5rem] w-[95%] max-w-7xl xl:mx-auto">
          My learning
        </h1>
        <nav className="flex items-end justify-between w-full px-[1.5rem]">
          <ul className="flex gap-6 overflow-x-scroll scrollbar-hide space-x-4 px-[1.5rem] h-full w-[95%] max-w-7xl xl:mx-auto">
            <li className="text-white font-bold text-[1.25rem] tracking-wide border-b-8 border-orange-600 w-fit">
              <a href="#">All courses</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* depending on whether there are available courses, i will display dynamic contents. either the main tag with it's content(if i get an empty arr []) or purchased courses I get from server, else if there are no purchased courses by that user, I display the main tag with it's content in it. */}
      <main className={`flex flex-col items-center justify-center h-scren`}>
        {/* <>
          <h2 className="text-2xl font-bold text-center tracking-wide">
            Explore Over 50,000 Courses and Start Learning Today!
          </h2>
          <p className="py-6 text-lg text-center font-medium tracking-wide">
            Your purchased courses will be displayed here.
          </p>
          <Link
            to="/course-detail"
            className="border-b-2 border-orange-600 w-fit text-orange-600 text-lg font-bold tracking-wide"
          >
            Browse courses.
          </Link>
        </> */}

        {PURCHASEDCOURSES.map((courses) => {
          return <PurchasedCourses key={courses.id} {...courses} />;
        })}

        <section className="p-2">
          <div className="flex items-center justify-center gap-4 py-2">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="border border-orange-300 p-3 rounded-full w-4 h-4 cursor-pointer"
            />
            <ul className="flex gap-6 p-2 text-zinc-600">
              <li>
                <a
                  href="#"
                  className="border-b-[.2rem] border-orange-600 px-2 py-1"
                >
                  1
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
            </ul>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="border border-orange-300 p-3 rounded-full w-4 h-4 cursor-pointer"
            />
          </div>
          <div>
            <p className="text-center tracking-wider text-sm text-zinc-600">
              1-3 of 10 courses
            </p>
          </div>
        </section>
      </main>
    </section>
  );
};

export default MyLearning;

// loader function here... I'll load purchased courses from server here - depending on whether there are available courses, i will display dynamic contents.
