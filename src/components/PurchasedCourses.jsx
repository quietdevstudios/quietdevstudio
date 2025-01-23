import React from "react";
import { Link } from "react-router-dom";

const PurchasedCourses = ({ id, title, tutor, image }) => {
  return (
    <>
      <section className="p-8 w-full">
        <Link
          to={id}
          key={id}
          className="w-full cursor-pointer"
          state={{ id, title, tutor, image }}
        >
          <img src={image} alt="course thumbnail" className="w-full mx-auto" />
          <h1 className="font-bold tracking-wider mt-2">{title}</h1>
          <p className="font-medium">{tutor}</p>
          <div className="leading-6 flex flex-col mt-4 gap-1">
            <span className="border-2 border-zinc-600"></span>
            <span className="text-sm uppercase tracking-wider">
              start course / 50% complete
            </span>
          </div>
        </Link>
      </section>
    </>
  );
};

export default PurchasedCourses;
