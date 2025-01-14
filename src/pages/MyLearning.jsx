import React, { Fragment, useState } from "react";
import { Link } from "react-router";

import PurchasedCourses from "../components/PurchasedCourses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const MyLearning = () => {
  return (
    <section className="font-montserrat">
      <header className="bg-zinc-800 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl text-center font-semibold p-[3rem]">
          My learning
        </h1>
        <nav className="flex items-end justify-between w-full px-8">
          <button className="border border-zinc-600 rounded-full w-12 h-12 mr-2">
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="2x"
              color="#fff"
              className=""
            />
          </button>
          <ul className="flex gap-6 overflow-x-scroll scrollbar-hide space-x-4 h-full">
            <li className="text-white font-bold text-[1rem] tracking-wide border-b-8 border-orange-600 w-fit">
              <a href="#">All courses</a>
            </li>

            <li className="text-white text-[1rem] font-bold tracking-wide">
              <a href="#">Wishlist</a>
            </li>

            <li className="text-white font-bold tracking-wide">
              <a href="#">Learning tools</a>
            </li>
          </ul>
          <button className="border border-zinc-600 rounded-full w-12 h-12 mr-2">
            <FontAwesomeIcon
              icon={faChevronRight}
              size="2x"
              color="#fff"
              className=""
            />
          </button>
        </nav>
      </header>

      {/* depending on whether there are available courses, i will display dynamic contents. either the main tag with it's content(if i get an empty arr []) or purchased courses I get from server, else if there are no purchased courses by that user, I display the main tag with it's content in it. */}
      <main className={`flex flex-col items-center justify-center h-screen`}>
        <>
          <h2 className="text-2xl font-bold text-center tracking-wide">
            Explore Over 50,000 Courses and Start Learning Today!
          </h2>
          <p className="py-6 text-lg text-center font-medium tracking-wide">
            Your purchased courses will be displayed here.
          </p>
          <Link
            to="/curriculum"
            className="border-b-2 border-orange-600 w-fit text-orange-600 text-lg font-bold tracking-wide"
          >
            Browse courses.
          </Link>
        </>

        {/* <PurchasedCourses /> */}
      </main>
    </section>
  );
};

export default MyLearning;

// loader function here... I'll load purchased courses from server here - depending on whether there are available courses, i will display dynamic contents.
