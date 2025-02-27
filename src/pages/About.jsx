import React from "react";
import { Link } from "react-router-dom";
import { AnimatedLink } from "../components/Buttons/MotionLink";
import { motion } from "framer-motion";

const About = () => {
  const MotionLink = motion(Link);
  return (
    <section className="font-montserrat">
      {/* Hero Section */}
      <section className="bg-zinc-800 text-white py-6">
        <div className="md:px-12 lg:px-20 text-center flex flex-col items-center gap-2">
          <h1 className="text-[1.7rem] px-1 font-bold leading-tight tracking-wide md:text-[2.5rem] lg:text-[3.25rem] lg:px-60">
            Empowering Tomorrow's{" "}
            <span className="text-orange-200">Developers</span>
          </h1>
          <p className="mb-8 font-medium text-[1rem] leading-6 tracking-wide px-1">
            QuietDev Studios makes learning simple, structured, and
            beginner-friendly. Start your journey today!
          </p>
          <AnimatedLink
            to="/signup"
            className="border border-orange-50 w-fit px-6 py-3 font-medium tracking-wider rounded-md text-white hover:bg-orange-50 hover:text-orange-600 capitalize"
          >
            Get Started
          </AnimatedLink>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="text-center">
          <h1 className="text-[1.85rem] font-bold leading-tight tracking-wide text-gray-800 mb-4">
            About Quietdev Studios
          </h1>
          <p className="text-gray-600 mb-8">
            QuietDev Studios helps beginners and aspiring developers grasp web
            development concepts easily and quickly. We break down complex
            topics, provide structured learning paths, and offer support to
            ensure no one feels overwhelmed. Our goal is to remove barriers and
            make learning web development smooth and accessible for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 tracking-tighter leading-relaxed">
              At Quietdev Studios, our mission is to make learning simple,
              engaging, and stress-free. We aim to provide an environment where
              learners can grasp complex concepts in less time through clear,
              structured lessons and practical projects. Our focus is on
              reducing the barriers to understanding, ensuring that every
              learner feels supported and empowered to succeed in their tech
              journey.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 tracking-tighter leading-relaxed">
              Our vision is to become the leading platform worldwide, recognized
              for our innovative and accessible approach to learning. We strive
              to create a future where no learner feels overwhelmed or left
              behind, fostering a global community of confident and skilled
              learners who are ready to shape the tech industry.
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
          <AnimatedLink
            to="/courses"
            className="border border-orange-200 w-fit px-6 py-3 font-medium tracking-wider rounded-md text-orange-600 hover:bg-orange-500 hover:text-white capitalize"
          >
            Explore Courses
          </AnimatedLink>
        </div>
      </section>
    </section>
  );
};

export default About;
