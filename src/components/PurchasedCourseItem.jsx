import React from "react";
// import video from "/wontFail.mp4";
import { NavLink } from "react-router-dom";

const PurchasedCourseItem = ({}) => {
  return (
    <main className="text-center font-montserrat">
      <video
        controls
        width="100%"
        height="auto"
        poster="https://i.ytimg.com/vi/i-_OMSGpt1k/maxresdefault.jpg"
      >
        <source src='' type="video/mp4" />
      </video>
      <nav>
        <ul className="flex items-center justify-center gap-6 p-2 bg-zinc-100 border-b-2 border-zinc-300 font-bold text-lg">
          <li>
            <NavLink>Course content</NavLink>
          </li>
          <li>
            <NavLink>Overview</NavLink>
          </li>
        </ul>
      </nav>
      <section className="h-screen border-2 border-red-500 m-8">
        <ul>
          <h2>Section 1: Introduction and Overview</h2>
        </ul>
      </section>
    </main>
  );
};

export default PurchasedCourseItem;
