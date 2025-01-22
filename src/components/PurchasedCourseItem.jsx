import React, { useState } from "react";
import video from "/wontFail.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTv } from "@fortawesome/free-solid-svg-icons";
import { COURSECONTENT } from "../../data";

const PurchasedCourseItem = () => {
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
    <main className="text-center font-montserrat lg:flex lg:items-center lg:justify-center lg:absolute lg:top-[7.5rem] lg:bottom-0 lg:right-0 lg:left-0">
      <section className="bg-zinc-300 w-full lg:max-w-full lg:h-auto lg:mx-auto lg:flex lg:flex-col lg:items-center lg:justify-center lg:sticky lg:top-20">
        <div className="w-full">
          <video
            className="lg:flex lg:items-center lg:justify-center lg:flex-col lg:w-full lg:max-w-[70vw] lg:h-auto lg:max-h-[100vh] lg:mx-auto"
            controls
            width="100%"
            height="auto"
            poster="https://i.ytimg.com/vi/i-_OMSGpt1k/maxresdefault.jpg"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <nav className="lg:hidden">
          <ul className="flex items-center justify-center gap-6 p-4 bg-zinc-100 border-b-2 border-zinc-200 font-bold text-lg">
            <li>
              <button>Course content</button>
            </li>
          </ul>
        </nav>
      </section>

      <section className="m-4 lg:m-0 lg:h-[900px] lg:overflow-auto">
        <ul>
          <h1 className="px-6 py-4 font-medium capitalize text-center tracking-wide text-lg hidden lg:flex lg:flex-col">
            Course content
          </h1>
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
              <section key={id} className="lg:overflow-auto">
                <button
                  onClick={() => handleShowContent(id)}
                  className="bg-zinc-100 p-6 text-left font-semibold text-[1rem] tracking-wide w-full border-t-2 border-orange-400"
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
                          className="w-full flex items-start gap-4 py-4 px-4 my-4"
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

export default PurchasedCourseItem;
