import React from "react";
import vector from "/vector.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Courses = () => {
  return (
    <section>
      <article>
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
      </article>
      <section className="flex items-center justify-evenly">
        <div>
          {/* <FontAwesomeIcon icon={faGraduationCap} /> */}
          <p>Beginner's level</p>
        </div>
        <div>
          <p>Self-paced</p>
        </div>
        <div>
          <p>Paid</p>
        </div>
      </section>
    </section>
  );
};

export default Courses;
