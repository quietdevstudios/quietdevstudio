import {
  faCircleNodes,
  faGraduationCap,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { PopularCourses } from "../components/PopularCourses";
import Testimonials from "../components/Testimonials";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <main className="font-montserrat text-zinc-600">
        <section className="relative text-center bg-zinc-800 leading-10 flex flex-col items-center justify-center gap-6 p-4 py-6 text-white">
          <h1 className="text-[1.75rem] font-bold leading-tight tracking-wide md:text-[2.5rem] lg:text-[3.25rem] lg:px-60">
            Your{" "}
            <span className="text-orange-200">
              Gateway to Modern Web Development
            </span>{" "}
            Starts Here
          </h1>
          <p className="font-medium text-[1rem] leading-6 tracking-wide">
            Learn to code with structured lessons, hands-on projects, and step
            by step guidance.
          </p>
          <Link
            to="courses"
            className="border border-orange-50 w-fit p-2 px-6 text-[1.25rem] font-medium tracking-wider rounded-md text-white hover:bg-orange-50 hover:text-orange-600 capitalize transition duration-300"
          >
            start your journey
          </Link>
          {/* <video height="100px" loop autoPlay muted>
            <source src={qlVideo} type="video/mp4" />
          </video> */}
        </section>

        <section className="text-center p-6 my-12">
          <div className="flex flex-col gap-8 max-w-7xl mx-auto xl:grid">
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl font-bold">How it works</h1>
              <p className="font-regular tracking-wider">
                This platform is designed to be the ultimate guide we wish we
                had when starting out. We've gathered the most valuable
                resources, organized them into a clear learning path, and made
                it easy for you to focus on what truly matters—mastering web
                development.
              </p>
            </div>
            <div className="flex flex-col gap-24 mt-12 md:grid md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-6">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  size="3x"
                  color="orange"
                />
                <h1 className="text-2xl font-medium text-orange-500 tracking-wider">
                  Learn
                </h1>
                <p className="font-light tracking-wider">
                  Follow a carefully crafted syllabus featuring top-notch
                  tutorials, articles, and videos from across the web. Each step
                  is designed to help you gain a deep understanding of the
                  skills you need to succeed.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <FontAwesomeIcon icon={faLaptopCode} size="3x" color="orange" />
                <h1 className="text-2xl font-medium text-orange-500 tracking-wider">
                  Build
                </h1>
                <p className="font-light tracking-wider">
                  Create a diverse portfolio of projects that showcase your
                  skills. From interactive web pages to fully functional
                  applications, every project is a stepping stone to becoming a
                  confident developer.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <FontAwesomeIcon
                  icon={faCircleNodes}
                  size="3x"
                  color="orange"
                />
                <h1 className="text-2xl font-medium text-orange-500 tracking-wider">
                  Connect
                </h1>
                <p className="font-light tracking-wider">
                  You're part of a supportive network. Engage with a vibrant
                  community of learners and professionals who are here to share
                  knowledge, answer questions, and celebrate your progress.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
              Why Learn with Us?
            </h2>
            <div className="flex flex-col gap-24 mt-12 md:grid md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-code text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Expert-Led Courses
                </h3>
                <p className="text-gray-600">
                  Learn from industry professionals with real-world experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-purple-600 text-white rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-laptop-code text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Hands-On Projects
                </h3>
                <p className="text-gray-600">
                  Build portfolio-worthy projects to showcase your skills.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-users text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Community Support
                </h3>
                <p className="text-gray-600">
                  Join a thriving community of developers to collaborate and
                  grow.
                </p>
              </div>
            </div>
          </div>
        </section>
        <PopularCourses />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
