import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Errorpage = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center min-h-screen text-center p-6">
        {/* <h1 className="capitalize">{title}</h1> */}
        <p>{/* <i>{message}</i> */}</p>
      </section>
      <Footer />
    </>
  );
};

export default Errorpage;
