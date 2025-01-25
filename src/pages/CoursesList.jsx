import React from "react";
import vector from "/vector.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { COURSElIST } from "../../data";
import { Link } from "react-router-dom";

const CoursesList = () => {
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
            <p className="mt-4 font-medium text-md text-white">
              The Quietdev Studio Curriculum provides a structured guide to the
              essential skills and practices for being a successful front-end
              developer, along with recommended learning resources.
            </p>

            <p className="mt-10 font-regular text-md tracking-wide leading-tight text-white">
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
      <section className="w-[95%] max-w-7xl xl:mx-auto">
        <h1 className="text-[2rem] font-medium tracking-wide leading-tight text-orange-400 mt-28 w-[95%] mx-auto md:text-[2.5rem] lg:text-[3.25rem]">
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

      <h1 className="text-[2rem] font-medium tracking-wide leading-tight text-orange-400 mt-12 mb-6 px-6 md:text-[2.5rem] lg:text-[3.25rem] xl:max-w-7xl xl:mx-auto">
        All Courses
      </h1>

      <section className="sm:grid md:grid-cols-2 xl:grid-cols-3 max-w-7xl xl:mx-auto">
        {COURSElIST.map((course) => {
          const {
            id,
            courseDuration,
            courseTitle,
            courseThumbnailImg,
            courseTopics,
            nextCohortStartDate,
          } = course;
          return (
            <section key={id} className="p-6">
              <div className="shadow-zinc-300 shadow-lg flex flex-col justify-between h-96">
                <div className="w-full h-32">
                  <img
                    src={courseThumbnailImg}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6 h-screen">
                  <p className="tracking-wider text-xl font-medium pb-4">
                    {courseTitle}
                  </p>
                  <p className="flex items-center gap-4">
                    <FontAwesomeIcon icon={faClock} />
                    <span>{courseDuration}</span>
                  </p>
                  <p className="flex items-center gap-4 mt-2">
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <span>{courseTopics}</span>
                  </p>
                </div>

                {/* details */}
                <div className="bg-orange-50 p-6 font-medium text-lg flex items-center justify-between">
                  <p>
                    <span className="text-md font-medium flex flex-col items-start justify-between">
                      <span className="text-xs tracking-wider font-regular text-zinc-600">
                        Next Cohort Starts
                      </span>
                      {nextCohortStartDate}
                    </span>
                  </p>
                  <Link
                    to={`${id}`}
                    className="text-sm bg-zinc-800 text-zinc-100 tracking-wide p-3 rounded-md shadow-xl"
                    state={{
                      id,
                      courseDuration,
                      courseTitle,
                      courseThumbnailImg,
                      courseTopics,
                      nextCohortStartDate,
                    }}
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default CoursesList;
