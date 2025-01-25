import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import profile from "/profile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import video from "/wontFail.mp4";
import {
  faCalendar,
  faClock,
  faFile,
  faLock,
  faMinus,
  faPlay,
  faPlus,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const CourseDetail = () => {
  // const { courseId } = useParams();
  // const location = useLocation();
  // console.log(location);

  // useEffect(() => {}, [location.pathname]);

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
            <h3 className="text-zinc-400 font-semibold tracking-wide mt-2">
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

      {/* Overview Section */}
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

      {/* Curriculum Section */}
      <section className="mx-8 my-12">
        <h3 className="font-semibold mb-4 tracking-wide">Curriculum</h3>
        <ul>
          <li className="mb-8">
            <button className="border border-zinc-100 shadow-md w-full rounded-md p-7 text-left flex items-center gap-3">
              <FontAwesomeIcon icon={faMinus} />
              <h4 className="text-sm font-medium">Introduction</h4>
            </button>
            <ul className="mt-4">
              {/* one */}
              <li className="p-4 pb-6 border-b rounded-md mt-2">
                <p className="text-sm font-regular mb-5 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faFile} size="lg" />
                  Introduction to course
                </p>
                <div className="flex items-center gap-6">
                  <p className="bg-orange-100 text-[10px] tracking-wide p-2 rounded-md">
                    3 question
                  </p>
                  <p className="bg-blue-100 text-[10px] tracking-wide p-2 rounded-md">
                    30 min
                  </p>
                  <button className="ml-4">
                    <FontAwesomeIcon icon={faPlay} size="lg" />
                  </button>
                </div>
              </li>
              {/* two */}
              <li className="p-4 pb-6 border-b rounded-md bg-zinc-50 mt-2">
                <p className="text-sm font-regular mb-5 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faFile} size="lg" />
                  Introduction
                </p>
                <div className="flex items-center gap-6">
                  <FontAwesomeIcon icon={faLock} />
                </div>
              </li>
              {/* two */}
              <li className="p-4 pb-6 border-b rounded-md bg-zinc-50 mt-2">
                <p className="text-sm font-regular mb-5 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faClock} size="lg" />
                  Required Tools
                </p>
                <div className="flex items-center gap-6">
                  <p className="bg-orange-100 text-[10px] tracking-wide p-2 rounded-md">
                    12 lectures
                  </p>
                  <p className="bg-blue-100 text-[10px] tracking-wide p-2 rounded-md">
                    30 min
                  </p>
                  <button className="ml-4">
                    <FontAwesomeIcon icon={faLock} size="lg" />
                  </button>
                </div>
              </li>
              {/* three */}
              <li className="p-4 pb-6 border-b rounded-md mt-2">
                <p className="text-sm font-regular mb-5 flex gap-3 items-center">
                  <FontAwesomeIcon icon={faClock} size="lg" />
                  Course Structure
                </p>
                <div className="flex items-center gap-6">
                  <p className="bg-orange-100 text-[10px] tracking-wide p-2 rounded-md">
                    3 question
                  </p>
                  <p className="bg-blue-100 text-[10px] tracking-wide p-2 rounded-md">
                    30 min
                  </p>
                  <button className="ml-4">
                    <FontAwesomeIcon icon={faPlay} size="lg" />
                  </button>
                </div>
              </li>
            </ul>
          </li>

          <li>
            <button className="border border-zinc-100 shadow-md w-full rounded-md p-7 text-left flex items-center gap-3">
              <FontAwesomeIcon icon={faPlus} />
              <h4 className="text-sm font-medium">Web Development Basics</h4>
            </button>
          </li>
        </ul>
      </section>

      {/* Instructor Section */}
      <section className="mx-8">
        <h3 className="font-semibold mb-4 mt-12 tracking-wide">
          About the instructor
        </h3>
        <div>
          <div className="flex items-center gap-8">
            <div className="border-2 border-zinc-600 w-fit p-[.35rem] rounded-full">
              <img
                src={profile}
                alt="profile image of tutor"
                className="w-20 h-auto rounded-full border-2 border-zinc-500"
              />
            </div>
            <h3 className="text-zinc-400 font-semibold tracking-wide mt-2 text-xs">
              the.quietdev{" "}
              <span className="text-[.8rem] block tracking-wider text-zinc-600 font-medium pt-1">
                Web Developer
              </span>
            </h3>
          </div>
        </div>

        <div className="text-sm flex flex-col gap-8 leading-6 tracking-loose py-8">
          <p>
            I am a web developer with having almost three years of experience in
            web development.
          </p>

          <p>
            My passion is helping people to learn new skills in a short-term
            course and achieve their goals. It's my honor if I could help you
            learn to program in a simple word. I currently am teaching HTML,
            CSS, JavaScript etc.
          </p>
        </div>
      </section>

      <section className="border rounded w-[85%] mx-auto p-[7px] my-10 shadow-md">
        <div className="mx-auto text-center flex items-center justify-center">
          <video
            className="lg:flex lg:items-center lg:justify-center lg:flex-col lg:w-full lg:max-w-[75vw] lg:h-auto lg:max-h-[100vh] lg:mx-auto rounded"
            controls
            width="100%"
            height="auto"
            poster="https://i.ytimg.com/vi/i-_OMSGpt1k/maxresdefault.jpg"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="rounded my-1 flex items-start justify-between p-6">
          <span className="flex gap-1 flex-col">
            <p className="font-semibold text-2xl tracking-wider flex items-center gap-2">
              $89.99
              <span className="line-through text-sm text-zinc-400 font-medium">
                339.99
              </span>
            </p>
            <p className="text-red-600 text-sm font-medium tracking-wide">
              2 days left at this price!
            </p>
          </span>
          <span className="rounded bg-zinc-700 px-4 py-2">
            <p className="text-xs text-white">91% Off</p>
          </span>
        </div>

        <div className="p-2 flex flex-col gap-3 rounded-md">
          <button className="bg-blue-900 rounded p-4 text-white font-semibold hover:bg-blue-950">
            BUY NOW
          </button>
          <button className="bg-orange-300 rounded p-4 text-white font-semibold hover:bg-orange-400">
            ENROLL
          </button>
        </div>

        <ul className="px-2 mt-8 flex flex-col gap-6">
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCalendar} color="orange" />
              <p className="font-medium text-sm">Duration</p>
            </span>
            <p className="font-medium tracking-wide text-sm">43 weeks</p>
          </li>
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCalendar} color="orange" />
              <p className="font-medium text-sm">Lectures</p>
            </span>
            <p className="font-medium tracking-wide text-sm">32</p>
          </li>
          <li className="flex items-center justify-between">
            <span className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCalendar} color="orange" />
              <p className="font-medium text-sm">Enrolled</p>
            </span>
            <p className="font-medium tracking-wide text-sm">1982 students</p>
          </li>
        </ul>

        <div className="text-center">
          <button className="text-sm tracking-wide font-medium text-center my-5">
            Share this course
          </button>
        </div>
      </section>
    </section>
  );
};

export default CourseDetail;
