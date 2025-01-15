import React from "react";
import { Link } from "react-router-dom";

const PurchasedCourses = ({ id, title, tutor, image }) => {
  return (
    <>
      <section className="flex flex-col gap-10 p-8 w-full">
        <Link to={id} key={id} className="leading-6s w-full p-2 cursor-pointer">
          <img src={image} alt="course thumbnail" className="w-full mx-auto" />
          <h1 className="font-bold tracking-wider mt-2">{title}</h1>
          <p className="font-medium">{tutor}</p>
          <div className="leading-6 flex flex-col mt-4 gap-1">
            <span className="border-2 border-zinc-600"></span>
            <span className="text-sm uppercase tracking-wider">
              start course
            </span>
          </div>
        </Link>
      </section>
    </>
  );
};

export default PurchasedCourses;
