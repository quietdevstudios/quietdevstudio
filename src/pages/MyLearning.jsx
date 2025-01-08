import React from "react";
import { Link } from "react-router";

const MyLearning = () => {
  return (
    <section className="h-screen font-montserrat">
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
      <main className="flex flex-col items-center justify-center h-screen">
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
      </main>
    </section>
  );
};

export default MyLearning;
