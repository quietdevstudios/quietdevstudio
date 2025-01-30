import React from "react";

import PurchasedCourses from "../components/PurchasedCourses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { PURCHASEDCOURSES } from "../../data";
import { Link } from "react-router-dom";

const MyLearning = () => {
  return (
    <section className="font-montserrat">
      <header className="bg-zinc-800 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-orange-200 tracking-wide text-left font-semibold py-[2rem] px-[1.5rem] w-[95%] max-w-7xl xl:mx-auto">
          My learning
        </h1>
        <nav className="flex items-end justify-between w-full px-[1.5rem]">
          {}

          <ul className="flex gap-6 overflow-x-scroll scrollbar-hide space-x-4 px-[1.5rem] h-full w-[95%] max-w-7xl xl:mx-auto">
            <li className="text-white font-bold text-[1.25rem] tracking-wide border-b-8 border-orange-600 w-fit">
              <a href="#">All courses</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={`flex flex-col items-center justify-center`}>
        {PURCHASEDCOURSES.length < 0 ? (
          <>
            <section className="sm:grid sm:grid-cols-2 lg:grid-cols-3 max-w-7xl xl:mx-auto">
              {PURCHASEDCOURSES.map((courses) => {
                return <PurchasedCourses key={courses.id} {...courses} />;
              })}
            </section>
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
          </>
        ) : (
          <section className=" text-center flex flex-col items-center justify-center min-h-[70vh] px-3">
            <h2 className="text-2xl font-semibold text-center">
              Hi Udeme, you haven’t started learning yet!{" "}
              <span className="tracking-tight mt- block text-lg font-medium">
                Explore our courses and find the perfect one for you.
              </span>
            </h2>
            <p className=" pt-6 text-lg text-center font-medium">
              Your purchased courses will be displayed here.
            </p>
            <Link
              to="/courses-list"
              className="border border-orange-200 text-lg w-fit px-6 py-3 mt-6 font-medium tracking-wide rounded-md text-orange-600 hover:bg-orange-500 hover:text-white capitalize transition duration-300"
            >
              Browse Courses
            </Link>
          </section>
        )}
      </main>
    </section>
  );
};

export default MyLearning;

// Hi [User's Name], you haven’t started learning yet! Explore over 50,000 courses and find the perfect one for you.

// loader function here to load purchased courses from backend server - depending on whether there are available courses, i will display dynamic contents.
