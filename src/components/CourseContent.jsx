import React, { useState } from "react";
import video from "/wontFail.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTv } from "@fortawesome/free-solid-svg-icons";
import { COURSECONTENT } from "../../data";

const CourseContent = () => {
  const [showContent, setShowContent] = useState(false);
  const [checkedTopics, setCheckedTopics] = useState({});

  const handleShowContent = (contentId) => {
    setShowContent((prevContent) =>
      prevContent === contentId ? null : contentId
    );
  };

  const toggleCheckbox = (topicId) => {
    setCheckedTopics((prev) => ({
      ...prev,
      [topicId]: !prev[topicId],
    }));
  };

  return (
    <main className="text-center bg-zinc-800 font-montserrat lg:flex lg:items-center lg:justify-center lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:left-0">
      <section className="w-full lg:max-w-full lg:h-auto lg:mx-auto lg:flex lg:flex-col lg:items-center lg:justify-center lg:sticky lg:top-20">
        <div className="w-full">
          <video
            className="lg:flex lg:items-center lg:justify-center lg:flex-col lg:w-full lg:max-w-[75vw] lg:h-auto lg:max-h-[100vh] lg:mx-auto"
            controls
            width="100%"
            height="auto"
            poster="https://i.ytimg.com/vi/i-_OMSGpt1k/maxresdefault.jpg"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="p- lg:h-[900px] lg:overflow-auto border border-zinc-700 text-white">
        <ul>
          {/* course heading */}
          <section className="lg:sticky lg:right-0 lg:top-0 lg:z-50 bg-zinc-800 shadow-md">
            <div className="w-full text-left p-3">
              <h1 className="font-bold text-xl w-full">
                Web Development: The Introductory Guide
              </h1>
              <p className="text-xs tracking-widest font-regular mt-2">
                by Quietdev
              </p>
              <p className="font-medium tracking-wider text-lg mt-4 text-center">
                Course Content
              </p>
            </div>
          </section>

          {COURSECONTENT.map((coursecontentitem) => {
            const {
              id,
              courseTitle,
              completedSteps,
              estimatedTime,
              sectionNumber,
              totalSteps,
              topics,
            } = coursecontentitem;
            const isVisible = showContent === id;
            return (
              <section key={id}>
                <button
                  onClick={() => handleShowContent(id)}
                  className="p-6 text-left font-semibold text-[1rem] tracking-wide w-full border-t bg-zinc-700"
                >
                  <span className="flex items-center justify-between">
                    <h2>
                      Section {sectionNumber}: {courseTitle}
                    </h2>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="sm"
                      className={`transform transition-transform ${
                        isVisible ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                  <span className="text-xs font-medium">
                    {completedSteps} / {totalSteps} | {estimatedTime}
                  </span>
                </button>
                {isVisible && (
                  <ul>
                    {topics.map((topic, index) => {
                      const { topicTitle, topicTime } = topic;
                      return (
                        <button
                          key={`${id}-${index}`}
                          className="w-full flex items-start gap-4 py-4 px-4 my-4 text-sm"
                        >
                          <div>
                            <input
                              type="checkbox"
                              checked={!!checkedTopics[`${id}-${index}`]}
                              onChange={() => toggleCheckbox(`${id}-${index}`)}
                            />
                          </div>
                          <div className="w-full flex flex-col gap-1">
                            <h2 className="text-left">{topicTitle}</h2>
                            <span className="text-xs font-regular flex gap-2 items-center">
                              <FontAwesomeIcon icon={faTv} />
                              {topicTime}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </ul>
                )}
              </section>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default CourseContent;

// different states will be available - watched state - unwatched state - active state.
