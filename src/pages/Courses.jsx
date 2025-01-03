import React from "react";
import vector from "/vector.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Courses = () => {
  return (
    <section>
      <article className="relative bg-orange-100">
        <header className="p-6">
          <h1 className="text-[2rem] font-medium tracking-tighter text-orange-600">
            Quietdev Studios Curriculum
          </h1>
          <h4 className="text-[1.5rem] font-medium tracking-tight leading-7 mt-2">
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
        <section className="flex items-center justify-evenly bg-orange-400 w-[80%] md:max-w-[60%] mx-auto p-6 absolute -bottom-14 left-0 right-0 rounded-md text-white font-medium text-2xl tracking-tighter">
          <div>
            {/* <FontAwesomeIcon icon={faGraduationCap} /> */}
            <p>Beginner's level</p>
          </div>
          <div>
            <p>Self-paced</p>
          </div>
        </section>
      </article>

      {/* about the curriculum */}
      <section>
        <h1 className="text-[2rem] font-medium tracking-tighter text-orange-600 mt-28 px-6">
          About the curriculum
        </h1>
        <div className="flex flex-col gap-4 text-lg font-regular tracking-tight px-16 my-10">
          <div>
            <p>
              Defines the essential skills and knowledge every front-end
              developer needs for career success and industry relevance.
            </p>
          </div>
          <div>
            <p>
              Created by Quietdev and refined with insights from students,
              educators, and developers from the broader web community online.
            </p>
          </div>
          <div>
            <p>
              Includes learning resource recommendations covering every
              curriculum topic, helping you become job-ready.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-[2rem] font-medium tracking-tighter text-orange-600 mt-12 px-6">
          Modules
        </h1>
        <p>coming soon...</p>
      </section>
      
    </section>
  );
};

export default Courses;
