import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Quietdev Studios
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Empowering aspiring developers with cutting-edge courses and
            hands-on learning.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-200">
            Explore Courses
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Learn with Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-code text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
              <p className="text-gray-600">
                Learn from industry professionals with real-world experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-purple-600 text-white rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-laptop-code text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-On Projects</h3>
              <p className="text-gray-600">
                Build portfolio-worthy projects to showcase your skills.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-users text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">
                Join a thriving community of developers to collaborate and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Popular Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">
                Frontend Development
              </h3>
              <p className="text-gray-600 mb-4">
                Master HTML, CSS, and JavaScript to build stunning websites.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">
                React for Beginners
              </h3>
              <p className="text-gray-600 mb-4">
                Learn ReactJS to create dynamic and interactive web apps.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">
                Backend with Node.js
              </h3>
              <p className="text-gray-600 mb-4">
                Dive into backend development with Node.js and Express.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">© 2025 Quietdev Studios. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-400">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
