import React from "react";
import maintenanceImg from "/assets/images/bulb.png";

const Maintenance = () => {
  return (
    <>
      <section className="bg-orange-0 flex flex-col items-center justify-center min-h-screen my-10 w-[95%] mx-auto stars">
        <h2 className="text-4xl text-orange-500 font-semibold">Website is</h2>
        <img src={maintenanceImg} className="w-full max-w-7xl mx-auto" />
        <h2 className="text-4xl text-orange-500 font-semibold">
          Will be back soon.
        </h2>
      </section>
    </>
  );
};

export default Maintenance;
