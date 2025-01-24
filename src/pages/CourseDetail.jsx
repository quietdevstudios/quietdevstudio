import React from "react";
import { useParams } from "react-router-dom";
import profile from "/profile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

const CourseDetail = () => {
  const { courseId } = useParams();
  return (
    <section className="font-montserrat">
      <section className="Hero bg-zinc-800 text-white p-8 leading-snug flex flex-col gap-4">
        <h1 className="text-[2rem] tracking-tight font-bold">
          Learn the Basics: Web Development
        </h1>
        <p className="leading-relaxed tracking-wide">
          Learn how to develop effective and captivating websites using the
          latest web development tools and practices. Gain experience developing
          with HTML, JavaScript, CSS, Python, and more. Our expert authors guide
          you through development and testing via easy-to-follow web development
          courses.
        </p>
        <div>
          <div>
            <div className="border-2 border-zinc-600 w-fit p-[.35rem] rounded-full">
              <img
                src={profile}
                alt="profile image of tutor"
                className="w-20 h-auto rounded-full border-2 border-zinc-500"
              />
            </div>
            <h3 className="text-zinc-400 font-semibold tracking-wide">
              Created by{" "}
              <span className="text-[.65rem] block tracking-wider text-zinc-300 font-medium">
                the.quietdev
              </span>
            </h3>
          </div>
        </div>
      </section>
      <section className="w-fit flex items-center justify-evenly gap-8 mx-auto md:w-full xl:max-w-7xl">
        {["Overview", "Curriculum", "Instructor"].map((tabButton) => {
          return (
            <section key={tabButton} className="border-b-2 border-zinc-700">
              <button className="rounded-md p-2 mt-6 tracking-wide">
                {tabButton}
              </button>
            </section>
          );
        })}
      </section>

      <section className="mx-8 my-10">
        <h3 className="font-semibold mb-4 mt-12 tracking-wide">
          Course Description
        </h3>
        <div className="text-sm flex flex-col gap-8 leading-6 tracking-loose">
          <p>
            Do you want to become a UI/UX designer but you don't know where to
            start? This course will allow you to develop your user interface
            design skills and you can add UI designer to your CV and start
            getting clients for your skills.{" "}
          </p>

          <p>
            {" "}
            Hi everyone. I'm Arash and I'm a UI/UX designer. In this course, I
            will help you learn and master Figma app comprehensively from
            scratch. Figma is an innovative and brilliant tool for User
            Interface design. It's used by everyone from entrepreneurs and
            start-ups to Apple, Airbnb, Facebook, etc.
          </p>

          <p>
            {" "}
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente I will help you learn and
            master Figma app comprehensively from scratch. Figma is an
            innovative and brilliant tool for User Interface design. It's used
            by everyone from entrepreneurs ea proident.
          </p>
        </div>

        <h3 className="font-semibold mb-6 tracking-wide mt-16">
          What you'll learn
        </h3>
        <ul className="flex flex-col gap-4 text-sm">
          <li className="flex items-center gap-4">
            <FontAwesomeIcon icon={faCheck} />
            Become a Web Developer.
          </li>
          <li className="flex items-center gap-4">
            <FontAwesomeIcon icon={faCheck} />
            Build a project from beginning to end.
          </li>
        </ul>

        <h3 className="font-semibold mb-6 tracking-wide mt-16">Requirements</h3>
        <ul className="flex flex-col gap-4 text-sm">
          <li className="flex items-center gap-4">
            <FontAwesomeIcon icon={faCheck} />
            We do not require any previous experience or pre-defined skills to
            take this course. A great orientation would be enough to master Web
            Development.
          </li>
          <li className="flex items-center gap-4">
            <FontAwesomeIcon icon={faCheck} />A computer with a good internet
            connection.
          </li>
        </ul>
      </section>
    </section>
  );
};

export default CourseDetail;
