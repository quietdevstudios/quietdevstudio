import React, { Fragment, useState } from "react";
import video from "/wontFail.mp4";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { COURSECONTENT } from "../../data";

const PurchasedCourseItem = () => {
  const [showContent, setShowContent] = useState(false);
  const handleShowContent = (contentId) => {
    setShowContent((prevContent) =>
      prevContent === contentId ? null : contentId
    );
  };

  let topicCounter = 1;

  return (
    <main className="text-center font-montserrat lg:grid lg:grid-cols-3">
      <section className="sticky top-20 z-50 bg-zinc-300 lg:col-span-2 lg:z-0">
        <video
          controls
          width="100%"
          height="auto"
          poster="https://i.ytimg.com/vi/i-_OMSGpt1k/maxresdefault.jpg"
        >
          <source src={video} type="video/mp4" />
        </video>
        <nav className="">
          <ul className="flex items-center justify-center gap-6 p-4 bg-zinc-100 border-b-2 border-zinc-200 font-bold text-lg">
            <li>
              <NavLink>Course content</NavLink>
            </li>
            <li>
              <NavLink>Overview</NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <section className="m-4 lg:m-0 lg:sticky lg:top-20">
        <ul>
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
              <Fragment key={id}>
                <button
                  onClick={() => handleShowContent(id)}
                  className={`bg-zinc-100 py-6 px-4 text-left font-semibold text-[1rem] tracking-wide w-full border-t-2 border-zinc-400`}
                >
                  <span className="flex items-center justify-between">
                    <h2>
                      Section {sectionNumber}: {courseTitle}
                    </h2>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      size="sm"
                      className={`transform transition-transform
                        ${isVisible && "rotate-180"}`}
                    />
                  </span>
                  <span className="text-xs font-medium">
                    {completedSteps} / {totalSteps} | {estimatedTime}
                  </span>
                </button>
                {isVisible && (
                  <ul>
                    {topics.map((topic) => {
                      const { topicTitle, topicTime } = topic;
                      return (
                        <li
                          key={topicCounter}
                          className="flex items-start gap-4 py-4 px-4"
                        >
                          <div>
                            <input type="checkbox" />
                          </div>
                          <div className="w-full flex flex-col gap-1">
                            <h2 className="text-left">
                              {topicCounter++}. {topicTitle}
                            </h2>
                            <span className="text-xs font-regular flex gap-2 items-center">
                              <FontAwesomeIcon icon={faTv} />
                              {topicTime}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </Fragment>
            );
          })}
        </ul>
      </section>
    </main>
  );
};

export default PurchasedCourseItem;
