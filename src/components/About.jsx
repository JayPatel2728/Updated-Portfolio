import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
            Currently studying Computer Science (Co-op) at Toronto Metropolitan University. I have an interest in cloud computing and building Full Stack applications with React, Node.js and Javascript which can be viewed on my portfolio website. I am also proficient in Java and Python. I firmly feel that the skills I have gained from the challenging environment and competitive university life define who I am, and I strive to use and improve them in any opportunity I receive.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;