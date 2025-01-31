import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Students Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 italic">
              "Quietdev Studios transformed my career. The courses are
              top-notch, and the community is incredible!"
            </p>
            <h4 className="mt-4 text-blue-600 font-semibold">- Jane Doe</h4>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 italic">
              "I landed my first developer job thanks to the hands-on projects
              and guidance from Quietdev Studios."
            </p>
            <h4 className="mt-4 text-blue-600 font-semibold">- John Smith</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
