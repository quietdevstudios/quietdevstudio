import React from "react";
import vector from "/vector.svg";
import Courselist from "../components/Courselist";
import { useLoaderData } from "react-router-dom";
import { COURSElIST } from "../../data";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <section>
      <article className="relative bg-zinc-800">
        <section className="sm:grid sm:grid-cols-2 sm:grid-rows-1 w-[95%] max-w-7xl xl:mx-auto">
          <header className="p-6 sm:grid sm:place-self-center">
            <h1 className="w-full text-[2rem] font-bold tracking-wide leading-tight text-orange-200 md:text-[2.5rem] lg:text-[3.25rem]">
              Quietdev Studios Courses
            </h1>
            <h4 className="text-[1.5rem] font-medium tracking-wide leading-6 mt-2 text-white md:text-[2rem] md:leading-8">
              The essential skillset for new front-end developers
            </h4>
            <p className="mt-4 tracking-snug text-md text-white">
              The Quietdev Studio Curriculum provides a structured guide to the
              essential skills and practices for being a successful front-end
              developer, along with recommended learning resources.
            </p>

            <p className="my-8 font-regular text-md tracking-wide leading-tight text-white">
              Last Updated: January 2025.
            </p>
          </header>
          <figure className="sm:flex sm:items-end">
            <img
              src={vector}
              alt="vector image"
              className="w-[30rem] mx-auto md:max-w-[28rem]"
            />
          </figure>
        </section>
        <section className="flex items-center justify-evenly bg-zinc-700 w-[80%] md:max-w-[60%] mx-auto p-6 absolute -bottom-14 left-0 right-0 rounded-md text-white font-medium text-2xl tracking-tight">
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
      <section className="w-[95%] max-w-7xl xl:mx-auto">
        <h1 className="text-[2rem] font-semibold tracking-wide leading-tight text-zinc-700 mt-28 w-[95%] mx-auto md:text-[2.5rem] lg:text-[3.25rem]">
          About the courses
        </h1>
        <div className="flex flex-col gap-4 text-md font-regular tracking-tight px-16 my-10">
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

      <h1 className="text-[2rem] font-semibold leading-tight text-zinc-700 mt-12 mb-6 px-6 md:text-[2.5rem] lg:text-[3.25rem] xl:max-w-7xl xl:mx-auto">
        All Courses
      </h1>
      <Courselist courses={courses} />
    </section>
  );
};

export default Courses;

export const loader = () => {
  try {
    const response = COURSElIST;
    if (!response) {
      throw new Error("failed to fetch courses");
    }
    return COURSElIST;
  } catch (error) {
    console.error("failed here");
  }
};
