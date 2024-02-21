import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-400  to-white text-black "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Dedicated and highly skilled Frontend Developer with a passion for
          creating visually appealing and user-friendly web interfaces.
          Proficient in HTML, CSS, and JavaScript, with a keen eye for design
          and a commitment to delivering seamless and responsive user
          experiences.
        </p>

        <br />

        <p className="text-xl">
          A Strong problem-solving abilities and a collaborative mindset, backed
          by a solid foundation in modern frontend frameworks and best
          practices. A proactive and detail-oriented professional, committed to
          staying abreast of emerging technologies to drive innovation in web
          development.
        </p>
      </div>
    </div>
  );
};

export default About;
