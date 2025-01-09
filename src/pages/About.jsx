import React from "react";

const About = () => {
  return (
    <section className="font-montserrat">
      {/* Hero Section */}
      <div className="bg-zinc-700 text-white py-8">
        <div className="md:px-12 lg:px-20 text-center flex flex-col items-center gap-2">
          <h1 className="text-[2.2rem] p-3 font-bold leading-tight tracking-wide md:text-[2.5rem] lg:text-[3.25rem] lg:px-60">
            Empowering Tomorrow's{" "}
            <span className="text-orange-200">Developers</span>
          </h1>
          <p className="mb-8 font-medium text-[1rem] leading-6 tracking-wide px-4">
            At Quietdev Studios, we believe in transforming dreams into reality
            by providing top-notch education in web development and technology.
            Join a platform where innovation meets learning.
          </p>
          <a
            href="/signup"
            // className="inline-block bg-f7a399 text-ef6351 py-3 px-6 rounded-lg shadow hover:bg-fbc3bc transition duration-300"
            className="border border-orange-50 w-fit px-6 py-3 font-medium tracking-wider rounded-md text-white hover:bg-orange-50 hover:text-orange-600 capitalize transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="text-center">
          <h1 className="text-[2.25rem] font-bold leading-tight tracking-wide text-gray-800 mb-4">
            About Quietdev Studios
          </h1>
          <p className="text-gray-600 mb-8">
            Quietdev Studios is a premier learning platform dedicated to
            empowering aspiring developers with the knowledge and skills needed
            to excel in the tech industry. We specialize in delivering
            high-quality courses in web development, front-end frameworks, and
            beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              At Quietdev Studios, our mission is to make learning accessible,
              engaging, and practical. We strive to create a supportive
              community where students can learn at their own pace and build
              real-world projects to showcase their skills.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To be the go-to platform for aspiring developers worldwide,
              fostering creativity, innovation, and a love for technology. We
              envision a future where anyone can become a tech leader with the
              right guidance and resources.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Comprehensive and beginner-friendly courses.</li>
              <li>Interactive learning with practical projects.</li>
              <li>
                Dedicated support and guidance from experienced instructors.
              </li>
              <li>Community-driven learning to foster collaboration.</li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600">
              Connect with like-minded learners, share your progress, and grow
              together in a supportive environment. Our community is here to
              help you succeed.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Start Your Learning Journey
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of students who have transformed their careers with
            Quietdev Studios. Explore our courses and take the first step toward
            your tech career.
          </p>
          <a
            href="/courses"
            // className="inline-block bg-ef6351 text-white py-3 px-6 rounded-lg shadow hover:bg-f38375 transition duration-300"
            className="border border-orange-200 w-fit px-6 py-3 font-medium tracking-wider rounded-md text-orange-600 hover:bg-orange-500 hover:text-white capitalize transition duration-300"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
