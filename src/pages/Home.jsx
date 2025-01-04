import {
  faCircleNodes,
  faGraduationCap,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
// import Maintenance from "../components/Maintenance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import qlVideo from "/ql.mp4";

const Home = () => {
  return (
    <>
      <main className="font-montserrat text-zinc-600">
        <section className="relative text-center bg-orange-100 leading-10 flex flex-col items-center justify-center gap-8 p-8 h-[28rem]">
          <h1 className="text-[2.2rem] font-medium leading-10 tracking-tighter">
            Your{" "}
            <span className="text-orange-600">
              Gateway to Modern Web Development
            </span>{" "}
            Starts Here
          </h1>
          <p className="font-medium text-[1.125rem] leading-6 tracking-wide">
            Learn to code with structured lessons, hands-on projects, and step
            by step guidance.
          </p>
          <a
            href="curriculum"
            className="border border-orange-500 w-fit p-2 px-6 text-[1.25rem] font-medium tracking-wider rounded-md text-orange-600 hover:bg-orange-50 capitalize"
          >
            start your journey
          </a>
          {/* <video height="100px" loop autoPlay muted>
            <source src={qlVideo} type="video/mp4" />
          </video> */}
        </section>

        <section className="text-center p-6 my-12">
          <div className="flex flex-col gap-8 max-w-7xl mx-auto xl:grid">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-medium text-orange-500">
                How it works
              </h1>
              <p className="text-[1.05rem] font-regular tracking-wider">
                This platform is designed to be the ultimate guide we wish we
                had when starting out. We've gathered the most valuable
                resources, organized them into a clear learning path, and made
                it easy for you to focus on what truly matters—mastering web
                development.
              </p>
            </div>
            <div className="flex flex-col gap-24 md:grid md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-6">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  size="5x"
                  color="orange"
                />
                <h1 className="text-2xl font-medium text-orange-500 tracking-wider">
                  Learn
                </h1>
                <p className="text-[1rem] font-light tracking-wider">
                  Follow a carefully crafted syllabus featuring top-notch
                  tutorials, articles, and videos from across the web. Each step
                  is designed to help you gain a deep understanding of the
                  skills you need to succeed.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <FontAwesomeIcon icon={faLaptopCode} size="5x" color="orange" />
                <h1 className="text-2xl font-medium text-orange-500 tracking-wider">
                  Build
                </h1>
                <p className="text-[1rem] font-light tracking-wider">
                  Create a diverse portfolio of projects that showcase your
                  skills. From interactive web pages to fully functional
                  applications, every project is a stepping stone to becoming a
                  confident developer.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <FontAwesomeIcon
                  icon={faCircleNodes}
                  size="5x"
                  color="orange"
                />
                <h1 className="text-2xl font-medium text-orange-500 tracking-wider">
                  Connect
                </h1>
                <p className="text-[1rem] font-light tracking-wider">
                  You're part of a supportive network. Engage with a vibrant
                  community of learners and professionals who are here to share
                  knowledge, answer questions, and celebrate your progress.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
