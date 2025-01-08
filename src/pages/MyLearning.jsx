import React from "react";
import { Link } from "react-router";
import thumbnailImg from "/download.jpg";
import cssImg from "/css.jpg";
import jsImg from "/js.jpeg";

const MyLearning = () => {
  return (
    <section className="font-montserrat">
      <header className="bg-zinc-700 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl text-center font-semibold p-[3rem]">
          My learning
        </h1>
        <nav className="flex items-end justify-start w-full px-8">
          <ul className="flex gap-6">
            <li className="text-white font-bold text-[1rem] tracking-wide border-b-8 border-orange-600 w-fit">
              <a href="#">All courses</a>
            </li>

            <li className="text-white font-bold text-[1rem] tracking-wide">
              <a href="#">Wishlist</a>
            </li>

            <li className="text-white font-bold text-[1rem] tracking-wide">
              <a href="#">Learning tools</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center">
        {/* <>
          <h2 className="text-2xl font-bold text-center tracking-wide">
            Explore Over 50,000 Courses and Start Learning Today!
          </h2>
          <p className="py-6 text-lg text-center font-medium tracking-wide">
            Your purchased courses will be displayed here.
          </p>
          <Link
            to="/"
            className="border-b-2 border-orange-600 w-fit text-orange-600 text-lg font-bold tracking-wide"
          >
            Browse courses.
          </Link>
        </> */}
        <>
          {/* 1 */}
          <section className="flex flex-col gap-10 p-8">
            <article className="leading-6s w-full p-2">
              <img
                src={thumbnailImg}
                alt="course thumbnail"
                className="w-full mx-auto"
              />
              <h1 className="font-bold tracking-wider mt-2">
                HTML for Beginners
              </h1>
              <p className="font-medium">quietdev</p>
              <div className="leading-6 flex flex-col mt-4 gap-1">
                <span className="border-2 border-zinc-600"></span>
                <span className="text-sm uppercase tracking-wider">
                  start course
                </span>
              </div>
            </article>

            {/* 2 */}
            <article className="leading-6s w-full p-2">
              <img
                src={cssImg}
                alt="course thumbnail"
                className="w-ful mx-auto"
              />
              <h1 className="font-bold tracking-wider mt-2">
                CSS for Beginners
              </h1>
              <p className="font-medium">quietdev</p>
              <div className="leading-6 flex flex-col mt-4 gap-1">
                <span className="border-2 border-zinc-600"></span>
                <span className="text-sm uppercase tracking-wider">
                  start course
                </span>
              </div>
            </article>

            {/* 3 */}
            <article className="leading-6s w-full p-2">
              <img
                src={jsImg}
                alt="course thumbnail"
                className="w-ful mx-auto"
              />
              <h1 className="font-bold tracking-wider mt-2">
                JavaScript for Beginners
              </h1>
              <p className="font-medium">quietdev</p>
              <div className="leading-6 flex flex-col mt-4 gap-1">
                <span className="border-2 border-zinc-600"></span>
                <span className="text-sm uppercase tracking-wider">
                  start course
                </span>
              </div>
            </article>
          </section>
        </>
      </main>
    </section>
  );
};

export default MyLearning;
