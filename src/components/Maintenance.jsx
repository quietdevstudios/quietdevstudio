import React from "react";
import maintenanceImg from "/assets/images/bulb.png";

const Maintenance = () => {
  return (
    <>
      <section className="bg-orange-50">
        <img src={maintenanceImg} className="w-full max-w-7xl mx-auto" />
      </section>
    </>
  );
};

export default Maintenance;
