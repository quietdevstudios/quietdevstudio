import React from "react";
import vector from "/vector.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Courses = () => {
  return (
    <section>
      <article className="relative">
        <header className="p-6">
          <h1 className="text-[2rem] font-medium tracking-tighter text-orange-600">
            Quietdev Studios Curriculum
          </h1>
          <h4 className="text-[1.5rem] font-medium tracking-tight">
            The essential skillset for new front-end developers
          </h4>
          <p className="mt-4 font-regular text-lg">
            The Quietdev Studio Curriculum provides a structured guide to the
            essential skills and practices for being a successful front-end
            developer, along with recommended learning resources.
          </p>

          <p className="mt-10 font-regular text-lg tracking-tighter">
            Last Updated: January 2025
          </p>
        </header>
        <figure>
          <img src={vector} alt="vector image" />
        </figure>
        <section className="flex items-center justify-evenly bg-orange-400 w-[80%] md:max-w-[60%] mx-auto p-6 absolute -bottom-5 left-0 right-0 rounded-md text-white font-medium text-2xl tracking-tighter">
          <div>
            {/* <FontAwesomeIcon icon={faGraduationCap} /> */}
            <p>Beginner's level</p>
          </div>
          <div>
            <p>Self-paced</p>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Courses;
